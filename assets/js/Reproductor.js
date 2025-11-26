//Info Track Variables
const TitleTrack = document.querySelector('.track-title h2');
const ArtisName = document.querySelector('.track-title h3');

//Progress slidebar Variables
const Progress_Audio = document.getElementById('Progress_Audio');
const Audio_Track = document.getElementById('Audio_Track');

//Buttons Variables
const Back_btn = document.querySelector('.Controls_Btn  button.Previous');
const Next_btn = document.querySelector('.Controls_Btn  button.Next');
const PlayPause_Btn = document.querySelector('.Controls_Btn  button.Play-Pause');

//Icon Button
const PlayPause_icon = document.getElementById('PlayPause_Icon');

const TrackList_Container = document.getElementById('TrackList_Container');

// Portada
const Portada = document.getElementById('track-portada');


const PopMP3 = document.getElementById('MP3');
const visualizer = document.getElementById('Container-visualizer');


const text_popup = document.getElementById('popover-info');
const carpeta = document.getElementById('folder-pop');

let AlbumInfo = [];
let TrackList= [];

async function loadAudioData() {

    try {
        
        // llamada Json

        const response = await fetch('/assets/js/json/visualizer-data.json'); 
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        

        const TrackData = await response.json();

        console.log("cargando json..");

        console.log(TrackData);

        return TrackData;

    } catch (error) {
        console.error("Error al cargar los datos", error);
    }
};


function manejarClickHotspot(event) {

    
    const DOMtrackid = event.currentTarget.dataset.trackId;
    
    event.stopPropagation();

    console.log("buscando album...", DOMtrackid);

    AlbumInfo = TrackList.find(item => {

        return item.id === DOMtrackid;

    });

    console.log("El id es..",DOMtrackid)

   if (AlbumInfo) {
     
             
        TrackListUpdate(AlbumInfo);
        TrackInfoUpdate(AlbumInfo);
        Portada.src = AlbumInfo.portada_url;

        PopMP3.classList.add('mostrar-mp3');
        
        MostrarCarpeta(AlbumInfo);

        cargaContenidoTexto(AlbumInfo);

    } else {
        console.error(`Error: No se encontró información para el ID: ${DOMtrackid}`);
    }
};


async function initializeApp() {

    TrackList = await loadAudioData(); // Esperar a que cargue el JSON 

    if (TrackList && TrackList.length > 0) {

        console.log("Datos listos. Inicializando Hotspots...");
        
        
        //Leer los clicks

        const hotspots = document.querySelectorAll('[data-track-id]');
        
        hotspots.forEach(hotspot => {

            hotspot.addEventListener('click', manejarClickHotspot);

        });

        
    }
        
        else {
        console.log("No hay datos para inicializar.");
    }
};






document.addEventListener('DOMContentLoaded', initializeApp());







let CurrentTrackIndex = 0;

//TrackList - Update

function TrackListUpdate (AlbumInfo){
    
    TrackList_Container.innerHTML = '';

    if (AlbumInfo){

    AlbumInfo.tracks.forEach(( TrackItem, index ) => {
        
            console.log('cargado los tracks', TrackItem);

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



//Track Information Update

function TrackInfoUpdate(AlbumInfo){

        TitleTrack.textContent = AlbumInfo.almbum_title;
        ArtisName.textContent = AlbumInfo.tracks[CurrentTrackIndex].title;
        Audio_Track.src = AlbumInfo.tracks[CurrentTrackIndex].track_src;
        TrackListUpdate(AlbumInfo);
        //Audio_Track.addEventListener('loadeddata', function(){});
             
};

Audio_Track.addEventListener('loadedmetadata', function(){
    Progress_Audio.max = Audio_Track.duration;
    Progress_Audio.value = Audio_Track.currentTime; 
});



// Play Pause Behavior

PlayPause_Btn.addEventListener('click', PlayPause);

function PlayPause(){
    if(Audio_Track.paused){
        PlayTrack();
    }
    else{
        PauseTrack();
    }
};

//// Play Pause Track and Change Icon
function PlayTrack(){
    Audio_Track.play();
    PlayPause_icon.setAttribute('src', "/assets/img/Reproductor/Pausa SONIDO.webp");

};

function PauseTrack(){
    Audio_Track.pause();
    PlayPause_icon.setAttribute('src', "/assets/img/Reproductor/Reproducir SONIDO.webp");

};


//Slider Behavior

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


// Next Back Button Behavior

Next_btn.addEventListener('click', NextTrack); 

Back_btn.addEventListener('click', PreviousTrack);

    
function NextTrack(){
    CurrentTrackIndex = (CurrentTrackIndex + 1) % AlbumInfo.tracks.length;
    TrackInfoUpdate(AlbumInfo);
    PlayTrack();
    
};
    
function PreviousTrack(){
    //if(CurrentTrackIndex!=0){
        CurrentTrackIndex = (CurrentTrackIndex - 1 + AlbumInfo.tracks.length) % AlbumInfo.tracks.length;
    //}
    TrackInfoUpdate(AlbumInfo);
    PlayTrack();
    
};


// ABRIR TEXTO






/*
const text_tit = document.getElementById('text_title');
const text_aut = document.getElementById('text_author');
const text_cont = document.getElementById('text_content');
*/

function MostrarCarpeta(AlbumInfo){

    if(AlbumInfo.info_text.length != 0){

        carpeta.classList.add('mostrar-mp3');
    } 
}

function cargaContenidoTexto(AlbumInfo) {

    if (AlbumInfo && AlbumInfo.info_text && AlbumInfo.info_text.length > 0){
            
                document.getElementById('text_title').innerHTML = AlbumInfo.info_text[0].text_title;
                document.getElementById('text_author').innerHTML = AlbumInfo.info_text[0].text_author;
                document.getElementById('text_content').innerHTML = AlbumInfo.info_text[0].text_content.replace(/\n/g, '<br>');

            //text_popup.classList.add('mostrar-mp3');
  
        }
};




document.addEventListener('click', (e) => {
    // Si el popover está activo Y el click fue fuera del popover y fuera de un trigger
    if (PopMP3.classList.contains('mostrar-mp3') && !visualizer.contains(e.target))  {
        PopMP3.classList.remove('mostrar-mp3');
        PauseTrack();
    }

    if (text_popup.classList.contains('mostrar-mp3') && !text_popup.contains(e.target))  {
        text_popup.classList.remove('mostrar-mp3');
    }
});


carpeta.addEventListener('click', (e) => {   
        e.stopPropagation()
        text_popup.classList.add('mostrar-mp3');
    });
    
/*window.addEventListener('resize', () => {
        

        if (PopMP3.classList.contains('mostrar-mp3') || text_popup.classList.contains('mostrar-mp3') ) {
            PopMP3.classList.remove('mostrar-mp3');
        }
    });*/



    