async function cargarProductos() {

    const contenedor = document.getElementById("container-products-destac");

    try {
        const url = "../assets/datos/productos.json";
        const respuesta = await fetch(url);
        console.log(respuesta)

        if (!respuesta.ok) {
            throw new Error("No se pudieron cargar los productos");
        }

        const productos = await respuesta.json();
            console.log(productos)
        productos.forEach(producto => {

            const article = document.createElement("article");

            article.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                
                <h3>${producto.nombre}</h3>
                
                
                <button>
                <a href="#">Ver producto</a>
                </button>
                `;
                
                contenedor.appendChild(article);
            });
            
        } catch (error) {
            console.error(error);
        }
    }
    
    cargarProductos();
    
