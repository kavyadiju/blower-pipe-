class Ball {
  constructor(x, y, w, h) {
    let options = {
      restitution: 0.8
    };

  
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
  
    pop();
  }
}
