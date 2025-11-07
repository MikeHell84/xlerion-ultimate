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
