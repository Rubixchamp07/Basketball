var canvas = new fabric.Canvas('myCanvas');
basketball_y=0;
basketball_x=0;
hoop_y=100;
hoop_x=700;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("basketball_hoop.png", function(Img) {
		hoop_obj = Img;
		hoop_obj.scaleToWidth(250);
		hoop_obj.scaleToHeight(250);
		hoop_obj.set({
			top:hoop_y,
			left:hoop_x
		});
		canvas.add(hoop_obj);
		});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("basketball.png", function(Img) {
	basketball_obj = Img;
	basketball_obj.scaleToWidth(50);
	basketball_obj.scaleToHeight(50);
	basketball_obj.set({
	top:basketball_y,
	left:basketball_x
	});
	canvas.add(basketball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((basketball_x==hoop_x)&&(basketball_y==hoop_y)){
		canvas.remove(basketball_obj);
		console.log("You have Hit the Goal!!!");
		document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
	    document.getElementById("myCanvas").style.borderColor="red";
	}
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
		if(basketball_y >=5)
		{
			basketball_y = basketball_y - block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Up arrow key is pressed, X =  " + basketball_x + " , Y = "+basketball_y);
			canvas.remove(basketball_obj);
			new_image();
		}
	}

	function down()
	{
		if(basketball_y <=450)
		{
			basketball_y = basketball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, X =  " + basketball_x + " , Y = "+basketball_y);
			canvas.remove(basketball_obj);
			new_image();
		}
	}

	function left()
	{
		if(basketball_x >5)
		{
			basketball_x = basketball_x - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Left arrow key is pressed, X =  " + basketball_x + " , Y = "+basketball_y);
			canvas.remove(basketball_obj);
			new_image();
		}
	}

	function right()
	{
		if(basketball_x <=1050)
		{
			basketball_x = basketball_x + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Right arrow key is pressed, X =  " + basketball_x + " , Y = "+basketball_y);
			canvas.remove(basketball_obj);
			new_image();
		}
	}
	
}