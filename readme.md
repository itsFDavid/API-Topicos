# Proyecto CRUD API con Base de Datos

# Despliegue
Se utilizo render para desplegar esta api la cual se encuentra en la siguiente liga


## Descripción

Este proyecto es una API RESTful que implementa las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) conectada a una base de datos. La API permite gestionar datos de manera eficiente y segura. El front-end está diseñado para interactuar con esta API, proporcionando una interfaz de usuario amigable.

## Tecnologías Utilizadas

- **Backend**: Node.js, Express.
- **Base de Datos**: MySQL.
- **Frontend**: HTML, CSS, JavaScript.
- **Herramientas**: Git, Postman para pruebas.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/itsFDavid/API-Topicos.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd tu-repositorio
    ```
3. Instala las dependencias del backend:
    ```bash
    npm install
    ```
4. Configura las variables de entorno. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
    ```env
    DB_HOST=tu_host_de_bd
    DB_USER=tu_usuario_de_bd
    DB_PASS=tu_contraseña_de_bd
    DB_NAME=tu_nombre_de_bd
    PORT=puerto_deseado
    ```
5. Inicia el servidor:
    ```bash
    npm start
    ```

## Uso

### Endpoints de la API

- **Crear (POST /)**
    ```bash
    curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"nombre": "Juan"}'
    ```

- **Leer (GET /)**
    ```bash
    curl http://localhost:3000/
    ```

- **Actualizar (PATCH /)**
    ```bash
    curl -X PUT http://localhost:3000/items/1 -H "Content-Type: application/json" -d '{"nombre": "David", "id": 1}'
    ```

- **Eliminar (DELETE /)**
    ```bash
    curl -X DELETE http://localhost:3000/items/1 -H "Content-Type: application/json" -d '{"id": 1}'
    ```

## Vistas del Frontend

A continuación se muestran capturas de pantalla de la interfaz de usuario:

### Vista Principal
![Vista Principal](imgProject/pageIndex.png)


## Contribución

1. Haz un fork del repositorio.
2. Crea una rama para tu característica o corrección de errores (`git checkout -b nombre-rama`).
3. Haz commit de tus cambios (`git commit -am 'Agrega nueva característica'`).
4. Haz push a la rama (`git push origin nombre-rama`).
5. Abre un Pull Request.


## Contacto

- **Nombre**: Francisco David
- **Email**: FDavid04@icloud.com
- **GitHub**: [itsFDavid](https://github.com/itsFDavid)

