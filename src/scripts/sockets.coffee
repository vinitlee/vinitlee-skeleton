@socket = io()

socket.emit('message',{text:"Hello"})