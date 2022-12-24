function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}


class Entity{
  constructor(height, width, xSpeed, ySpeed) {
    this.height = height;
    this.width = width;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;

    
  }
  
  move(){

    if(this.xSpeed < 0){
      this.xSpeed += 8;
    }
    if(this.xSpeed > width){
      this.xSpeed -= 8;
    }
    if(this.ySpeed < 0){
      this.ySpeed += 8;
    }
    if(this.ySpeed > height){
      this.ySpeed -= 8;
    }
    
    if (keyIsPressed ) {
   if (keyCode == RIGHT_ARROW || key == 'd') {
    this.xSpeed +=8; 
   }  else if (keyCode == LEFT_ARROW || key == 'a') {
     this.xSpeed -= 8;
   } else if (keyCode == UP_ARROW || key == 'w') {
     this.ySpeed -= 8; 
   } else if (keyCode == DOWN_ARROW ||key == 's') {
     this.ySpeed +=8; 
   }
  }
}   
}

class Hero extends Entity{
  constructor(height,width,xSpeed,ySpeed){
    super(height, width, xSpeed,ySpeed)
    this.life = 100
    this.score = 0
  }
  
  show() {
    strokeWeight(0)
    imageMode(CENTER);
    image(hero,this.xSpeed,this.ySpeed,this.height,
                this.width);
    fill(255,255,255)
    textSize(16)
	text("Score: " + this.score, 500, 35);
    text("Health: " +this.life, 500, 50);
  }
  
  atack(){
  for (let bullet of peluru){
      circle(bullet.x,bullet.y,10)
        bullet.y -=5
    }
    if(mouseButton == LEFT){
  let bullet = {
    x : this.xSpeed,
    y : this.ySpeed
  }
  peluru.push(bullet)
}
    mouseButton = false
  } 
}
