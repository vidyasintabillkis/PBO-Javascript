let peluru= []
let enemies = []
let dead = false
let plays = true

function setup() {
  myMaps = new maps(650, 410)
  
  createCanvas(myMaps.width, myMaps.height)
  bg = loadImage("bg_galaxy.png")
  rocket = loadImage("rocket.png")
  nuklir = loadImage("nuklir.png")
  hero = loadImage("rocketHero.png")
	
  myEntity = new Entity(150, 150, 10, 10)
  myHero =  new Hero(75, 65, 350, 250)
  myMonster = new Monster(35, 55)
  myLevel =new level()
  myMonster.showEnemy()
}

function draw() {
  background(220);
}

class maps{
  constructor( width,height) {
    this.width = width;
    this.height = height;}
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
    }if(this.xSpeed > width){
      this.xSpeed -= 8;
    }if(this.ySpeed < 0){
      this.ySpeed += 8;
    }if(this.ySpeed > height){
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

class Monster extends Entity {
  constructor(height, width, xSpeed, ySpeed) {
    super(height, width, xSpeed = random(10, 640),
    ySpeed = random(width))
    this.life = 100
    this.speed = 1;
    this.level = 1;
  }

  showEnemy() {
    for(let i = 0; i < 10; i++) {
      let enemy = {
        a : random(10,width),
        b : random(-760,0)
      }
      enemies.push(enemy)
    }  
  }
  
  enemys() {
    for(let enemy of enemies) {
      enemy.b += this.level // set level 
      image(rocket,enemy.a,enemy.b,35,45)
      if(enemy.b > height) {
        enemies.splice(enemies.indexOf(enemy), 1)
        myHero.life -=35
      }
    }
  }
}

class level {
  leveling() {
    if(keyIsPressed) {
      if(key == '1') {
        console.log("1")
        plays = false
        myMonster.level = 1
      } else if(key == '2') {
        console.log("2")
        plays = false
        myMonster.level = 2
      } else if(key == '3') {
        console.log("3")
        plays = false
        myMonster.level = 3
      }
    }
  }
}
