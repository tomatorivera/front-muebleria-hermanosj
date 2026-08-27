# AGENTS.md

## Objetivo

Construir un e-commerce estático, responsivo y accesible con HTML, CSS y JavaScript puro, respetando `docs/consigna.md`.

## Reglas del proyecto

- Mantener la solución simple y sin frameworks ni backend.
- Aplicar HTML semántico, CSS externo y enfoque Mobile First.
- Usar datos locales, DOM, `addEventListener` y JavaScript legible.
- Reutilizar funciones y clases solo cuando reduzca duplicación real.
- No incorporar funcionalidades fuera del alcance de la consigna.

## Al trabajar en una tarea

- Leer primero `docs/consigna.md` y la documentación relacionada.
- Revisar el código existente antes de proponer cambios.
- Modificar únicamente los archivos necesarios para la tarea.
- Preservar las decisiones y cambios existentes que no estén relacionados.
- Implementar en pasos pequeños, claros y fáciles de revisar.
- Mantener nombres, estilos y convenciones consistentes con el repositorio.

## Flujo de trabajo

- Crear cada rama desde `dev` con prefijos como `feat/`, `style/`, `fix/` o `docs/`.
- Implementar una tarea por rama y usar commits pequeños con mensajes claros.
- Probar páginas, consola e interfaz en móvil y escritorio.
- Abrir Pull Request hacia `dev`; promover `dev` a `main` solo cuando la versión esté validada.

## Ramas y commits realizados por agentes

- Crear ramas y hacer commits únicamente cuando el desarrollador lo solicite explícitamente.
- Antes de crear una rama, comprobar el estado del repositorio y actualizar `dev` sin sobrescribir cambios locales.
- Usar tipos de Conventional Commits también para nombrar las ramas con el formato `<tipo>/<descripcion-breve>`, por ejemplo `feat/catalogo-productos` o `fix/contador-carrito`.
- Usar Conventional Commits con el formato `<tipo>(<alcance opcional>): <descripcion>`, por ejemplo `feat(catalogo): agrega búsqueda de productos`.
- Usar tipos como `feat`, `fix`, `style`, `docs`, `refactor`, `test` o `chore` según corresponda.
- Mantener cada commit enfocado en un único cambio y no incluir archivos ajenos a la tarea.
- No hacer `push`, abrir Pull Requests ni integrar ramas salvo que el desarrollador también lo pida explícitamente.

## Antes de dar una tarea por terminada

- La solución cumple la consigna y no rompe otras páginas.
- No hay errores en la consola.
- Los cambios son simples, legibles y están limitados a la tarea solicitada.
- El Pull Request explica qué cambió y cómo verificarlo.
