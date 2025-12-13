# 🌿 TopoFilia – WebPage

## 🧠 Descripción general

**TopoFilia – WebPage** es una **página web estática e interactiva** cuyo objetivo es presentar una **infografía digital sobre la oralitura del Sumapaz**, a partir de murales realizados en el territorio por el grupo de trabajo **"El Laboratorio"**.

El proyecto utiliza murales interactivos como medio narrativo. Al hacer clic sobre distintos elementos visuales, el usuario accede a información oral y escrita que profundiza en la memoria, el territorio y la cultura sumapaceña.

El sitio está desarrollado sin frameworks, usando únicamente **HTML, CSS y JavaScript Vanilla**, organizados en múltiples archivos según su funcionalidad para mantener el proyecto modular y escalable.

---

## 📁 Estructura del proyecto

```
/TopoFilia-WebPage/
├── index.html
├── pages/
│   ├── El Laboratorio/
│   └── murales/
│       ├── Epopeya/
│       │   └── Epopeya.html
│       └── Soma/
│           └── Soma.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── style.css
│   │   ├── text-style.css
│   │   ├── modal-main.css
│   │   ├── navbar.css
│   │   ├── navbar_murales.css
│   │   ├── reproductor.css
│   │   ├── ElLaboratorio.css
│   │   ├── Mural_Epopeya.css
│   │   ├── Mural_Soma.css
│   │   ├── Hotspots_Epopeya.css
│   │   └── Hotspots_Soma.css
│   ├── js/
│   │   ├── route.js
│   │   ├── nav.js
│   │   ├── navmurales_lateral.js
│   │   ├── scroll.js
│   │   ├── loadscrenn.js
│   │   ├── animacion.js
│   │   ├── mural.js
│   │   ├── gallery.js
│   │   ├── Reproductor.js
│   │   ├── popover-cards.js
│   │   ├── pop-data.js
│   │   ├── pop-soma.js
│   │   └── json/
│   ├── img/
│   ├── fonts/
│   │   └── FFGoodPro/
│   └── media/
│       ├── audio/
│       └── video/
└── README.md
```

---

## 📌 Descripción de secciones y páginas

### 🏠 Página inicial (`index.html`)

* Página de entrada al proyecto.
* Presenta una **previsualización de dos murales** realizados por el grupo *El Laboratorio*.
* Cada mural funciona como enlace hacia su subpágina interactiva correspondiente.

---

### 🧪 Subpágina: **El Laboratorio**

* Describe el proyecto **Oralitura del Sumapaz**.
* Presenta información conceptual del trabajo.
* Incluye la descripción de los integrantes del equipo de trabajo.

---

### 🖼️ Subpágina: **La Epopeya de un pueblo guerrero** (`Epopeya.html`)

* Mural interactivo de carácter narrativo y sonoro.
* Cada elemento visual del mural es clickeable.
* Al interactuar con un elemento:

  * El elemento seleccionado se **visualiza en un tamaño mayor** para facilitar su observación.
  * Se despliega un **reproductor de audio tipo álbum musical**, con **varias pistas MP3** asociadas al mismo elemento.
  * Las pistas de audio narran relatos, memorias y datos relacionados con el elemento del mural.
  * En algunos casos se muestran **textos adicionales** como apoyo a la narración oral.

Este mural enfatiza la experiencia sonora como eje principal de la interacción.

---

### 🍲 Subpágina: **La Cocina Sumapaceña** (`Soma.html`)

* Mural interactivo enfocado en elementos gastronómicos y culturales.
* Al hacer clic en los elementos:

  * Se muestra **información textual**.
  * Se presenta una **visualización ampliada** del elemento seleccionado.
* No utiliza audio, a diferencia de *La Epopeya*.

---

## 🧩 Flujo de navegación

1. El usuario accede a `index.html`.
2. Visualiza los murales disponibles.
3. Selecciona un mural y es redirigido a su subpágina.
4. Interactúa con los elementos visuales del mural.
5. Se despliega contenido narrativo en forma de audio o texto según la sección.

---

## 🎨 Recursos multimedia

El proyecto incorpora distintos formatos multimedia:

* **Imágenes** (`.webp`) para optimizar el rendimiento.
* **Audio** (`.mp3`) para narraciones orales.
* **Video** (`.mov`) como material complementario.

Todos los recursos están organizados dentro de `assets/media/`.

---

## 💡 Convenciones de desarrollo

### HTML

* Uso de estructura semántica básica.
* Navegación mediante enlaces relativos.

### CSS

* Estilos centralizados en `style.css`.
* Organización por secciones del sitio.

```css
/* ===== Murales interactivos ===== */
.mural-item {
  cursor: pointer;
}
```

### JavaScript

* JavaScript Vanilla.
* Manejo de eventos de clic e interacción.

```js
// Manejo de interacción en elementos del mural
document.querySelectorAll('.mural-item').forEach(item => {
  item.addEventListener('click', () => {
    // mostrar info o reproducir audio
  });
});
```

---

## 🧪 Pruebas realizadas

* Navegación entre páginas.
* Interacción con elementos de los murales.
* Reproducción de audio.
* Visualización correcta en navegadores modernos.

Pendiente:

* Pruebas exhaustivas en dispositivos móviles.
* Optimización de carga de archivos multimedia.

---

## ⚙️ Requisitos

* Navegador web moderno (Chrome, Firefox, Edge).
* No requiere instalación de dependencias.

---

## 🚀 Ejecución del proyecto

1. Clonar o descargar el repositorio.
2. Abrir el archivo `index.html` en el navegador.
3. Navegar por las distintas secciones del sitio.

---

## 🕰️ Historial de versiones

**v1.0**

* Estructura base del proyecto.
* Implementación de murales interactivos.
* Integración de audio y contenido textual.

---

## 📝 Notas finales

Este proyecto combina diseño visual, narrativa oral y desarrollo web para preservar y difundir la memoria cultural del Sumapaz. La documentación debe actualizarse ante cualquier cambio estructural o conceptual del sitio.
