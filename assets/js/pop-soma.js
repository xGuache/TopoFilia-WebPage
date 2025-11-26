
const pop_cont = document.getElementById('pop-cont');
const Portada = document.getElementById('track-portada');
const text_popup = document.getElementById('popover-info');

let TextosData = null;

let TextosCompletos = {};



async function LoadData_Soma() {

    try {
        
        // llamada Json

        const response = await fetch('/assets/js/json/SOMA.json'
        ); 
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const popdata = await response.json();
        console.log("Datos cargados con éxito:", popdata);

        return popdata;

    } catch (error) {
        console.error("Error al cargar los datos", error);
    }
};



function manejarClickHotspot(event) {

    
    const DOMobjectid = event.currentTarget.dataset.textId;
    
    event.stopPropagation();

    TextosData = TextosCompletos[DOMobjectid];

    console.log("se cargo:", TextosData);

   if (TextosData) {

        Portada.src = TextosData.img_src;      
        cargaContenidoTexto(TextosData);
        text_popup.classList.add('mostrar');

    } else {
        console.error(`Error: No se encontró información para el ID: ${DOMobjectid}`);
    }
};




async function initializeApp() {

    TextosCompletos = await LoadData_Soma(); // Esperar a que cargue el JSON 

    if (TextosCompletos && Object.keys(TextosCompletos).length > 0) {
        
        //Leer los clicks

        const Soma_hotspots = document.querySelectorAll('[data-text-id]');
        
        Soma_hotspots.forEach(hotspot => {

            hotspot.addEventListener('click', manejarClickHotspot);

        });

        
    }
        
        else {
        console.log("No hay datos para inicializar.");
    }
};



function cargaContenidoTexto(TextosData) {

    if (TextosData && TextosData.text_content && TextosData.text_content.length > 0){
            
                document.getElementById('text_title').innerHTML = TextosData.text_content[0].name;
                document.getElementById('text_author').innerHTML = TextosData.text_content[0].author;
                document.getElementById('text_content').innerHTML = TextosData.text_content[0].content.replace(/\n/g, '<br>');

            //text_popup.classList.add('mostrar-mp3');
  
        }
};




document.addEventListener('click', (e) => {
    // Si el popover está activo Y el click fue fuera del popover y fuera de un trigger

    if (text_popup.classList.contains('mostrar') && !pop_cont.contains(e.target))  {
        text_popup.classList.remove('mostrar');

        TextosData = null;
    }
});


document.addEventListener('DOMContentLoaded', initializeApp());