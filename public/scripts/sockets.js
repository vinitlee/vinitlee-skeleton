(function() {
  this.socket = io();

  socket.emit('message', {
    text: "Hello"
  });

}).call(this);
