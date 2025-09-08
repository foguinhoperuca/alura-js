let ball;
let player01;
let computer;
let ballImage;
let playerImage;
let computerImage;
let backgroundImage;

function collideOn(cx, cy, collide_radius, x, y, w, h) {
    if (cx + collide_radius < x || cx - collide_radius > x + w) {
        return false;
    }

    if (cx + collide_radius < y || cy - collide_radius > y + h) {
        return false;
    }

    return true;
}

class Racket {
   constructor(x) {
        this.x = x;
        this.y = height / 2;
        this.w = 10;
        this.h = 60;

    }

    update(rate = 3) {
        if (this.x < width / 2) {
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
        // fill(color(255, 255, 255));
        // rect(this.x, this.y, this.w, this.h);
        if (this.x < width / 2) {
            image(playerImage, this.x, this.y, this.w, this.h);
        } else {
            image(computerImage, this.x, this.y, this.w, this.h);
        }
    }
}

class Ball {
    constructor() {
        this.r = 10;
        this.reset();
    }

    reset() {
        const maxSpeed = 5;
        this.x = width / 2;
        this.y = height / 2;
        this.vx = Math.random() * maxSpeed * 2 - maxSpeed;
        this.vy = Math.random() * maxSpeed * 2 - maxSpeed;
        this.angle = 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.angle += Math.sqrt(this.vx * this.vx + this.vy * this.vy) / 30;

        if (this.x < this.r || this.x > width - this.r) {
            this.reset();
        }
        if (this.y < this.r || this.y > height - this.r) {
            this.vy *= -1;
        }

        if (collideOn(this.x, this.y, this.r, player01.x, player01.y, player01.w, player01.h)
         || collideOn(this.x, this.y, this.r, computer.x, computer.y, computer.w, computer.h)) {
            this.vx *= -1;
            this.vx *= 1.1;
            this.vy *= 1.1;
        }
    }

    draw() {
        // fill(color(0, 255, 0));
        // ellipse(this.x, this.y, this.r * 2, this.r * 2);
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        image(ballImage, -this.r, -this.r, this.r * 2, this.r * 2);
        pop();
    }
}

function preload() {
    ballImage = loadImage('img/sprites/bola.png');
    playerImage = loadImage('img/sprites/barra01.png');
    computerImage = loadImage('img/sprites/barra02.png');
    backgroundImage = loadImage('img/sprites/fundo2.png');
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

    let canvasAspectRatio = width / height;
    let backgroundAspectRatio = backgroundImage.width / backgroundImage.height;
    let zoom = 1;
    if (canvasAspectRatio > backgroundAspectRatio) {
        zoom = width / backgroundImage.width;
    } else {
        zoom = height / backgroundImage.height;
    }
    let scaledWidth = backgroundImage.width * zoom;
    let scaledHeight = backgroundImage.height * zoom;
    image(backgroundImage, (width - scaledWidth) / 2, (height - scaledHeight) / 2, scaledWidth, scaledHeight);

    player01.update();
    player01.draw();
    computer.update();
    computer.draw();
}