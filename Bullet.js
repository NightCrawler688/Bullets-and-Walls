
class Bullet {
  constructor(weight, speed) {
    this.x = 50
    this.y = 200
    this.sprite=createSprite(this.x, this.y, 50,5);   
    this.weight=weight;
    this.speed=speed;   
    this.sprite.velocityX = random(10,20);
    this.sprite.shapeColor=color(255);
  }

  
}