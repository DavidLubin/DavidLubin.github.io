function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}
function draw() {
    background(255, 0, 0);
    for (var y = 0; y <= height; y += 40) {
        for (var x = 0; x <= width; x += 40) {
            fill(255, 150, 75);
            arc(x, y, 40, 40, 105, 255);
            arc(x, y, 40, 40, 285, 75);
        }
    }
    for (var y = 0; y <= height; y += 40) {
        line(0, y, 400, y)
    }
}