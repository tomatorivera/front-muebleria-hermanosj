# Estructura de carpetas

El proyecto es un sitio estático pequeño, por lo que se propone una estructura directa y sin herramientas de compilación:

```text
front-muebleria-hermanosj/
├── index.html                 # Página de inicio y punto de entrada
├── html/                      # Páginas internas del sitio
│   ├── productos.html         
│   ├── producto.html          
│   └── contacto.html          
├── assets/                    # Recursos estáticos que no son código
│   └── images/               
│   └── fonts/
├── css/                       # Estilos globales y de cada página
│   └── styles.css      
│   └── index.css
│   └── producto.css
│   └── contacto.css
│   └── ...       
├── js/                        # Datos y comportamiento del sitio
│   ├── productos.js           
│   ├── app.js                 
│   ├── carrito.js             
│   └── contacto.js  
│   └── ...          
├── docs/                      # Consigna y documentación del equipo
│   ├── consigna.md
│   ├── estructura-carpetas.md
│   └── flujo-git.md
├── AGENTS.md                  # Reglas para asistentes que trabajen en el proyecto
└── README.md                  # Presentación e instrucciones de ejecución
```

## Criterios de organización

- Mantener únicamente `index.html` en la raíz; todas las páginas internas van en `html/`.
- Usar CSS por página para mantener la organización y archivos JavaScript con responsabilidades claras.
- No agregar frameworks, herramientas de compilación ni carpetas nuevas si la consigna no los requiere.
- Mantener nombres en minúsculas, sin espacios y en español de forma consistente.
