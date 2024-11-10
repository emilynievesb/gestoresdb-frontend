# Guía para Inicializar un Repositorio de Next.js en GitHub Usando una Plantilla

## Requerimientos Mínimos

1. **Node.js**: Instala Node.js (recomendado: la versión LTS). Puedes descargarlo en [nodejs.org](https://nodejs.org/).
2. **Git**: Necesitas Git instalado en tu computadora. Descárgalo en [git-scm.com](https://git-scm.com/).

## Pasos para Crear Tu Repositorio

### Paso 1: Clonar el Repositorio Plantilla

1. Ve al repositorio plantilla en GitHub.
2. Haz clic en el botón `Use this template` o `Usar esta plantilla` en la parte superior del repositorio.
3. Dale un nombre a tu repositorio. Este será un repositorio **independiente** que no afectará al repositorio plantilla.
4. Elige la opción **Public** o **Private** según tu preferencia.
5. Haz clic en `Create repository from template` para crear tu propia copia del repositorio.

### Paso 2: Clonar Tu Repositorio en Tu Computadora

1. En la página de tu nuevo repositorio en GitHub, haz clic en el botón **Code** y copia la URL del repositorio.
2. Abre una terminal o línea de comandos en tu computadora.
3. Ejecuta el siguiente comando para clonar el repositorio:

    ```bash
    git clone URL_DE_TU_REPOSITORIO
    ```

    Asegúrate de reemplazar `URL_DE_TU_REPOSITORIO` con la URL que copiaste.

### Paso 3: Instalar Dependencias

1. Navega dentro del directorio de tu repositorio clonado:

    ```bash
    cd NOMBRE_DEL_REPOSITORIO
    ```

2. Ejecuta el siguiente comando para instalar las dependencias de Next.js:

    ```bash
    npm install
    ```

### Paso 4: Ejecutar el Proyecto

1. Una vez que las dependencias estén instaladas, ejecuta el siguiente comando para iniciar el proyecto en modo de desarrollo:

    ```bash
    npm run dev
    ```

2. Abre tu navegador y ve a [http://localhost:3000](http://localhost:3000) para ver tu aplicación Next.js en funcionamiento.

### Paso 5: Confirmar Cambios y Subirlos a GitHub

1. Después de hacer cambios, agrega los archivos a Git con:

    ```bash
    git add .
    ```

2. Haz un commit de los cambios:

    ```bash
    git commit -m "Mensaje descriptivo de tus cambios"
    ```

3. Sube los cambios a GitHub:

    ```bash
    git push origin main
    ```

## Notas

-   **No necesitas modificar el repositorio plantilla original**. Cada vez que uses el botón "Usar esta plantilla", estarás creando un nuevo repositorio basado en él.
-   Para cualquier duda adicional, consulta la [Documentación de GitHub](https://docs.github.com/en) y la [Documentación de Next.js](https://nextjs.org/docs).

¡Listo! Ahora tienes un repositorio Next.js funcional en GitHub.
