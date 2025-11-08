# AI MASTER GUIDE

## 1. MANIFIESTO DEL PROYECTO (CEREBRO)
Markdown

# PROYECTO: xlerion-ultimate
Fecha de última actualización: 2025-11-07

## 1. Objetivo General
Plataforma multisectorial que integra módulos de IA, contenido dinámico y un panel de administración robusto, con un enfoque en la simulación 3D y la interacción web.

## 2. Pila Tecnológica (Tech Stack)
* Framework: Next.js 14 (App Router)
* UI: React Bootstrap, SASS
* Backend Jobs: Trigger.dev v3
* Backend (ML): Python, FastAPI
* Desarrollo 3D: Unity, 3ds Max, Substance 3D Painter
* IDE: VS Code

## 3. Arquitectura y Archivos Clave
* `xlerion-ml/`: Contiene el backend de machine learning, incluyendo modelos de IA y base de conocimiento.
    *   **Ruta Absoluta:** `x:\Programacion\XlerionWeb\LocalAI\xlerion-ml`
* `xlerion-ultimate/`: Aplicación frontend Next.js para la interfaz de usuario y visualización de contenido dinámico.
* `media/`: Almacena varios activos multimedia utilizados en toda la plataforma.
* `src/lib/trigger.ts`: (Instancia de `client = new Trigger(...)`)
* `src/app/api/trigger/route.ts`: (Definición de jobs de Trigger.dev)
* `src/app/sobre-nosotros/page.tsx`: (Página que tuvo el error de tipos `Button as={Link}`)

## 4. Estado Actual / Tarea Activa
**Tarea Actual:** (Describe en qué estás trabajando ahora)
**Último Arreglo:** Solucionados errores de importación de Trigger.dev v3 y error de tipos de React Bootstrap (`Button as={Link}`).

## 5. Reglas y Restricciones
* NO sugerir servicios en la nube (ej. Vercel, AWS).
* Preferir soluciones de código local.
* El código debe ser TypeScript estricto.
* Evitar el tipo `any`.
* Las respuestas deben ser técnicas y estructuradas.
* Siempre utilizar el español.
* **Ejecución de Comandos Críticos:** Antes de ejecutar comandos largos o potencialmente peligrosos (como `npm install` en un proyecto grande, `npm run dev`, o builds complejos), debo notificar al usuario. Indicaré el comando exacto y los pasos para que el usuario pueda ejecutarlo manually si lo prefiere.
* **No ejecutar servidores de desarrollo:** No ejecutaré comandos como `npm run dev`, `next dev`, o similares que inicien un servidor de desarrollo. En su lugar, te proporcionaré el comando para que tú lo ejecutes.

## 6. Plan de Desarrollo (Recordado por Gemini)
1. Crear la estructura de carpetas base.
2. Configurar la base de datos MySQL.
3. Crear el backend para secciones dinámicas.
4. Implementar el menú dinámico en React.
5. Desarrollar los módulos de IA por sector.
6. Crear el panel de administración.
7. Generar la documentación y preparar el despliegue.

## 7. Puntos de Control (Checkpoints de Git)
(Lista de commits clave para restauración. De más nuevo a más viejo.)

* **2025-11-07 (Alias: Chatbot Funcional)**
    * **Commit Hash:** `a05ff92`
    * **Descripción:** Chatbot de IA completamente funcional, con reconocimiento de intenciones y comunicación frontend-backend corregida.

**Ejemplo de Solicitud de Restauración:**
"El proyecto ha fallado críticamente. Por favor, mira la sección 'Puntos de Control' de mi archivo de memoria y dame el comando de terminal para restaurar el proyecto al checkpoint con el alias 'Base Estable Trigger.dev'."

`git reset --hard 19a8afc`

*   **Cómo Recuperar este Punto (Antes de Subir a GitHub):**
    Si necesitas revertir a este estado exacto *antes* de haber subido los cambios a GitHub, puedes usar el siguiente comando. Este comando deshará el último commit local, pero mantendrá tus cambios en el directorio de trabajo para que puedas inspeccionarlos o volver a commitarlos.

    ```bash
    git reset HEAD~1
    ```
    Si deseas descartar todos los cambios y volver al estado exacto del último commit, usa:
    ```bash
    git reset --hard HEAD~1
    ```
    **¡ADVERTENCIA!** `git reset --hard` eliminará permanentemente cualquier cambio no guardado desde el último commit. Úsalo con precaución.

* **2025-11-07 (Alias: Checkpoint Inicial)**
    * **Commit Hash:** `19a8afc`
    * **Descripción:** (Este es tu primer punto de restauración. Añade una breve descripción de lo que funciona en este commit.)

## 8. Comandos Útiles de Gitll origin main --rebase && git pu

### Comando Único para Subir el Proyecto a GitHub (Secuencial)

```bash
git init && git add . && git commit -m "Initial project setup and push" && (git remote get-url origin 2>$null || git remote add origin https://github.com/MikeHell84/xlerion-ultimate.git) && git branch -M main && git push -u origin main --force-with-lease
```

**Nota:**
*   Asegúrate de personalizar el mensaje del commit (`"Initial commit: Setup xlerion-ultimate project structure"`) según sea necesario.
*   Si el repositorio ya está inicializado (`git init` ya se ejecutó), el primer `git init` no hará nada o mostrará una advertencia.
*   Si el remoto `origin` ya existe, `git remote add origin ...` fallará. Puedes omitir esa parte si ya lo tienes configurado.
*   Este comando asume que quieres que tu rama principal se llame `main`.

## 9. Archivos de Contexto
*   `gemini_memory_usage.md`
*   `github.md`
*   `checkpoint_guide.md`
*   `memory_brain.md`
*   `project_logbook.md`

## 2. BITÁCORA DE EXPERIENCIA (LOGBOOK)
OK, vamos a trabajar en el proyecto. He cargado:
1. `memory_brain.md` (nuestro contexto y plan)
2. `project_logbook.md` (nuestra experiencia y reglas)

Antes de responder, debes consultar AMBOS archivos.

Usa `memory_brain.md` para entender:
- La `Tarea Actual` (Sección 4).
- El `Plan de Desarrollo` (Sección 6).
- La `Arquitectura` (Sección 3).

Usa `project_logbook.md` para:
- Evitar errores pasados (`Problemas Críticos Resueltos`).
- Seguir nuestras `Decisiones de Arquitectura`.
- Reutilizar código de la `Librería de Soluciones`.

Mi solicitud de hoy es:
[...AQUÍ ESCRIBES TU TAREA DEL DÍA...]

Cómo Usar Este Flujo de Trabajo

Paso 1: Cargar Contexto

    Abre el chat de Gemini.

    Escribe @file y selecciona memory_brain.md.

    Escribe @file y selecciona project_logbook.md.

Paso 2: Usar la Plantilla

    Copia la plantilla de arriba.

    Pégala en el chat.

    Reemplaza la última línea [...AQUÍ ESCRIBES TU TAREA DEL DÍA...] con tu solicitud específica.

Ejemplos de Cómo Rellenar la Plantilla

Ejemplo A (Iniciando una nueva función):

    "...Mi solicitud de hoy es: Empezar a trabajar en el Paso 3 del Plan de Desarrollo (backend para secciones dinámicas). Dame el primer paso y el código inicial, usando la plantilla de FastAPI si la tenemos."

Ejemplo B (Resolviendo un bug):

    "...Mi solicitud de hoy es: Estoy recibiendo un error TypeError: 'NoneType' object is not iterable en mi script de Python. Revisa la arquitectura y las lecciones aprendidas antes de sugerir una solución."

Ejemplo C (Creando un nuevo Job):

    "...Mi solicitud de hoy es: Necesito crear un nuevo job de Trigger.dev para enviar un email de bienvenida. Por favor, usa la plantilla exacta de la Librería de Soluciones para crear el archivo."

## 3. GUÍA DE CHECKPOINTS (GIT)
Paso 1: El Prompt para Crear la Tarea (Haz esto 1 vez)

Pídele a Gemini en VS Code que cree el "comando" por ti.

    Prompt para Gemini:

    "Por favor, crea un archivo de tareas de VS Code en .vscode/tasks.json.

    Necesito una tarea con el label "checkpoint". Esta tarea debe ser interactiva y hacer lo siguiente en secuencia:

        Pedir al usuario un mensaje de commit (usando un input con el id "commitMessage" y una descripción).

        Ejecutar git add . en el shell.

        Ejecutar git commit -m "${input:commitMessage}" (usando el mensaje del input).

        Ejecutar git push origin main para subir los cambios a GitHub.

        Al final, imprimir el hash del commit recién creado en la terminal.

    Asegúrate de que los comandos se ejecuten en secuencia."

Paso 2: Tu Nuevo Flujo de Trabajo (Tu "Comando Único")

Una vez que Gemini haya creado el archivo .vscode/tasks.json, tu flujo de trabajo para crear un checkpoint será este:

    Abre la Paleta de Comandos: Presiona Ctrl+Shift+P.

    Escribe "Run Task": Selecciona la opción "Tasks: Run Task" (Ejecutar Tarea).

    Elige tu Comando: Selecciona "checkpoint" de la lista.

    Escribe el Mensaje: VS Code te pedirá en la parte superior que escribas tu mensaje de commit (ej: "Implementado el login").

    Presiona Enter.

Resultado: VS Code abrirá una terminal y ejecutará automáticamente los 4 comandos: add, commit, push y te mostrará el hash del commit al final. Sin timeouts.

Paso 3: El Flujo Completo (Con el "Cerebro")

Este es el flujo de trabajo completo, combinando tu "comando" con tu "cerebro".

    Terminas una función.

    Ejecutas tu "comando único" (la tarea "checkpoint" como se describe arriba).

    La terminal te muestra el hash al final (ej. a1b2c3d).

    Abres el chat de Gemini (modo de bajo costo).

    Cargas tu "cerebro": @file memory_brain.md

    Pides la actualización del cerebro:

        "Actualiza mi 'memory_brain.md' en la Sección 7. Acabo de hacer un 'checkpoint' con el hash a1b2c3d y el alias 'Login Implementado'."

Este método te da la automatización que quieres (el "comando único" de la Tarea) y la robustez que necesitas (evitando el timeout), mientras usas a Gemini de forma eficiente para la gestión del contexto (memory_brain.md).

## 4. GUÍA DE GITHUB
# Guía para Subir el Proyecto a GitHub

Esta guía detalla los pasos para subir el proyecto `xlerion-ultimate` al repositorio de GitHub: `https://github.com/MikeHell84/xlerion-ultimate.git`.

**Asegúrate de ejecutar estos comandos en la raíz de tu proyecto local (`x:\Programacion\XlerionWeb\LocalAI\`).**

## Pasos:

### 1. Inicializar un Repositorio Git Local (si aún no lo has hecho)
Si tu proyecto aún no es un repositorio Git, necesitas inicializarlo. Si ya lo es, puedes saltar este paso.

```bash
git init
```

### 2. Añadir los Archivos al Staging Area
Este comando añade todos los archivos de tu proyecto al área de preparación para el commit. Asegúrate de que tu archivo `.gitignore` esté configurado correctamente para excluir archivos no deseados (como `node_modules`, `.env`, etc.).

```bash
git add .
```

### 3. Realizar el Primer Commit
Crea tu primer commit con un mensaje descriptivo. Este mensaje debe resumir los cambios iniciales del proyecto.

```bash
git commit -m "Initial commit: Setup xlerion-ultimate project structure"
```

### 4. Añadir el Repositorio Remoto de GitHub
Vincula tu repositorio local con el repositorio remoto en GitHub. Reemplaza `MikeHell84/xlerion-ultimate.git` con la URL de tu repositorio si es diferente.

```bash
git remote add origin https://github.com/MikeHell84/xlerion-ultimate.git
```

### 5. Renombrar la Rama Principal a `main` (Opcional, pero recomendado)
Por convención, la rama principal se suele llamar `main`. Si tu rama principal se llama `master`, puedes renombrarla.

```bash
git branch -M main
```

### 6. Subir los Archivos a GitHub
Finalmente, sube tus commits desde la rama local `main` al repositorio remoto `origin`.

```bash
git push -u origin main
```

Ahora tu proyecto debería estar visible en `https://github.com/MikeHell84/xlerion-ultimate.git`.

## Comando Único para Subir el Proyecto (Secuencial)

Si deseas ejecutar todos los pasos de inicialización y subida en un solo comando (teniendo en cuenta que algunos pasos pueden fallar si ya están configurados):

```bash
git init && git add . && git commit -m "Initial project setup and push" && (git remote get-url origin 2>$null || git remote add origin https://github.com/MikeHell84/xlerion-ultimate.git) && git branch -M main && git push -u origin main --force-with-lease
```

**Nota:**
*   Asegúrate de personalizar el mensaje del commit (`"Initial commit: Setup xlerion-ultimate project structure"`) según sea necesario.
*   Si el repositorio ya está inicializado (`git init` ya se ejecutó), el primer `git init` no hará nada o mostrará una advertencia.
*   Si el remoto `origin` ya existe, `git remote add origin ...` fallará. Puedes omitir esa parte si ya lo tienes configurado.
*   Este comando asume que quieres que tu rama principal se llame `main`.

## 5. GUÍA DE USO DE MEMORIA DE GEMINI



Escenario 1: Iniciar una Nueva Tarea (El Flujo Diario)



El objetivo aquí es usar memory_brain.md para darle a Gemini un contexto de bajo costo antes de empezar a programar.



    Actualizar el "Cerebro":



        Abre el archivo memory_brain.md.



        Ve a la Sección 4: Estado Actual / Tarea Activa.



        Escribe tu nueva tarea. Por ejemplo: Tarea Actual: Empezar a implementar el backend de MySQL (Paso 2 del Plan).



    Cargar el Contexto en Gemini:



        Abre el panel de chat de Gemini.



        NO USES @workspace.



        "Carga" el cerebro usando @file memory_brain.md (o anclándolo 📌).



    Iniciar la Tarea con Gemini:



        Haz tu primera pregunta.



        Ejemplo de prompt: "Basado en el manifiesto, mi tarea actual es el Paso 2 del Plan (Base de datos MySQL). ¿Qué archivos de la 'Arquitectura' debería crear o modificar primero?"



    Programar: Escribe tu código, obtén ayuda de Gemini (que ahora tiene el contexto de bajo costo) y prueba tus cambios.



Escenario 2: Guardar un Checkpoint (Después de un Éxito)



El objetivo es crear un "punto de restauración" robusto una vez que tu nueva tarea esté terminada y funcionando.



    Revisar el Trabajo: Tu nueva función está lista (ej. la conexión a MySQL funciona).



    Abrir la Terminal de VS Code (No el chat de Gemini).



    Crear el Checkpoint (Commit):



        git add . (Añade todos tus archivos cambiados).



        git commit -m "feat: Implementada conexión base a MySQL"



    Obtener el ID del Checkpoint:



        En la misma terminal, ejecuta: git log -1 --pretty=format:"%h"



        La terminal te devolverá el hash corto (ej: 8b4d2f1).



    Actualizar el "Cerebro" (el Índice):



        Abre memory_brain.md.



        Ve a la Sección 7: Puntos de Control.



        Añade tu nuevo checkpoint en la parte superior de la lista:

    Markdown



    ## 7. Puntos de Control (Checkpoints de Git)

    (Lista de commits clave para restauración. De más nuevo a más viejo.)



    * **[FECHA DE HOY] (Alias: Conexión MySQL Estable)**

        * **Commit Hash:** `8b4d2f1`

        * **Descripción:** Conexión inicial a la BD MySQL y modelo de usuario creados.



    * **2025-11-07 (Alias: Checkpoint Inicial)**

        * **Commit Hash:** `19a8afc`

        * **Descripción:** Configuración inicial del proyecto.



    Guardar el "Cerebro" Actualizado:



        En la terminal, añade este último cambio:



        git add memory_brain.md



        git commit --amend --no-edit (Esto "pega" tu archivo de memoria actualizado al checkpoint que acabas de crear. Es una práctica muy limpia).



Escenario 3: Restaurar desde un Checkpoint (En Caso de Falla Crítica)



El objetivo es usar tu "cerebro" como un mapa para decirle a Git cómo retroceder en el tiempo.



    Identificar el Problema: Estás programando, instalas un paquete nuevo, y todo el proyecto deja de funcionar. No sabes cómo arreglarlo.



    Consultar el "Cerebro":



        Abre memory_brain.md (incluso si el proyecto está roto, este archivo de texto funcionará).



        Ve a la Sección 7: Puntos de Control.



        Identifica tu último estado bueno. Alias: "Conexión MySQL Estable", Hash: 8b4d2f1.



    (Opcional) Pedir Confirmación a Gemini (Modo de bajo costo):



        Carga el cerebro: @file memory_brain.md.



        Pregunta: "Necesito restaurar mi proyecto al alias 'Conexión MySQL Estable'. Dame el comando de terminal exacto para hacerlo."



        Gemini (leyendo solo el archivo .md) responderá: El comando es: git reset --hard 8b4d2f1



    Ejecutar la Restauración (En la Terminal):



        Abre la Terminal de VS Code.



        ¡ADVERTENCIA! Este comando borra todo tu trabajo no guardado (desde el último commit).



        Escribe el comando:



        git reset --hard 8b4d2f1



    Verificación: Tu código se ha revertido mágicamente a ese punto de control. El proyecto vuelve a funcionar. Ya puedes volver al Escenario 1 e intentar tu tarea de nuevo.



Escenario 4: Subir el Proyecto a GitHub



El objetivo es subir el proyecto a GitHub utilizando un comando único que automatiza los pasos de inicialización y subida.



    Comando Único para Subir el Proyecto (Secuencial):



    ```bash

git init && git add . && git commit -m "Initial project setup and push" && (git remote get-url origin 2>$null || git remote add origin https://github.com/MikeHell84/xlerion-ultimate.git) && git branch -M main && git push -u origin main --force-with-lease

    ```



    **Nota:**

*   Asegúrate de personalizar el mensaje del commit (`"Initial commit: Setup xlerion-ultimate project structure"`) según sea necesario.

*   Si el repositorio ya está inicializado (`git init` ya se ejecutó), el primer `git init` no hará nada o mostrará una advertencia.

*   Si el remoto `origin` ya existe, `git remote add origin ...` fallará. Puedes omitir esa parte si ya lo tienes configurado.

*   Este comando asume que quieres que tu rama principal se llame `main`.



```



## 6. GESTIÓN DE ERRORES CRÍTICOS



Cuando ocurre un error crítico que impide el desarrollo (ej. un crash de la aplicación, un error de compilación), se debe seguir el siguiente protocolo para documentar la solución y construir una base de conocimiento.



**Proceso:**



1.  **Identificar el Error:** Reconocer que el problema es un bloqueador crítico.

2.  **Crear Archivo de Log:** Crear un nuevo archivo Markdown en la raíz del proyecto con la siguiente nomenclatura:

    `error_log_[YYYY-MM-DD]_[nombre_del_error].md`

    *   **Ejemplo:** `error_log_2025-11-07_Row_not_defined.md`

3.  **Documentar el Error:** Dentro del nuevo archivo, añadir una sección con el log completo del error.

    ````markdown

    ## Error Log

    ```

    [Pegar aquí el output completo del error de la consola/terminal]

    ```

    ````

4.  **Documentar la Solución:** Una vez resuelto el problema, añadir una segunda sección en el mismo archivo detallando la solución.

    ````markdown

    ## Solución

    

    **Causa Raíz:**

    [Explicación breve de por qué ocurrió el error. Ej: "El componente `Row` fue utilizado sin ser importado de `react-bootstrap`."]

    

    **Pasos para la Corrección:**

    1.  **Archivo Modificado:** `[ruta/al/archivo.tsx]`

    2.  **Código Corregido:**

        ```typescript

        // Mostrar el cambio específico, como la línea de importación corregida.

        import { Container, Accordion, Row, Col } from 'react-bootstrap';

        ```

    3.  **Comandos Ejecutados (si aplica):**

        ```bash

        [Ej: npm install, etc.]

        ```

    ````

5.  **Actualizar Registro Central (Opcional pero recomendado):** Añadir una referencia al nuevo archivo de log en la sección `project_logbook.md` para tener un índice central de problemas resueltos.
-----
## 10. Problemas Resueltos en la Sesión Actual

### 1. Error de importación de ASGI App (Backend)
- **Problema:** `ERROR: Error loading ASGI app. Could not import module "app".`
- **Causa:** Entorno incorrecto o dependencias no instaladas para el backend FastAPI.
- **Solución:** Se proporcionaron instrucciones para activar el entorno virtual, instalar `requirements.txt` e iniciar el servidor FastAPI. También se listaron las dependencias (`thefuzz`, `python-Levenshtein`) en `requirements.txt`.

### 2. Advertencia de Accesibilidad en Botones (Frontend)
- **Problema:** `Buttons must have discernible text: Element has no title attribute` en la página de inicio.
- **Causa:** Botón de cierre del Modal de React-Bootstrap generado automáticamente sin `aria-label` o `title`.
- **Solución:** Se reemplazó el botón de cierre automático del modal en `page.tsx` por un botón manual con `aria-label="Close"` y `title="Cerrar"`.

### 3. Advertencia de Regla `@import` en CSS (Frontend)
- **Problema:** `Define @import rules at the top of the stylesheet`.
- **Causa:** Sintaxis `@import url()` en `globals.scss` que algunas herramientas de linting pueden preferir estandarizar.
- **Solución:** Se cambió la sintaxis de importación de la fuente de Google en `globals.scss` de `@import url(...)` a `@import '...'`.

### 4. Error 404 y ECONNREFUSED en llamada a API (Frontend a Backend)
- **Problema:** `GET http://localhost:3000/api/ask?question=menu 404 (Not Found)` y `Error: connect ECONNREFUSED 192.168.1.3:8000`.
- **Causa:** Desajuste en el objetivo de la API entre el frontend y el backend (`.env.local` vs `next.config.js`) y el backend no accesible en la dirección esperada.
- **Solución:** Se configuró `NEXT_PUBLIC_BACKEND_URL=http://localhost:8000` en `.env.local` y se modificó `LeftSidebarAI.tsx` para usar esta variable. Se ajustó la regla `rewrites` en `next.config.js` para que el `destination` también sea `http://localhost:8000`. Se enfatizó la necesidad de reiniciar ambos servidores.

### 5. Asistente de IA no mostraba opciones de menú
- **Problema:** El asistente de IA mostraba el mensaje por defecto en lugar de las opciones de menú al abrirse.
- **Causa:** El frontend llamaba al endpoint `/api/ask?question=menu`, que no estaba diseñado para devolver opciones de menú.
- **Solución:** Se modificó `LeftSidebarAI.tsx` para llamar al endpoint `/api/menu` para las opciones iniciales y se ajustó `app.py` para devolver un objeto de respuesta con `text` y `link` para las respuestas del `knowledge_base`. Se añadieron nuevas entradas a `knowledge_base.py` para los títulos del menú.

### 6. Advertencia de `key` prop en `LeftSidebarAI.tsx`
- **Problema:** `Warning: Each child in a list should have a unique "key" prop. Check the render method of LeftSidebarAI.`
- **Causa:** La prop `key` estaba en el `Button` en lugar de en el componente `MagneticEffect` dentro del `map` de las opciones del menú.
- **Solución:** Se movió la prop `key` del `Button` al `MagneticEffect` en `LeftSidebarAI.tsx`.

### 7. Estilo del Menú Principal (Múltiples líneas y formato)
- **Problema:** Los botones del menú principal se mostraban en dos líneas y sin mayúsculas.
- **Causa:** Los títulos del menú (`item.title`) eran demasiado largos y faltaban clases de estilo apropiadas.
- **Solución:** Se modificó `ClientNavbar.tsx` para usar `item.shortTitle` y se añadieron las clases de utilidad de Bootstrap `text-uppercase` y `text-nowrap` a los elementos del menú.

### 8. Botón redundante del Asistente de IA en el Menú Principal
- **Problema:** Existía un botón para el asistente de IA en la barra de navegación principal, lo cual era redundante.
- **Causa:** El botón estaba hardcodeado en `ClientNavbar.tsx`.
- **Solución:** Se eliminó el bloque de código del botón del Asistente de IA de `ClientNavbar.tsx`.

### 9. Iconos en el Menú Principal y Burbuja de Contexto del AI
- **Implementación:** Se añadieron iconos Font Awesome a cada elemento del menú principal en `ClientNavbar.tsx`.
- **Implementación:** Se implementó una "burbuja de contexto" visual distintiva para las respuestas del AI en `LeftSidebarAI.tsx` y `globals.scss`, incluyendo diferente color de fondo, borde brillante, sombra y un icono `FaRobot`.

### 10. Botón "Ver Más" no visible
- **Problema:** El botón "Ver Más" no aparecía en la interfaz.
- **Causa:** Posiblemente un problema de renderizado o estilo que lo hacía invisible o no interactuable.
- **Solución:** Se revisó y ajustó la lógica de renderizado y los estilos CSS para asegurar que el botón "Ver Más" fuera visible y funcional.