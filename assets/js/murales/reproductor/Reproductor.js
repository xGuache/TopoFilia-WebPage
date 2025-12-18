// Esta funcion define el comportamiento del reproductor y visualizador de la informacion de los elementos del mural
// El reproductor estara escondido hasta que se haga click sobre un elemento del mural o "HOTSPOT"
// Se comporta como un reproductor MP3 que carga albums con varias pistas e informacion adicional, el cual carga la data desde un archivo json
/*

La estrucuta del JSON esta dada de la siguiente manera:

   "id": "", --- Usado para relacionar la informacion con el HOTSPOT.
    "portada_url": "", --- Carpeta de la imagen que se cargara cuando se abra el visualizador.
    "almbum_title":  ", --- El titulo que tendra el visualizador.
    "info_text": [{ --- Informacion adicional de textos sobre el item.

      "text_title":"", --- Titulo del Texto
      "text_author":"Autor:  ",  --- Autor del Texto
      "text_content":""  --- Contenido del texto

      }] ,
"tracks": [  --- Informacion de los tracks o pistas de audio
      {
        "title": "",  --- Titulo del track
        "track_src": ""  --- Carpeta del track
      },
      {
        "title": "",
        "track_src": ""
      }
    ]
  },
*/


//Definicion de variables

//Informacion de titulo del album y nombre de la pista de audio

const TitleTrack = document.querySelector('.track-title h1');
const ArtisName = document.querySelector('.track-title p');

//Barra de progreso
const Progress_Audio = document.getElementById('progress_audio');
const Audio_Track = document.getElementById('Audio_Track');

//Botones de control de audio
const Back_btn = document.querySelector('.mp3-controls_btn  button.Previous');
const Next_btn = document.querySelector('.mp3-controls_btn  button.Next');
const PlayPause_Btn = document.querySelector('.mp3-controls_btn  button.Play-Pause');

//Boton de play y pausa
const PlayPause_icon = document.getElementById('playpause_icon');

const TrackList_Container = document.getElementById('trackList_container');

// Portada del album o item del hotspot 
const Portada = document.getElementById('mp3-track-portada');

// Caja del reproductor y visualizer
const PopMP3 = document.getElementById('MP3');
const visualizer = document.getElementById('mp3-container-visualizer');

// Informacion adicional el album
const text_popup = document.getElementById('mp3-popover-info');
const carpeta = document.getElementById('folder-pop');



let TrackList= [];
let AlbumInfo = null;


document.addEventListener('DOMContentLoaded', initializeApp());


// Carga el contenido del JSON 

async function loadAudioData() {

    try {

        const response = await fetch('/assets/js/json/visualizer-data.json'); 
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const TrackData = await response.json();

        return TrackData;

    } catch (error) {
        console.error("Error al cargar los datos", error);
    }
};


//Valida si existe datos en el JSON y lee los clcik sobre los Hotspot con meta data track-id

async function initializeApp() {

    TrackList = await loadAudioData(); // Esperar a que cargue el JSON 

    if (TrackList && TrackList.length > 0) {
        
        //Leer los clicks

        const hotspots = document.querySelectorAll('[data-track-id]');
        
        hotspots.forEach(hotspot => {

            hotspot.addEventListener('click', manejarClickHotspot);

        });

        
    }
        
        else {
        console.error("No hay datos para inicializar.");
    }
};




// Carga el contenido del Hotspot el cual se haya clickeado bajo el track-ID Y muestra la interfaz del reproductor

function manejarClickHotspot(event) {

    
    const DOMtrackid = event.currentTarget.dataset.trackId;

    AlbumInfo = TrackList.find(item => {

        return item.id === DOMtrackid;

    });

   if (AlbumInfo) {
     
        TrackListUpdate(AlbumInfo);
        TrackInfoUpdate(AlbumInfo);
        Portada.src = AlbumInfo.portada_url;      
        MostrarCarpeta(AlbumInfo);
        cargaContenidoTexto(AlbumInfo);

        PopMP3.classList.add('mostrar-mp3');
        event.stopPropagation();

    } else {
        console.error(`Error: No se encontró información para el ID: ${DOMtrackid}`);
    }
};



//Se usa un index para cada pista de audio cargada para poder moverse hacia adelante y atras.

let CurrentTrackIndex = 0;

//Actualiza la informacion del track list.

function TrackListUpdate (AlbumInfo){
    
    TrackList_Container.innerHTML = '';

    if (AlbumInfo){

    AlbumInfo.tracks.forEach(( TrackItem, index ) => {
        
            //console.log('cargado los tracks', TrackItem);

            const li = document.createElement('li');
            const LiActive = document.querySelector('#track .active');
            
            li.textContent = `${TrackItem.title}`;
        
            // Click list to play
            
            li.onclick = function(){
                CurrentTrackIndex = index;
                TrackInfoUpdate(AlbumInfo);
                PlayPause();
            };

            if(index === CurrentTrackIndex){
                li.classList.add('active');
            }
            
            if (LiActive && TrackList_Container) {
                
            // 3. Usar scrollIntoView() para hacer visible el elemento
            LiActive.scrollIntoView({
                behavior: 'smooth', // Animación suave
                block: 'center',     // Intenta centrar el elemento verticalmente
                inline: 'nearest'
        });
        }      
            TrackList_Container.appendChild(li);
     })
    }

};



//Actualiza la informacion de la UI con la infotmacion del Track

function TrackInfoUpdate(AlbumInfo){

        TitleTrack.textContent = AlbumInfo.almbum_title;
        ArtisName.textContent = AlbumInfo.tracks[CurrentTrackIndex].title;
        Audio_Track.src = AlbumInfo.tracks[CurrentTrackIndex].track_src;
        TrackListUpdate(AlbumInfo);
             
};

Audio_Track.addEventListener('loadedmetadata', function(){
    Progress_Audio.max = Audio_Track.duration;
    Progress_Audio.value = Audio_Track.currentTime; 
});



// Maneja el comportamiento del play y pausa

PlayPause_Btn.addEventListener('click', PlayPause);

function PlayPause(){
    if(Audio_Track.paused){
        PlayTrack();
    }
    else{
        PauseTrack();
    }
};

// Maneja el boton de play y pausa

function PlayTrack(){
    Audio_Track.play();
    PlayPause_icon.setAttribute('src', "/assets/img/Reproductor/Pausa SONIDO.webp");

};

function PauseTrack(){
    Audio_Track.pause();
    PlayPause_icon.setAttribute('src', "/assets/img/Reproductor/Reproducir SONIDO.webp");

};


// Comportamiento de barra de progreso

Audio_Track.addEventListener('timeupdate',function(){
    if(!Audio_Track.paused){
        Progress_Audio.value = Audio_Track.currentTime;
    } 
    
    if(Audio_Track.currentTime == Audio_Track.duration){
       NextTrack();
    }
});

Progress_Audio.addEventListener('input', function(){
    Audio_Track.currentTime = Progress_Audio.value;
});

Progress_Audio.addEventListener('change', function(){
    PlayTrack();
})


// Comportamiento de boton de siguiente y anterior audio

Next_btn.addEventListener('click', NextTrack); 

Back_btn.addEventListener('click', PreviousTrack);

    
function NextTrack(){
    CurrentTrackIndex = (CurrentTrackIndex + 1) % AlbumInfo.tracks.length;
    TrackInfoUpdate(AlbumInfo);
    PlayTrack();
    
};
    
function PreviousTrack(){
    
        CurrentTrackIndex = (CurrentTrackIndex - 1 + AlbumInfo.tracks.length) % AlbumInfo.tracks.length;
   
    TrackInfoUpdate(AlbumInfo);
    PlayTrack();
    
};


//muestra el icono de carpeta, si existe informacion para mostrar

function MostrarCarpeta(AlbumInfo){

    if(AlbumInfo.info_text.length != 0){

        carpeta.classList.add('mostrar-mp3');
    } 
}

//Carga informacion adicional del album si existe.

function cargaContenidoTexto(AlbumInfo) {

    if (AlbumInfo && AlbumInfo.info_text && AlbumInfo.info_text.length > 0){
            
                document.getElementById('mp3-text_title').innerHTML = AlbumInfo.info_text[0].text_title;
                document.getElementById('mp3-text_author').innerHTML = AlbumInfo.info_text[0].text_author;
                document.getElementById('mp3-text_content').innerHTML = AlbumInfo.info_text[0].text_content.replace(/\n/g, '<br>');
  
        }
};


// Evita que el click se propague a otros elementos, lo mantiene dentro del visualizer

visualizer.addEventListener('click', (e) => {
    e.stopPropagation();
});



// Muestra y esconde el visualizer o reproductor MP3

document.addEventListener('click', (e) => {

    if (PopMP3.classList.contains('mostrar-mp3') && !visualizer.contains(e.target))  {
        PopMP3.classList.remove('mostrar-mp3');
        
        carpeta.classList.remove('mostrar-mp3')

        PauseTrack();
        CurrentTrackIndex = 0;
        AlbumInfo = null;
    }

    if (text_popup.classList.contains('mostrar-mp3') && !text_popup.contains(e.target))  {
        text_popup.classList.remove('mostrar-mp3');
    }

    e.stopPropagation()
});


// Muestra el contenido de texto al hacer click sobre la carpeta

carpeta.addEventListener('click', (e) => {  
        e.stopPropagation(); 
        text_popup.classList.add('mostrar-mp3');
    });






    