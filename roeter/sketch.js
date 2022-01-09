let devOps;

function preload() {
  img = loadImage("devOps.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  devOps = new DevOps();
}

function draw() {
  background("#bcbcbc");
  devOps.move();
  devOps.edge();
  devOps.show();
}

class DevOps {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.r = 20;
    this.dirx = 2;
    this.diry = 2;
    this.width = 233;
    this.height = 131;
  }
  move() {
    this.x += this.dirx;
    this.y += this.diry;
  }

  edge() {
    if (this.x < 0 || this.x > width - this.width) {
      this.dirx = -this.dirx;
    } else if (this.y < 0 || this.y > height - this.height) {
      this.diry = -this.diry;
    }
  }

  show() {
    fill(255);
    image(img, this.x, this.y, this.width, this.height);
  }
}
