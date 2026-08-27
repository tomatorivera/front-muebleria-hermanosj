# Consigna del proyecto

## 1. Resúmen

Construir la fachada completa y la experiencia interactiva del cliente utilizando únicamente tecnologías del lado del cliente: HTML, CSS y JavaScript. El sitio será visualmente atractivo, responsivo y simulará una experiencia de compra sin conexión a backend — los productos se gestionan localmente con JavaScript.

## 2. Requerimentos funcionales

- Página de inicio - **_index.html_**
  - Header con logo y navegación
  - Hero Banner principal
  - 3–4 productos destacados cargados dinámicamente
  - Footer con información básica
- Catálogo de productos - **_productos.html_**
  - Grilla de tarjetas de productos
  - Datos desde archivo JavaScript local
  - Cada producto enlaza a su detalle
  - Campo de búsqueda (bonus funcional)
- Detalle de cada producto - **_producto.html_**
  - Imagen grande y descripción completa
  - Detalles de fabricación y precio
  - Botón "Añadir al Carrito"
- Página de contacto - **_contacto.html_**
  - Formulario: Nombre, Email, Mensaje
  - Validación del lado del cliente con JS
  - Mensaje de éxito mediante DOM
  - Carrito simulado con contador en header

## 3. Requisitos técnicos

- HTML
  - Etiquetas semánticas obligatorias
  - Código limpio y bien indentado
- CSS
  - 100% responsivo — Mobile First
  - Flexbox para secciones principales
  - Todo en archivo externo
- Javascript
  - Productos en array de objetos (.js)
  - Renderizado dinámico via DOM
  - Carga asíncrona (setTimeout / async-await)
  - Interactividad con addEventListener