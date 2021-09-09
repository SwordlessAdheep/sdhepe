function preload() {



}

function setup() {

canvas= createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO) ;
video.hide();
tint_color="";

}

function draw() {

image(video, 0 , 0 , 640 , 480);
rect(30, 20, 40, 390, 32, 85, 207);
rect(30, 20, 550, 40);
rect(550, 20, 40, 390);
rect(30, 370, 550, 40);


}

function take_snapshot() {

save('epikprogmersickomode.png');

}

 function filter_tint(){
     
tint_color=document.getElementById("color_name").value; 

 }
