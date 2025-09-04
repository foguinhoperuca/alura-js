class Racket {
   constructor(x) {
        this.x = x;
        this.y = height / 2;
        this.w = 10;
        this.h = 60;

    }

    update(rate = 3) {
        if (this.x < width/2) {

            this.y = mouseY;
        } else {
            if (ball.y < this.y) {
                this.y -= rate;
            } else {
                this.y += rate;
            }
        }

        if (this.y < 0) {
                this.y = 0;
            }

            if (this.y > height - this.h) {
                this.y = height - this.h;
            }

    }

    draw() {
        fill(color(255, 255, 255));
        rect(this.x, this.y, this.w, this.h);
    }

}

class Ball {
    constructor() {
        this.r = 25;
        this.reset();
    }

    reset() {
        const maxSpeed = 10;
        this.x = width / 2;
        this.y = height / 2;
        this.vx = Math.random() * maxSpeed * 2 - maxSpeed;
        this.vy = Math.random() * maxSpeed * 2 - maxSpeed;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < this.r || this.x > width - this.r) {
            this.reset();
        }
        if (this.y < this.r || this.y > height - this.r) {
            this.vy *= -1;
        }

        if (collideOn(this.x, this.y, this.r, player01.x, player01.y, player01.w, player01.h)
         || collideOn(this.x, this.y, this.r, computer.x, computer.y, computer.w, computer.h)) {
            this.vx *= -1;
            this.vx *= 1.5;
            this.vy *= 1.5;
        }
    }

    draw() {
        fill(color(0, 255, 0));
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}

let ball;
let player01;
let computer;

function collideOn(cx, cy, radius, x, y, w, h) {
    if (cx + radius < x || cx - radius > x + w) {
        return false;
    }

    if (cx + radius < y || cy - radius > y + h) {
        return false;
    }

    return true;
}

function setup() {
    createCanvas(800, 400);
    ball = new Ball();
    player01 = new Racket(30);
    computer = new Racket(width - 30 - 10);
}

function draw() {
    background(color(0, 0, 0));
    ball.update();
    ball.draw();
    player01.update();
    player01.draw();
    computer.update(2);
    computer.draw();
}