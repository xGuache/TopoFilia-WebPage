# Artefactum Oralitura

## Descripción general

**Artefactum Oralitura** es una **página web estática e interactiva** cuyo objetivo es presentar una **infografía digital sobre la oralitura del Sumapaz**, a partir de murales realizados en el territorio por el grupo de trabajo **"El Laboratorio"**.

El proyecto utiliza murales interactivos como medio narrativo. Al hacer clic sobre distintos elementos visuales, el usuario accede a información oral y escrita que profundiza sobre la oralitura de la cultura sumapaceña.

El sitio está desarrollado sin frameworks, usando únicamente **HTML, CSS y JavaScript Vanilla**, organizados en múltiples archivos según su funcionalidad para mantener el proyecto modular y escalable.

https://artefactumoralitura.netlify.app/
---

## Estructura del proyecto

```
TopoFilia-WebPage/
├── index.html
├── 404.html
├── README.md
│
├── pages/
│   ├── El_Laboratorio/
│   │   └── El_Laboratorio.html
│   │
│   └── murales/
│       ├── Epopeya/
│       │   └── Epopeya.html
│       └── Soma/
│           └── Soma.html
│
├── assets/
│   ├── css/
|   |   ├── main.css
│   │   ├── base/
│   │   │   ├── style.css
│   │   │   └── text-style.css
│   │   │
│   │   ├── ui/
│   │   │   ├── navbar-main.css
│   │   │   ├── layout-main.css
│   │   │   ├── navbar-murales.css
│   │   │   ├── modal-laboratorio.css
│   │   │   ├── reproductor.css
│   │   │   ├── el-laboratorio.css
│   │   │   └── gallery-main.css
│   │   │
│   │   └── murales/
│   │       ├── mural-main.css
│   │       ├── mural-epopeya.css
│   │       ├── mural-soma.css
│   │       ├── hotspots-position-epopeya.css
│   │       └── hotspots-position-soma.css
│   ├── js/
│   │   ├── ui/
│   │   │   ├── nav.js
│   │   │   ├── gallery.js
│   │   │   ├── loadscreen.js
│   │   │   └── navmurales.js
│   │   │
│   │   ├── laboratorio/
│   │   │   └── ui/
│   │   │       ├── modal-laboratorio.js
│   │   │       └── pop-data.js
│   │   │
│   │   ├── murales/
|   |   |   └── reproductor/
|   │   │             └── Reproductor.js
│   │   │   ├── animacion.js
│   │   │   ├── modal-soma.js
│   │   │   ├── miral.js
│   │   │   └── scroll-position.js
│   │   │
│   │   └── json/
│   │       ├── visualizer.json
│   │       └── SOMA.json
│   │
│   ├── img/
│   │
│   ├── fonts/
│   │
│   └── media/
│       ├── audio/
│       └── video/

---

##  Descripción de secciones y páginas

### Página inicial (`index.html`)

* Página de entrada al proyecto.
* Presenta una **previsualización de dos murales** realizados por el grupo *El Laboratorio*.
* Cada mural funciona como enlace hacia su subpágina interactiva correspondiente.

---

### Subpágina: **El Laboratorio**

* Describe el proyecto **Oralitura del Sumapaz**.
* Presenta información conceptual del trabajo.
* Incluye la descripción de los integrantes del equipo de trabajo.

---

### Subpágina: **La Epopeya de un pueblo guerrero** (`Epopeya.html`)

* Mural interactivo de carácter narrativo y sonoro.
* Cada elemento visual del mural es clickeable.
* Al interactuar con un elemento:

  * El elemento seleccionado se **visualiza en un tamaño mayor** para facilitar su observación.
  * Se despliega un **reproductor de audio tipo álbum musical**, con **varias pistas MP3** asociadas al mismo elemento.
  * Las pistas de audio narran relatos, memorias y datos relacionados con el elemento del mural.
  * En algunos casos se muestran **textos adicionales** como apoyo a la narración oral.

Este mural enfatiza la experiencia sonora como eje principal de la interacción.

---

### Subpágina: **La Cocina Sumapaceña** (`Soma.html`)

* Mural interactivo enfocado en elementos gastronómicos y culturales.
* Al hacer clic en los elementos:

  * Se muestra **información textual**.
  * Se presenta una **visualización ampliada** del elemento seleccionado.
* No utiliza audio, a diferencia de *La Epopeya*.

---

## Flujo de navegación

1. El usuario accede a `index.html`.
2. Visualiza los murales disponibles.
3. Selecciona un mural y es redirigido a su subpágina.
4. Interactúa con los elementos visuales del mural.
5. Se despliega contenido narrativo en forma de audio o texto según la sección.

---

## Recursos multimedia

El proyecto incorpora distintos formatos multimedia:

* **Imágenes** (`.webp`) para optimizar el rendimiento.
* **Audio** (`.mp3`) para narraciones orales.
* **Video** (`.mov`) como material complementario.

Todos los recursos están organizados dentro de `assets/media/`.

---

## Convenciones de desarrollo

### HTML

* Uso de estructura semántica básica.
* Navegación mediante enlaces relativos.

### CSS

* Estilos centralizados en `main.css`.
* Organización por secciones del sitio.

```css
/* descripcion del elemento */
.item {
  box-position: ;
  box-size: ;
  display-behavior: ;
  style: ;
}
```

### JavaScript

* JavaScript Vanilla.
* Manejo de eventos de clic e interacción.

```js
// Manejo de interacción en elementos del mural
document.querySelectorAll('.mural-item').forEach(item => {
  item.addEventListener('click', () => {
  });
});
```

---

## Pruebas realizadas

* Navegación entre páginas.
* Interacción con elementos de los murales.
* Reproducción de audio.
* Visualización correcta en navegadores web Chrome | Firefox | Edge.
* Pruebas en dispositivos móviles.
* Optimización de carga de archivos multimedia.

##
* Comportamiento de UI en navegador apple Safari | Safari Mobile

---

## Requisitos

* Navegador web moderno (Chrome, Firefox, Edge).
* No requiere instalación de dependencias.

---

## Despliegue del proyecto

1. Se utilizo servidor gratuito de despliegue https://www.netlify.com/
2. Se utilizo github como servidor de almacenamiento del projecto
3. Se utilizo html css y js base para el desarrollo sin uso de frameworks
4. No se utilizo dominio personalizado


## Mantenimiento del proyecto

1. Mantenimiento del codigo

* Requisitios: 
  - Visual Studio Code (https://code.visualstudio.com/download)
    |- Local Live Server o Visual Studio Live Server (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  - terminal git (https://git-scm.com/install/) - 
  - Navegador web

* Acceder a github con las credenciales asignadas https://github.com/artefactum-oralitura/oralitura 
      usuario: artefactum-oralitura | contraseña:******

* Clonar repositiorio de github url:
      - Ir al perfil del repositiorio oralitura
      - Dar clic en el boton <code> copiar la url 
      - Abrir la terminal cmd o git - ejecutar los siguientes comandos.
      - Configurar perfil de git
      -     git config --global user.name "nombre de github"
      -     git config --global user.email "correo de github"
      - Ubicarse en la carpeta donde se almacenara el projecto 
      -     cd /Documents/proyecto
      - Clonar el repositorio 
      -     git clone https://github.com/artefactum-oralitura/oralitura.git

* Abrir la carpeta donde se clono el repositorio con visual studio code
* Realizar los cambios requeridos
* Abrir la terminal git del projecto y ejecutar los siguientes comandos.
     - Agregar archivos adicionales
     - git add . 
     - Comentar la descripcion concreta cambios realizados
     - git commit -m "comentario"
     - Actualizar el repositorio 
     - git push
---

2. Mantenimiento del servidor en Netlify.app

* Acceder al proyecto.
   - Acceder con las credenciales a la pagina web del servidor https://app.netlify.com/
   - Ir al apartado de Proyectos 
   - Abrir el proyecto artefactumoralitura
   - Navegar entre las opciones del proyecto para configuracion del mismo

## Historial de versiones

**v1.0**

* Estructura base del proyecto.
* Implementación de murales interactivos.
* Integración de reproductor de audio y visualizador de contenido multimedia y texto.

---

## Notas finales

Este proyecto combina diseño visual, narrativa oral y desarrollo web para preservar y difundir la memoria cultural del Sumapaz. La documentación debe actualizarse ante cualquier cambio estructural o conceptual del sitio.
