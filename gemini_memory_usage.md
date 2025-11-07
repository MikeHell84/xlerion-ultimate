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
git init && git add . && git commit -m "Initial commit: Setup xlerion-ultimate project structure" && git remote add origin https://github.com/MikeHell84/xlerion-ultimate.git && git branch -M main && git push -u origin main
    ```

    **Nota:**
*   Asegúrate de personalizar el mensaje del commit (`"Initial commit: Setup xlerion-ultimate project structure"`) según sea necesario.
*   Si el repositorio ya está inicializado (`git init` ya se ejecutó), el primer `git init` no hará nada o mostrará una advertencia.
*   Si el remoto `origin` ya existe, `git remote add origin ...` fallará. Puedes omitir esa parte si ya lo tienes configurado.
*   Este comando asume que quieres que tu rama principal se llame `main`.