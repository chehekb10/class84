canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width =90;
rover_height =70;

background_image = "mars.jpg";
rover_image = "rover.png";

rover_x = 20;
rover_y = 20;

function add(){

    background_img_Tag = new Image();
    background_img_Tag.onload=uploadbackground;
background_img_Tag.src=background_image;

rover_img_Tag = new Image();
    rover_img_Tag.onload=uploadrover;
rover_img_Tag.src=rover_image;

}

function uploadbackground() {

ctx.drawImage(background_img_Tag,0,0,canvas.width,canvas.height);


}
function uploadrover() {

ctx.drawImage(rover_img_Tag,rover_x,rover_y,rover_width, rover_height);


    }

    window.addEventListener("keydown",my_keydown);

function my_keydown(e){

    keypressed=e.keyCode;

console.log(keypressed);

if (keypressed  == '38'){
up();
console.log("up");


}
if (keypressed  == '38'){
    up();
    console.log("up");
    
    
    }
    if (keypressed  == "40"){
        down();
        console.log("down");
        
        
        }
        if (keypressed  == "37"){
            left();
            console.log("left");
            
            
            }
            if (keypressed  == "39"){
                right();
                console.log("right");
                
                
                }
}

