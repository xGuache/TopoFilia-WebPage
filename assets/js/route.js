//Escucha el click sobre los link del nav
document.addEventListener("click", (e) => {
    const {target} = e;

    if( !target.matches("nav a")){
        return;
    }

    e.preventDefault();

    urlroute ();

})

//Previene que se redireccione la pagina y ejecuta la extraccion del path
const urlroute = (event) => {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    handleLocation();
};



//Definimos las rutas de las paginas a cargar
const var_routes = {

    404: {
        template: "/pages/404.html", 
        title: "",
        description: ""
    },


    "/": {
        template: "/pages/Galery/index.html", 
        title: "MainGalery",
        description: ""

    },

    "/El_Laboratorio": { 
        template: "/pages/El_Laboratorio/El_Laboratorio.html", 
        title: "El Laboratorio",
        description: ""}

};


//Carga de las paginas e inyeccion de html

const handleLocation = async () => {
    
    const path = window.location.pathname;

    if(path.length == 0){
        path = "/"
    }

    const route = var_routes[path] || routes[404];

    const html = await fetch(route.template).then((data) => data.text());

    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation();


window.route = urlroute;

handleLocation();
