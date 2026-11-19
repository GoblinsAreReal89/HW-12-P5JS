

function setup() {
    
    //Just getting some basics out of the way in setup
    createCanvas(800, 800);
    textAlign(CENTER,CENTER);
    imageMode(CENTER,CENTER)
}

function draw() {
    fill(220,100,250); //Background Color
    square(0,0,800); //Background fill

    textSize(80); //Text size
    fill(120,250,140); //Text color
    strokeWeight(4) //Text outline
    stroke(10)

    text("Glup Shitto",400,300);
    
}