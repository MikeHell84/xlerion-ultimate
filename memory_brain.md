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

**Ejemplo de Solicitud de Restauración:**
"El proyecto ha fallado críticamente. Por favor, mira la sección 'Puntos de Control' de mi archivo de memoria y dame el comando de terminal para restaurar el proyecto al checkpoint con el alias 'Base Estable Trigger.dev'."

`git reset --hard 19a8afc`

* **2025-11-07 (Alias: Checkpoint Inicial)**
    * **Commit Hash:** `19a8afc`
    * **Descripción:** (Este es tu primer punto de restauración. Añade una breve descripción de lo que funciona en este commit.)

## 8. Comandos Útiles de Git

### Comando Único para Subir el Proyecto a GitHub (Secuencial)

```bash
git init && git add . && git commit -m "Initial commit: Setup xlerion-ultimate project structure" && (git remote get-url origin 2>$null || git remote add origin https://github.com/MikeHell84/xlerion-ultimate.git) && git branch -M main && git pull origin main --rebase && git push -u origin main
```

**Nota:**
*   Asegúrate de personalizar el mensaje del commit (`"Initial commit: Setup xlerion-ultimate project structure"`) según sea necesario.
*   Si el repositorio ya está inicializado (`git init` ya se ejecutó), el primer `git init` no hará nada o mostrará una advertencia.
*   Si el remoto `origin` ya existe, `git remote add origin ...` fallará. Puedes omitir esa parte si ya lo tienes configurado.
*   Este comando asume que quieres que tu rama principal se llame `main`.