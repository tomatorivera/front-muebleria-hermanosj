# Forma de trabajo con Git

Este documento describe cómo colaborar sin mezclar trabajo incompleto con la versión publicada del sitio.

## Ramas principales

- `main`: contiene únicamente versiones estables y es la rama que se despliega en producción.
- `dev`: integra los cambios del equipo y genera previews para probarlos antes de publicar.
- Ramas de trabajo: se crean desde `dev` para desarrollar una tarea concreta y vuelven a `dev` mediante un Pull Request.

El recorrido normal de un cambio es:

```text
rama de trabajo → dev → main
```

Es decir, para hacer una tarea asignada, se crea una nueva rama a partir de `dev`, se hacen los commits y push a la nueva rama, y luego se hace un pull request a `dev` para esperar ser aprobado.

No se debe desarrollar ni hacer `push` directamente sobre `main`. Tampoco se debería commitear nada directo a `dev` (excepto cambios muy atómicos) y validar los cambios entrantes de código mediante Pull Requests.

## Nombres de ramas

**Sugerido** usar nombres cortos, descriptivos, en minúsculas y separados con guiones:

- `feat/catalogo-productos`: funcionalidad nueva.
- `style/header-responsive`: cambios visuales o responsivos.
- `fix/contador-carrito`: corrección de un error.
- `docs/estructura-proyecto`: documentación.
- `refactor/render-productos`: reorganización interna sin cambiar el comportamiento.

Cada rama debe resolver una sola tarea. Esto facilita revisar, probar y revertir cambios.

## Configuración inicial

La primera vez, clonar el repositorio y entrar en su carpeta:

```bash
git clone <URL_DEL_REPOSITORIO>
cd front-muebleria-hermanosj
```

Consultar las ramas disponibles y cambiar a `dev`:

```bash
git fetch origin
git switch dev
git pull origin dev
```

`git fetch` descarga información del repositorio remoto sin modificar archivos. `git switch` cambia de rama y `git pull` trae los últimos cambios de esa rama.

## Empezar una tarea

Antes de crear una rama, actualizar `dev`:

```bash
git switch dev
git pull origin dev
git checkout -b feat/nombre-de-la-tarea
```

Cambiar `feat/nombre-de-la-tarea` por el tipo y nombre adecuados. La opción `-c` crea la rama y cambia a ella.

## Guardar cambios

Revisar qué archivos cambiaron:

```bash
git status
git diff
```

Agregar solamente los archivos relacionados con la tarea:

```bash
git add index.html css/styles.css
```

Crear un commit con un mensaje claro:

```bash
git commit -m "feat: agrega productos destacados"
```

Prefijos **sugeridos** para los mensajes:

- `feat:` nueva funcionalidad.
- `style:` cambio visual sin modificar la lógica.
- `fix:` corrección de un error.
- `docs:` cambio de documentación.
- `refactor:` reorganización del código.
- `test:` incorporación o ajuste de pruebas.

Es preferible hacer commits pequeños que representen avances completos. Antes de cada commit, abrir el sitio y comprobar que la tarea funciona en distintos tamaños de pantalla.

Sobre los nombres de los commits, es una convención general llamada [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Publicar la rama y abrir un Pull Request

La primera vez que se publica una rama:

```bash
git push -u origin feat/nombre-de-la-tarea
```

Luego, crear un Pull Request con:

- rama de origen: la rama de trabajo;
- rama de destino: `dev`;
- título claro y breve;
- descripción técnica de qué cambió;
- capturas de pantalla si hay cambios visuales.

Otra persona del equipo, o varias si es necesario, debería revisar el código y la preview. Cuando esté aprobado y funcionando, se integra en `dev`.

## Actualizar una tarea con cambios recientes de `dev`

Si `dev` avanzó mientras se trabajaba en una rama:

```bash
git switch dev
git pull origin dev
git switch feat/nombre-de-la-tarea
git merge dev
```

Si aparecen conflictos, Git marcará los archivos afectados. Hay que elegir el contenido correcto, probar el resultado y luego guardar la resolución:

```bash
git add <archivo-resuelto>
git commit -m "merge: actualiza rama con dev"
git push
```

No se deben resolver conflictos aceptando cambios automáticamente sin leer y probar el resultado.

## Publicar una versión estable

Cuando la preview de `dev` esté validada, se abre un Pull Request:

```text
dev → main
```

Antes de integrarlo se debe comprobar que:

- todas las páginas abren correctamente;
- catálogo, detalle, carrito y formulario funcionan;
- no hay errores en la consola del navegador;
- el diseño responde bien en móvil y escritorio;
- el Pull Request fue revisado por otra persona.

Después de integrar, el despliegue de `main` publica la nueva versión. No se agregan cambios extra directamente durante esta integración.

## Comandos útiles

```bash
git status                 # muestra el estado de los archivos
git diff                   # muestra cambios todavía no preparados
git diff --staged          # muestra cambios preparados para el commit
git log --oneline --graph  # muestra un historial resumido
git branch                 # lista las ramas locales
git switch <rama>          # cambia a otra rama
git restore <archivo>      # descarta cambios locales no guardados de un archivo
git stash                  # guarda temporalmente cambios sin hacer commit
git stash pop              # recupera los cambios temporales
```

`git restore` descarta cambios que todavía no están en un commit. Usarlo solo después de revisar `git diff` y confirmar que esos cambios no hacen falta.

## Resumen del ciclo diario

1. Actualizar `dev`.
2. Crear una rama para una sola tarea.
3. Implementar y probar en pasos pequeños.
4. Revisar los cambios y crear commits claros.
5. Publicar la rama.
6. Abrir un Pull Request hacia `dev`.
7. Revisar la preview y obtener aprobación.
8. Integrar `dev` en `main` solo cuando la versión sea estable.
