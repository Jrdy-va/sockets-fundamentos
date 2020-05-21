var socket = io()

// escuchar 
socket.on('connect', function (){
    console.log('Conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Perdimos la conexión con el servidor');
})

// son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Jordy',
    mensaje: 'Hola desde el front'
}, function( resp ) {
    console.log('Respuesta server : ', resp); 
})

//escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje)
})

