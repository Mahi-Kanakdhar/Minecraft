var canvas=new fabric.Canvas("myCanvas");

block_width=30;
block_height=30;

player_x=10;
player_y=10;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(IMG){
        player_object=IMG;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(IMG){
        block_object=IMG;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed==80){
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }

    if(e.shiftKey==true && keypressed==77){
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }

    if(keypressed==38){
        up();
        console.log("up is pressed");
    }

    if(keypressed==40){
        down();
        console.log("down is pressed");
    }

    if(keypressed==37){
        left();
        console.log("left is pressed");
    }

    if(keypressed==39){
        right();
        console.log("right is pressed");
    }

    if(keypressed==67){
        new_image("cloud.jpg");
        console.log("c")
    }

    if(keypressed==68){
        new_image("dark_green.png");
        console.log("d")
    }

    if(keypressed==71){
        new_image("ground.png");
        console.log("g")
    }

    if(keypressed==76){
        new_image("light_green.png");
        console.log("l")
    }

    if(keypressed==84){
        new_image("trunk.jpg");
        console.log("t")
    }

    if(keypressed==85){
        new_image("unique.png");
        console.log("u")
    }

    if(keypressed==87){
        new_image("wall.jpg");
        console.log("w")
    }

    if(keypressed==89){
        new_image("yellow_wall.png");
        console.log("y")
    }

    if(keypressed==82){
        new_image("roof.jpg");
        console.log("r")
    }
}

function up(){
    if (player_y>0){
        player_y=player_y-block_height;
       canvas.remove(player_object);
       player_update();
    }   
}

function down(){
    if (player_y<400){
        player_y=player_y+block_height;
       canvas.remove(player_object);
       player_update();
    }   
}

function right(){
    if (player_x<750){
        player_x=player_x+block_height;
       canvas.remove(player_object);
       player_update();
    }   
}

function left(){
    if (player_x>0){
        player_x=player_x-block_height;
       canvas.remove(player_object);
       player_update();
    }   
}