let troutIMAGE;
let RandomText;
GlupShittoArray = Array;
troutWeightArray = Array;

Sizing = 0.3
Discoloration = 0.8
RandomFavFilm = "Chinatown"
troutMeasureWeight = 0 //This is the trout's weight in pounds


troutWeightArray = ["Microscopic","Shrimpy", "Small","Itty-Bitty","Run-of-the-mill", "Average","Standard",
    "Large", "Huuuuge","Massive","Ginormous","Catch-of-the-era"];
troutWeightValue = 10
troutHealthArray = ["On-Death's-Door",  "Jaundice-Ridden", "Mutated", "Feint","Malformed","Frail", "Sickly",  
     "Funny-looking", "Fair", "Healthy", "Lean", "Fit", "Athletic", "Picture-of-Health"];
troutHealthValue = 10
troutAgeArray = ["Larvae", "Fry", "Ongrower", "Rebel-Teen", "Sea-Grown", "Adult", "Arthritic", "Elder","Fossil"]
troutFavFilmArray = ["La-la-land","Battleship-Potemkin","Interstellar","Spirited-Away","Citizen-Kane","Psycho","Mulholland-drive","Sinners",
    "Heat","Casablanca","Gone-with-the-wind","Lonesome-dove","Once-upon-a-time-in-the-west","Pulp-fiction","The-godfather","Lawrence-of-Arabia",
    "The-shining","2001-A-space-odyssey","12-Angry-men","Bladerunner","The-Wizard-of-Oz",
]


async function setup() {
    rollDice();
    troutIMAGE = await loadImage('/assets/TROUT-PIC.png');

    //Just getting some basics out of the way in setup
    createCanvas(800, 800);
    textAlign(CENTER,CENTER);
    imageMode(CENTER,CENTER)
}

function draw() {
    fill(100,220,250); //Background Color
    square(0,0,800); //Background fill

    textSize(80); //Text size
    fill(250,190,140); //Text color
    strokeWeight(4) //Text outline
    stroke(10)

    text(RandomTextHealth,400,300);
    text(RandomTextWeight, 400, 400);
    text(troutMeasureWeight, 100, 400);
    text(RandomFavFilm,400,600)
    text("Trout", 400,500);
    
    stroke(0,0) //Reset stroke
    tint(255 * Discoloration, 210 * Discoloration, 30, 255) //Change trout color
    image(troutIMAGE, 400, 650,600 * Sizing,200 * Sizing); //Place trout image

}

function mousePressed(){
    rollDice()
}
 

function rollDice(){
    //This randomizes the printed text in the draw function each time the mouse is pressed
    troutHealthValue = round((random(0,13))); //Randomizing Health term
        Discoloration = troutHealthValue/12 + .2; //Adjusting trout color based on term
        RandomTextHealth = troutHealthArray[(troutHealthValue)]; //Moving the new health term to the text variable


    troutWeightValue = round((random(0,10))); // Randomizing weight term 
        Sizing = troutWeightValue/11 + .22; // Changing trout size based on weight term
        RandomTextWeight = troutWeightArray[(troutWeightValue)]; // Moving the new weight term to the text variable 
        troutMeasureWeight = 0.75 * (round(0.4 + (15 * Sizing)));  // Giving a number in pounds based on the sizing



        RandomFavFilm = random(troutFavFilmArray); //Randomizing the favorite film of the trout
}