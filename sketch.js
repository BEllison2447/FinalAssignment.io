//based on https://www.openprocessing.org/sketch/424072 by Abdelrhman Wassim

var y= 0;
var moonRadius = 17;

function setup() {
  createCanvas(600, 400);
}

function draw() {

	background (166,136,217);
  
	//the moon :)
  fill(255);
  noStroke();
  ellipse(240,y,40,40);
  y = y + 1 ;
  fill(166,136,217);
  rect(340,100,60,100);
	
	 //buildings
	stroke(1);
	line(0,300,600,300);
	stroke(2);
	line(210,250,210,300);
	stroke(3);
	line(200,250,320,250);
	stroke(4);
	line(310,300,310,250);
	
	 //name
	textSize(30);
	fill(30,150);
	text("Bastion",50,200); //shadow
	text("Ellison",50,225); //shadow
	fill(200);
	text("Bastion",48,198);
	text("Ellison",48,223);
	
	console.log(mouseX,mouseY);
	
	if (y>248-moonRadius){
		y = y - 1 ;
	}
}