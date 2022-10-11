function preload(){

}

function setup(){
    canvas=createCanvas(600,400);
    canvas.position(110.250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video,200,100,200,200);
    tint(tint_color);
    fill(255,0,0);
    stroke(255,0,0);
    circle(20, 20, 40);
    circle(20, 370, 40);
    circle(550, 20, 40);
    circle(550, 370, 40);
  
    fill(0,250,0);
    stroke(0,250,0);
    rect(35, 0, 500, 40);
    rect(35, 350, 500, 40);
    rect(15, 30, 40, 325);
    rect(525, 30, 40, 325);
}

 function take_snapshot(){
     save("student_name.png");
     
 }
