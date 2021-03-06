import {SVG_NS} from '../settings';

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.ping = new Audio('public/sounds/pong-01.wav');
    
    this.reset();
  }
 
  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    
    this.vy = 0;
    
    while ( this.vy === 0 ) {
      this.vy = Math.floor(Math.random() * 10 -5);
    }
   
    
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }
  
  wallCollision(paddleOne, paddleTwo) {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;
    
    if (hitLeft) {
      this.direction = -1;
      this.goal(paddleTwo, paddleOne);
    } else if (hitRight) {
      this.direction = 1;
      this.goal(paddleOne, paddleTwo);
    } else if (hitTop || hitBottom) {
      this.vy = -this.vy;
    }
  }
  
  paddleCollision(paddleOne, paddleTwo) {
    if (this.vx > 0) {
      let paddle = paddleTwo.coordinates(paddleTwo.x, paddleTwo.y, paddleTwo.width, paddleTwo.height);
      let {leftX, topY, bottomY} = paddle; 
      
      if (
        this.x + this.radius >= leftX 
        && this.y >= topY 
        && this.y <= bottomY
      ) {
        this.vx = -this.vx;
        this.ping.play();
      }
      
      } else {
      let paddle = paddleOne.coordinates(paddleOne.x, paddleOne.y, paddleOne.width, paddleOne.height);
      let {rightX, topY, bottomY} = paddle;
      
      if (
        this.x - this.radius <= rightX
        && this.y >= topY
        && this.y <= bottomY
      ) {
        this.vx = -this.vx;
        this.ping.play();
      }
    }
  }
  //End Game//

  goal(point, end) {
    point.score ++; 
    if (point.score > 10) {
      
      point.score = 0;
      end.score =0;
      alert('yahoo');     
    }
    this.reset();
  }
  
  render(svg, paddleOne, paddleTwo) {
    this.x += this.vx;
    this.y += this.vy;
    
    this.wallCollision(paddleOne, paddleTwo);
    this.paddleCollision(paddleOne, paddleTwo)
    
    let circle = document.createElementNS(SVG_NS, 'circle')
    
    circle.setAttributeNS(null, 'r', this.radius);
    circle.setAttributeNS(null, 'cx', this.x);
    circle.setAttributeNS(null, 'cy', this.y);
    circle.setAttributeNS(null, 'fill', 'white');
    svg.appendChild(circle);
  }
}