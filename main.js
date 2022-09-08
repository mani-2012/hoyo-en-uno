
// Crea la variable de canvas 
canvas = new fabric.Canvas('myCanvas');

ball_x = 10;
ball_y = 10;
//Establece las posiciónes para la pelota y el agujero.


block_image_width = 5;
block_image_height = 5;

ball_object= "";
var block_image_object= "";

function load_img(){
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_object = Img;
	
		ball_object.scaleToWidth(150);
		ball_object.scaleToHeight(140);
		ball_object.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(ball_object);
	
		});
	// escribe el código para subir la imagen de golf al canvas
	new_image();
}

function new_image()
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
	
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(block_image_object);
	
		});
	// escribe el código para subir la imagen de la pelota al canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(e.shiftKey == true && keyPressed == '77')
{
	console.log("Se presiona m y shift al mismo tiempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '65')
{
	console.log("Se presiona a y shift al mismo tiempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	/* Revisa las coordenadas de las imágenes de la pelota y del agujero para terminar el juego. 
	Si las coordenadas coinciden con las de la imagen de la pelota, elimina la imagen de la pelota, 
	mostrar "¡TERMINÓ EL JUEGO!" 
	y haz que el borde del canvas sea 'rojo'.*/
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		ball_y = ball_y - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_object);
		ball_update();
		// Escribe el código para mover la pelota hacia arriba.
	}

	function down()
	{
		if(ball_y <=500)
	{
		ball_y = ball_y + block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_object);
	ball_update();
	}
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_object = Img;
	
		ball_object.scaleToWidth(150);
		ball_object.scaleToHeight(140);
		ball_object.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(ball_object);
	
		});
		 // Escribe el código para mover la pelota hacia abajo.
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha izquierda, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_object);
		ball_update();
			// Escribe el código para mover la pelota hacia la izquierda.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha derecha, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_object);
		ball_update();
			// Escribe el código para mover la pelota hacia la derecha.
		}
	}
	
}

