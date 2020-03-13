$(document).ready(function () {

$('.navigation li').hover(function () {
//Esto nos dara el efecto de Fade en el submenu
    $('ul', this).fadeIn(); // fadeIn muestra progresivamente un item oculto
},function () {
    $('ul', this).fadeOut(); // fadeOut vuelve a ocultar el submenu
});
});

$(document).ready(function() {
    $('#demo').cycle({
        fx: 'shuffle'
    });
});

$(document).ready(function () {
$('#peticion').on('click', function(){
  $.ajax({
    type: "post",
    url: "info.php",
    dataType: "json",
    success: function (response){
      console.log('Peticion Satisfactoria');
      console.log(response);

      var codHtml="<h3>Este es un ejemplo AJAX</h3>";
      codHtml+="<p>PHP: "+response.PHP+"<br>";
      codHtml+=response.info+"<br>";

      $('#info').append(codHtml);
    }
  });
});
});


$(document).ready(function () {
	$('#Cargar').on('click', function(){
		var contenido='<div class="cargar"><img src="img/pokemon.jpg" alt="jQuery"><p>Pokémon es una franquicia de medios que originalmente comenzó como un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como series de televisión, juegos de cartas, ropa, entre otros, convirtiéndose en una marca que es reconocida en el mercado mundial.</p>';
		$(".contenido").append(contenido);
	});
});


$(document).ready(function () {
	$('#pikachu').on('click', function(){
		$('#pikachu').hide(1000);
		$('#pikachu').delay(1000);
		$('#pikachu').show(1000);
	});
});


var proceso;
$(document).ready(function(){
  var actualIndice = 0;
  var objetos = $('.contenedor div');
    var numObjetos = objetos.length;
  function cambiarImagen(){
    var imagen = objetos.eq(actualIndice);
    objetos.hide();
    imagen.css('display','inline-block');
  }
    proceso = setInterval(function(){
    actualIndice += 1;
    if(actualIndice > (numObjetos -1)){
      actualIndice = 0;
    }
    cambiarImagen();
  }, 3000);
  $('.siguiente').click(function(){
    limpiarIntervalo();
    actualIndice += 1;
    if (actualIndice > (numObjetos -1)){
      actualIndice = 0;
    }
    cambiarImagen();
  });
  $('.anterior').click(function(){
    limpiarIntervalo();
    actualIndice -= 1;
    if (actualIndice < 0 ){
      actualIndice = numObjetos-1;
    }
    cambiarImagen();
  });
});
function limpiarIntervalo(){
  window.clearInterval(proceso);
}