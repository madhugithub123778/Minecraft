var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_width=30;
block_height=30;

var player_object="";
var block_image="";

function player_update(){
fabric.Image.fromURL("player.png", function(Img)
{
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
});
}

function new_image(get_image){
fabric.Image.fromURL(get_image, function (Img)

{
var block_image=Img;
block_image.scaleToWidth(block_width);
block_image.scaleToHeight(block_height);
block_image.set({
top:player_y,
left:player_x
});
canvas.add(block_image);});}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPress=e.keyCode;
console.log(keyPress);

if (e.shiftKey==true && keyPress=='80'){
console.log("P and Shift pressed together");
block_width=block_width+10;
block_height=block_height+10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}
if (e.shiftKey==true && keyPress=='77'){
console.log("M and Shift pressed together");
block_width=block_width-10;
block_height=block_height-10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}
if (keyPress=='38'){
up();
console.log("Moving Up");}

if (keyPress=='40'){
down();
console.log("Moving Down");}
    
if (keyPress=='37'){
left();
console.log("Moving Left");}

if (keyPress=='39'){
right();
console.log("Moving Right");}
                    
if (keyPress=='87'){
new_image("wall.jpg");
console.log("w");}

if (keyPress=='71'){
new_image("ground.png");
console.log("g");}

if (keyPress=='76'){
new_image("light_green.png");
console.log("l");}

if (keyPress=='84'){
new_image("trunk.jpg");
console.log("t");}

if (keyPress=='82'){
new_image("roof.jpg");
console.log("r");}

if (keyPress=='89'){
new_image("yellow_wall.png");
console.log("y");}

if (keyPress=='68'){
new_image("dark_green.png");
console.log("d");}

if (keyPress=='85'){
new_image("unique.png");
console.log("u");}

if (keyPress=='67'){
new_image("cloud.jpg");
console.log("c");}}

function up(){
if (player_y>=0){
player_y=player_y-10;
console.log("Up Arrow Pressed"+ "X= " + player_x + " Y= "+player_y);
canvas.remove(player_object);
player_update();}}

function down(){
if (player_y<=550){
player_y= player_y+10;
console.log("Down Arrow Pressed"+"X= "+player_x+ " Y= "+player_y);
canvas.remove(player_object);
player_update();}}

function left(){
if (player_x>=0){
player_x= player_x- 10;
console.log("Left Arrow Pressed"+ "X= "+player_x+ " Y= "+player_y);
canvas.remove(player_object);
player_update();}}

function right(){
if (player_x<= 950){
player_x= player_x+10;
console.log("Right Arrow Pressed"+ "X= "+player_x+ " Y= "+player_y);
canvas.remove(player_object);
player_update();}}