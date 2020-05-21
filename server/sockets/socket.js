const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado')

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Soy el Server, Bienvenido'
    })


    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data)

/*         if( mensaje.usuario ) {
            callback('Todo salio bien')
        } else {
            callback ('Algo salió MAL')
        } */

    })
})
