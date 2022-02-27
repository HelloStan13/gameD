# gameD
## Juego Multijugador NodeJs
### By Adryan Ynfante

## Tabla de contenido

- [Construido con](#Construido-con).
- [Principales características](#Principales-características).
- [Instalación](#Instalación).
- [Realizar solicitudes](#Realizar-solicitudes).
- [Contacto](#Contacto).


### Construido con
Esta es la pila tecnológica con la que he trabajado:
Node.js
MongoDB
Mongoose
Pug/Css
Nodemon


### Principales características
- Creacion de jugadores.
- Actualización de datos y apuesta para jugadores.
- Eliminación de jugadores de forma lógica.
- Inicio de juego.
- Fin de juego y ganador*

### Instalación

Para obtener una copia local en funcionamiento, siga estos sencillos pasos.

Clonar el repositorio
clon de git https://github.com/HelloStan13/gameD.git

Instalar paquetes NPM
instalar npm

Ejecutar aplicación con: npm run dev



### Realizar solicitudes:
Ingresar a cliente/test.http

// Opción 1. Creación de jugadores
POST http://localhost:8080/api/gamers

// Opción 2. Actualización de jugadores a través de ID
PUT  http://localhost:8080/api/gamers/621adb380251d4e6bcac4f53

//Opción 3. Eliminar jugador a través de ID
DELETE http://localhost:8080/api/gamers/621adb380251d4e6bcac4f53

//Opción 4. Inicio de juego
GET  http://localhost:8080/api/stargame 

//Opción 5. Fin de juego y ganador
GET http://localhost:8080/api/finishGame

### Contacto
Adryan Ynfante --> adryanynfante@gmail.com
