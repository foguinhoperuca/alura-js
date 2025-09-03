class Ball {
    constructor() {
        this.r = 25;
        this.reset();
    }

    reset() {
        this.x = width / 2;
        this.y = height / 2;
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
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

        // FIXME where to put it?!
        const collideOnX = this.x - this.r > player01.x && this.x - this.r < player01.x + player01.w;
        const collideOnY = this.y + this.r >= player01.y && this.y - this.r <= player01.y + player01.h;
        if (collideOnX && collideOnY) {
            this.vx *= -1;
        }
    }

    draw() {
        fill(color(0, 255, 0));
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}

class Racket {
   constructor() {
         this.x = 30;
             this.y = height / 2;
             this.w = 10;
             this.h = 60;

    }

    update() {
        this.y = mouseY;

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

let ball;

function setup() {
    createCanvas(800, 400);
    ball = new Ball();
    player01 = new Racket();
}

function draw() {
    background(color(0, 0, 0));
    ball.update();
    ball.draw();
    player01.update();
    player01.draw();
}

console.log('test init ball here');
console.log(ball);