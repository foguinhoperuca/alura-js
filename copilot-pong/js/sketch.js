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
    }

    drawn() {
        fill(color(0, 255, 0));
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}

let ball;

function setup() {
    createCanvas(800, 400);
    ball = new Ball();
}

function draw() {
    background(color(0, 0, 0));
    ball.update();
    ball.drawn();
}

console.log('test init ball here');
console.log(ball);