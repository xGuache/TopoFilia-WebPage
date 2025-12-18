//Esta funcion define el comportamiento de los ventanas modales para el visualizador de informacion sobre el mural de "La cocina sumapaceña by SOMA"

const pop_cont = document.getElementById('soma-pop-cont');
const Portada = document.getElementById('soma-track-portada');
const text_popup = document.getElementById('soma-popover-info');

let TextosData = null;

let TextosCompletos = {};



//Se carga la data de cada HOTSPOT en un JSON

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


//Carga la data del HOTSPOT clickeado y muestra el visualizador

function manejarClickHotspot(event) {

    
    const DOMobjectid = event.currentTarget.dataset.textId;
    
    event.stopPropagation();

    TextosData = TextosCompletos[DOMobjectid];

    //console.log("se cargo:", TextosData);

   if (TextosData) {

        Portada.src = TextosData.img_src;      
        cargaContenidoTexto(TextosData);
        text_popup.classList.add('mostrar-pop-soma');

    } else {
        console.error(`Error: No se encontró información para el ID: ${DOMobjectid}`);
    }
};



// Verifica si existen datos en el JSON

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


//Carga el contenido al visualizador de la indormacion del hotspot

function cargaContenidoTexto(TextosData) {

    if (TextosData && TextosData.text_content && TextosData.text_content.length > 0){
            
                document.getElementById('soma-text_title').innerHTML = TextosData.text_content[0].name;
                document.getElementById('soma-text_author').innerHTML = TextosData.text_content[0].author;
                document.getElementById('soma-text_content').innerHTML = TextosData.text_content[0].content.replace(/\n/g, '<br>');
  
        }
};


// Si el popover está activo Y el click fue fuera del popover y fuera de un trigger

document.addEventListener('click', (e) => {
    

    if (text_popup.classList.contains('mostrar-pop-soma') && !pop_cont.contains(e.target))  {
        text_popup.classList.remove('mostrar-pop-soma');

        TextosData = null;
    }
});


document.addEventListener('DOMContentLoaded', initializeApp());