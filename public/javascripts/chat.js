$(document).ready(function(){
  var socket = io();
  
  socket.on('message', function(e){
    console.log(e);
  });

  socket.on('message added', function(e){
    $('#messageArea').prepend($('<tr><td>' + e.name + '</td><td>' + e.message + '</td></tr>'));
  });

  $('#message').keypress(function(e){
    if(e.keyCode == 13){
      var message = {
        name: $('#name').val(),
        message: $('#message').val()
      };
      socket.emit("add message", message);
      $('#message').val('');
    }
  });

});
