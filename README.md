# gameD
## Juego Multijugador NodeJs
### By Adryan Ynfante

### Cuerpo de la solicitud para realizar una solicitud:
Ingresar a cliente/test.http

// Opción 1. Creación de jugadores
###
POST http://localhost:8080/api/gamers

// Opción 2. Actualización de jugadores a través de ID
###
PUT  http://localhost:8080/api/gamers/621adb380251d4e6bcac4f53

//Opción 3. Eliminar jugador a través de ID
###
DELETE http://localhost:8080/api/gamers/621adb380251d4e6bcac4f53

//Opción 4. Inicio de juego
###
GET  http://localhost:8080/api/stargame 

//Opción 5. Fin de juego y ganador
###
GET http://localhost:8080/api/finishGame


