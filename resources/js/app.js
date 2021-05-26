require('./bootstrap');
jQuery(document).ready(function($){
    console.log('lmao')
   $('#buttonGetValue').click(function(){
       var fecha = document.getElementById("fecha").value;
       $.ajax({
           url     : "/getValues",
           method  : "POST",
           data: {
               fecha:fecha ,
           }
       })
       .fail(function() { return false; })
       .done(function(data) {
           $('#valorUF').text(data.data.serie[0].valor)
       });
   });
});
