/* source: https://www.youtube.com/@TheCodingTrain
Most of the code were generally inspired also from a youtube channel called 'The Coding Train'.
*/

/* source: https://editor.p5js.org/son/sketches/SkJJxG2Cm
The 'flowers' by son formed the template of my assignment and usage. I modified the number of arrays, variable names, added mouse pressed, for loop and created a class to adapt my design for flowers to move or have a transition. 
*/
//Declare a new variable called groundGrassColor for the color of the grass
let groundGrassColor;
//Declare a new variable called moonMainColor for the main color of the moon
let moonMainColor;
//Declare a new variable called moonShinyEffect for the first layer of shiny effect for the moon
let moonShinyEffect;
//Declare a new variable called moonShinyEffect2 for the second layer of shiny effect for the moon
let moonShinyEffect2;
//Declare a new variable called moonGlowEffect for the glow effect for the moon
let moonGlowEffect;
//Declare an array called flowers and it should start empty
let flowers =[];
//Declare the y coordinates of the grass or ground level
let groundGrassLevel;
//Declare and initialise the number variable which will be used for the speed for reversing the flower growth
let reverseSpeed = 0.55;

/* source: https://openprocessing.org/sketch/2248686
The 'Fireflies and Mountains' by Xwj formed the template of my assignment and usage. I was inspired by this sketches for my mountain to make it looks like it moving so I modified the varaiable names, added a variable name and using the for loop to adapt my design for the mountain as I wanted to showcase only one mountain in the back. 
*/
//Declare a new variable called mountain to draw the mountain
let mountain;
//Declare a new variable to hold the ladybug object
let ladyBug;
/* source: https://openprocessing.org/sketch/806793
The 'Shooting Stars' by Tami Yousafi formed the template of my assignment and usage. I modified the variable names, for loop, added mouse pressed and created a class to adapt my design for shooting stars. 
*/
//Declare a new variables for the center coordinates of the canvas
let centerX; 
let centerY;
//Declare an array called shootingStars and it should start empty
let shootingStars = [];
//Declare a new variable called backgroundMusic for the music in the background
let backgroundMusic;

/* source: https://openprocessing.org/sketch/2277722 
The 'Particles in Flow Field' by April formed the template of my assignment and usage. I modified the number of arrays, variable names, for loop and created a class to adapt my design for particles. I also added a function called setGradient for the background color to showcase nightime from the top which is dark blue to the bottom which is light blue. 
*/
//Declare and initialise the number particles for the background
let numOfParticles = 200;
//Declare an array called particles and it should start empty
let particles = [];
//Declare and initialise the number variable which will be used for the radius of each particles
let particleRadius = 3;
//Declare and initialise the number variable for the scale of the noise for particle movement
let noiseScale = 250;
//Declare and initialise the number variable for the strength of noise effect of particle movement
let noiseStrength = 2;
//Declare and initialise the last recorded X position of the mouse
let lastMouseX = -1;
//Declare and initialise the last recorded y position of the mouse
let lastMouseY = -1;

//function to handle the loading external files before the program starts
function preload(){
  //Initialise the music by loading the sound file
  backgroundMusic = loadSound('assets/Lukrembo - Night.mp3')
}

function setup() {
  //Create a canvas that fits within the width available and height available
  createCanvas(windowWidth, windowHeight);
  //Start playing the background music
  backgroundMusic.play();
  //Set the volume of the music to be half
  backgroundMusic.setVolume(0.5);
  //Initialise the ladybug at the center of the canvas with a size of 25
  ladyBug = new LadyBug(width/2, height/2, 25);
  // set the grass or ground color to dark green 
  groundGrassColor = color(1, 64, 12);
  // set the moon main color to light yellow
  moonMainColor = color(252, 252, 194);
  // set the moon first layer shiny effect to light yellow and more trasparent ellipse
  moonShinyEffect = color(252, 252, 194,150);
  // set the moon second layer shiny effect to light yellow and even more trasparent ellipse
  moonShinyEffect2 = color(252, 252, 194, 100);
  // set the moon glow effect to light yellow and very transparent yellow
  moonGlowEffect = color(252, 252, 194, 50);
  //Initialise the vertical position of the grass or ground at the bottom of the canvas 
  groundGrassLevel = height - 65;
  
  //Initialise the variable called mountain generate a random number bwtween height * 0.5 and height - 100 
  mountain = random(height * 0.5, height-100);
  // Assigns the value of half of the window width to the variable called centerX
  centerX = windowWidth/2;
  // Assigns the value of half of the window height to the variable called centerY
  centerY = windowHeight/2;
  // removes the outline for our object
  noStroke();
  
  //Loop through the number of particles
  for(let i = 0; i<numOfParticles; i++){
    // Set a new instance of particle and adds it to the particles array
    particles.push(new Particle(random(width), random(height), random(0.20, 0.35)));
    }
  }

function draw(){
  // Recall the function and set the nightime background color using a gradient color from dark blue to light blue 
  setGradient(0, 0, width, height, color(0, 0, 20), color(0, 102, 255));
  //Loop through all particles and update each one
  for(let i = 0; i<particles.length; i++){
    //Declare a variable called particle and assign the current particle object at index i in the particles array
    let particle = particles[i];
    //Saves the current assigned particle object
    particle.run();
  }
  
  //Recall the function and draw the mountain shape
  drawMountain(mountain);
  //Call the display method to draw the ladybug
  ladyBug.display();
  //Call the move method to move the ladybug if the mouse is within the canvas
  ladyBug.move(mouseInCanvas());
  
  // set the fill color of the moon main color that has been set
  fill(moonMainColor);
  // removes the outline for the moon main color
  noStroke();
  //Create a ellipse based on the location of the x coordinate, y coordinate, width and height for the main moon
  ellipse(110, 110, 110, 110);
  
  // set the fill color of the moon shiny effect color that has been set
  fill(moonShinyEffect);
  // removes the outline for the moon first layer of shiny effect
  noStroke();
  //Create a slightly larger ellipse based on the location of the x coordinate, y coordinate, width and height for the first layer of shiny effect
  ellipse(110, 110, 130, 130);
  
  // set the fill color the second moon shiny effect color that has been set
  fill(moonShinyEffect2);
  // removes the outline for the moon second layer of shiny effect
  noStroke();
  //Create a larger ellipse based on the location of the x coordinate, y coordinate, width and height for the second layer moon effect
  ellipse(110, 110, 150, 150);
  
  // set the fill color of the moon glow effect color that has been set
  fill(moonGlowEffect);
  // removes the outline for the moon glow effect
  noStroke();
  //Create a larger ellipse based on the location of the x coordinate, y coordinate, width and height for the moon glow effect
  ellipse(110, 110, 170, 170);
  
  // fill the color of the moon glow effect color that has been set
  fill(groundGrassColor);
  //Create a rectangle based on the location of the x coordinate, y coordinate that has been set which is height - 65, width and height of 70 for the grass or ground
  rect(0, groundGrassLevel, width, 65)

  //Loop through the all flowers 
  for(let i = 0; i<flowers.length; i++){
    // Call the display method to draw the flowers
    flowers[i].display();
    // Call the update method to update the flowers
    flowers[i].update();
  }
  
  //Assign the current x position of the mouse to the lastMouseX variable
  lastMouseX = mouseX;
  //Assign the current y position of the mouse to the lastMouseY variable
  lastMouseY = mouseY;
  
  //Loop through all shooting stars 
  for(let i = 0; i < shootingStars.length; i++){
    // Call the show function to display the shooting stars
    shootingStars[i].show();
    // Call the update function to update the shooting stars
    shootingStars[i].update();
    // Call the checkBounds to ensure that the current shooting stars remains within bound
    shootingStars[i].checkBounds()
  }
}

// function to draw the mountain
function drawMountain(position){
  //set the fill color of mountain to be dark blue that has
  fill(6, 12, 71);
  //begin adding vertices to a custom shape
  beginShape();
  //Declare the first vertex of the mountain at the bottom left corner of the canvas
  vertex(0, height);
  //Loop through the width of the canvas to define the top edge of the mountain
  for(let x = 0; x<=width; x += 6){
    //Calculate y position using the noise function to make it look like a natural mountain
    let y = noise((x + frameCount * 1) * 0.01) * 265 + height * 0.45;
    //Assign this vertex to the mountain shape 
    vertex(x, y);
  }
  //Declare the last vertex at the bottom-right corner of the canvas
  vertex(width, height);
  //Close the shape and connect the last vertex to the first vertex
  endShape(CLOSE);
}

//function to set gradient of the background
function setGradient(x, y, w, h, colour1, colour2){
  // removes the fill of the shapes
  noFill()
   //Loop through the height of the gradient of the background
  for(let i = y; i <= y + h; i++){
    //Map the current position within the gradient of the background to a value between 0 and 1
    let inter = map(i, y, y+h, 0, 1);
    // LerpColor = blends two colors to find a third color between them 
    //Calculate the color at the current position using linear interpolation between colour1 and colour2
    let colour = lerpColor(colour1, colour2, inter);
    //Initialise the stroke color to the calculated color
    stroke(colour);
    //Declare and initialise line at a current position with the calculate stroke color
    line(x, i, x+w, i);
  }
}

//function to check if the mouse is within the canvas
function mouseInCanvas(){
  // Check if the mouse is within the canvas boundaries
  return mouseY > 0 && mouseY < height && mouseX > 0 && mouseX < width;
}
//function to when mouse is pressed on the canvas
function mousePressed(){
  // If height/2 is greater than mouseY, it will create shooting stars
  if (height/2 > mouseY){
    shootingStars.push(new Star(mouseX, mouseY));
  // if others, initialise a variable to track if a flower is clicked
  } else{
    let flowerClicked = false;
    //Loop that iterates over the flowers array in reverse order
    for(let i = flowers.length - 1; i >= 0; i--){
      // if a flower is clicked, it will call reverse transition method to reverse the transition if a flower is clicked
      if(flowers[i].flowerIsClicked(mouseX, mouseY)){
        flowers[i].reverseTransition();
        //Assign true to flowerClicked
        flowerClicked = true;
        //Exit the loop because a flower is clicked
        break;
      }
    }
    // if the mouse is below the ground or grass level and no flower is clicked
    if (mouseY < groundGrassLevel && !flowerClicked){
      //Assign the current mouse X-coordinate to the flowerX
      let flowerX = mouseX;
      //Assign the groundGrassLevel as the y coordinate of the flower
      let flowerY = groundGrassLevel;
      // Initialise the stemHeight to 0
      let stemHeight = 0;
      //Declare and initialise a random petal color for the flowers
      let petalFlowerColor = color(random(255), random(255), random(255), 245);
      //Declare the growthDuration as random value within 3000 to 3000 milliseconds
      let growthDuration = random(3000, 3000);
      
      //null is a value that represents the absence of a value or an empty value
      //Initialize the variable called clickedFlowerInTransition to track if a growing flower is near the mouse
      let clickedFlowerInTransition = null;
      //Loop that check each flower to see if it is near the mouse and still growing
      for(let i = flowers.length - 1; i >=0; i--){
        // if a growing flower is near the mouse and if it is still growing
        if(flowers[i].flowerIsNear(mouseX, mouseY)&&flowers[i].flowerIsGrowing()){
          //Assign the growing flower to clickedFlowerInTransition
          clickedFlowerInTransition = flowers[i];
          //Exit the loop because a growing flower is found
          break;
        }
      }
      // !== means that strict inequality
      // if a growing flower is found near the mouse, it will reverse its transition
      if (clickedFlowerInTransition !== null){
        //call the reverse transition method to reverse its transition
        clickedFlowerInTransition.reverseTransition();
        // if no growing flower is found is near the mouse, it will then create a new flower
      } else {
        let newFlower = new Flower(flowerX, flowerY, stemHeight, petalFlowerColor, growthDuration, groundGrassLevel);
        // Assign a new flower to the flowers array
        flowers.push(newFlower);
      }
    }
  }
}
// Define the star class to represent a shooting star with a position, trail and movement behavior of the star
class Star{
  // Constructor helps to create an xPos, yPos, size, outline size and colour for the object based on the value given
  // Initialises a new Star object with the given x and y coordinates
  constructor(x, y){
    //Assigns the x coordinates of the star
    this.X = x;
    //Assigns the y coordinates of the star
    this.Y = y;
    //Assigns the size of the star
    this.size = 9;
    //Assigns the horizontal movement speed of the star
    this.dirX = 5;
    //Assigns the frequency of the sine wave movement and it converts the frequency from degrees to radians since by default the angle mode is set to be radians
    this.frequency = radians(0,1);
    //Assigns the amplitude of the sine wave movement
    this.amplitude = -30;
    //Assigns the sine value of the star
    this.sinValueStar = 0;
    //Initialises an empty array to store the trail of the star
    this.trail = [];
    //Assigns the maximum length of the star's trail
    this.trailLength = 50;
  }
  //This method is used to display the star and its trail
  show(){
    ///Loop that iterates over the trail array to access each position
    for(let i = 0; i < this.trail.length; i++){
      //map the loop index based on position in the trail
      let alpha = map(i, 0, this.trail.length, 0, 255);
      //Assign the current position object from the trail array to the variable pos
      let position = this.trail[i];
      //set the fill color of the star's trail with transperancy
      fill(255, alpha);
      //Draws an ellipse at each point of the trail
      ellipse(position.x, position.y, this.size, this.size);
    }
      //Sets the fill color of the star
      fill(255);
      //Draws the star at its current position
      ellipse(this.X, this.sinValueStar, this.size, this.size);
  }
  //this method is used to update the position and trail of the star
  update(){
    //Updates the x-coordinate of the star based on its horizontal movement speed
    this.X += this.dirX;
    //Updates the vertical position of the star using a sine wave method
    this.sinValueStar = this.Y + this.amplitude*sin(this.frequency*this.X);
    
    //Declare a variable to represent the current position of the star which includes the current x-coordinate and y-coordinate of the star
    let currentPosition = {
      x: this.X, 
      y: this.sinValueStar
    };
    //adds the current position to the trail array
    this.trail.push(currentPosition);
    //if statement to check if the current length of the trail exceed the maximum trail length
    if(this.trail.length>this.trailLength){
      //removes the oldest position from the trail if the length of trail exceeds the maximum
      this.trail.shift();
    }
  }
  
  //this method is used to the check if the star is out of bounds and resets its trail and position if necessary
  checkBounds(){
    //if the star has moved on the right edge of the window, it resets its x coordinate to a random position off the left edge of the window and y coordinate to a random position within the top half of the window
    if (windowWidth + 10 < this.X){
      this.Y = random(windowHeight/2);
      this.X = random(-windowWidth, 0);
      //clear the trail array
      this.trail = [];
    }
  }
}

//define the flower class to represent flower properties for its position, stem height, growth and petal.
class Flower{
  //Initialise the flower's properties such as the x coordinates of the flower, y coordinate of the flower, initial stem height of the flower, color of the flower's petal, the growth duration for the flower to fully grow to its height and y coordinate of the grass level
  constructor(x, y, stemHeight, petalFlowerColor, growthDuration, groundGrassLevel){
    //Assign the x coordinate
    this.x = x;
    //Assign the y coordinate
    this.y = y;
    //Assign the initial stem height
    this.stemHeight = stemHeight;
    //Assign a random target height for the flower
    this.targetHeight = random(50,210);
    //Assign the petal colors
    this.petalFlowerColor = petalFlowerColor;
    //Assign the growth duration
    this.growthDuration = growthDuration;
    //Assign the start time for the growth
    this.startTime = millis();
    //Assign the initial size of the petals to be random
    this.initialPetalSize = random(10, 20);
    //Initialise the reverse growth to be false
    this.reverse = false;
  }
  
  //this method is to update the flower's growth or shrink
  update(){
    // if the flower is not in reverse mode, it will call the grow method to handle the growth of the flower
    if(!this.reverse){
      this.grow();
    // if others, it call the shrink method to handle the shrinkage of the flower
    } else{
      this.shrink();
    }
  }
  
  //this method is to handle the flower's growth or shrinking animation
  grow(){
    //Calculate the elapsed time since shrinking started
    let elapsedTime = millis() - this.startTime;
    //if this.growthDuration is greater than elapsedTime
    if (elapsedTime < this.growthDuration){
      //Calculate the growth percentage
      let growthPercentage = map(elapsedTime, 0, this.growthDuration, 0, 1);
      //Update the stem height based on the growth percentage
      this.stemHeight = map(growthPercentage, 0, 1, 0, this.targetHeight);
      //if others, it set the stem height when growth is complete
    } else {
      this.stemHeight = this.targetHeight;
    }
  }
  // this method is used to handle the flower shrinking over time
  shrink(){
    //Calculate the elapsed time since shrinking started
    let elapsedTime = millis() - this.startTime;
    if (elapsedTime < this.growthDuration){
      //Calculate the shrink percentage
      let shrinkPercentage = map(elapsedTime, 0, this.growthDuration, 1, 0);
      //Update the stem height based on the shrink percentage
      this.stemHeight = map(shrinkPercentage, 0, 1, 0, this.targetHeight);
      //if others, set the height to 0 when shrinking as it reverse, find the index of this flower in the flowers array and remove the flower from the array if it exists
    } else {
      this.stemHeight = 0;
      let index = flowers.indexOf(this);
      if(index !== -1){
        flowers.splice(index,1);
      }
    } 
  }
  
  // this method is used to initiate the reverse transition process or shrinking
  reverseTransition(){
    // set the reverse to be true
    this.reverse = true;
    // reset the start time to the current time
    this.startTime = millis();
    // set the target height to the current stem height
    this.targetHeight = this.stemHeight;
  }
  
  //this method to display the flower on the canvas
  display(){
    //set the stroke color to be medium green for the stem
    stroke(0, 128, 0);
    //set the stroke weight for the stem
    strokeWeight(3);
    //draw the stem of the flower to be a line
    line(this.x, this.y, this.x, this.y - this.stemHeight);
    //removes the outline for the petals
    noStroke();
    
    //begins the drawing group
    push();  
    //Set the fill color for the petals
    fill(this.petalFlowerColor);
    //Move the origin to the top of the stem
    translate(this.x, this.y - this.stemHeight);
    //Assign the stem height based on the stem height
    let petalSize = map(this.stemHeight, 0, this.targetHeight, this.initialPetalSize, this.initialPetalSize*2);
    // Loop to draw 10 petals
    for (let i = 0; i<10; i++){
      //Draw each petal as an ellipse
      ellipse(0, 40, petalSize, petalSize*2);
      //rotate the origin for the next petal
      rotate(PI/5);
    }
    //ends the drawing group that contains its own styles and transformation
    pop();
  }
  
  //this method is to check if the flower was clicked 
  flowerIsClicked(mx, my){
    //Calculate the distance between the click and top of the stem
    let d = dist(mx, my, this.x, this.y - this.stemHeight);
    //return true if the click is within the flower's petal area
    return d < this.initialPetalSize * 1.5;
  }
  
  //the method is to check if the flower is still growing
  flowerIsGrowing(){
    //Return true if this.targetHeight is greater than this.stemHeight
    return this.stemHeight < this.targetHeight;
  }
  
  //this method is to check if the flower is near at a given point
  flowerIsNear(mx, my){
    // Calculate the distance between the point and the top of the stem
    let d = dist(mx, my, this.x, this.y - this.stemHeight);
    //return true if the point is within the certain value of petal size of the flower
    return d < this.initialPetalSize * 5;
  }
}

// define the LadyBug class to represent the object that can be displayed on the canvas and moved around based on the mouse position
class LadyBug{
  //Contructor to initialise the properties of LadyBug
  constructor(x, y, size){
     //Assign the x coordinate
    this.x = x;
     //Assign the y coordinate
    this.y = y;
     //Assign the size of the ladybug
    this.size = size;
  }
  //this method is to display the ladybug on the canvas
  display(){
    // set the fill color to red for the body
    fill(255, 0, 0);
    //removes the outline for the body
    noStroke();
    // draw an ellipse for the main body
    ellipse(this.x, this.y, this.size, this.size);
    
    //set the fill color to black for the head
    fill(0);
    //draw an ellipse for the body
    ellipse(this.x - this.size*0.75, this.y, this.size*0.6, this.size*0.6);
    
    //set the fill color to white for the eyes
    fill(255);
    //draw an ellipse for the left eye
    ellipse(this.x - this.size*0.75, this.y - this.size*0.2, this.size*0.25)
    //draw an ellipse for the right eye
    ellipse(this.x - this.size*0.75, this.y + this.size*0.2, this.size*0.25)
    
    //set the fill color to be black for the spots
    fill(0);
    // draw an ellipse for the left spot
    ellipse(this.x + this.size * 0.25, this.y - this.size*0.25, this.size*0.2, this.size*0.2);
    // draw an ellipse for the right spot
    ellipse(this.x - this.size * 0.25, this.y + this.size*0.25, this.size*0.2, this.size*0.2);
    
  }
  //method to move the ladybug based on the mouse position if the shouldMove is true
  move(shouldMove){
    //Check the condition if the ladybug should move
    if(shouldMove){
      //assign the x coordinate to the mouse's x position
      this.x = mouseX;
      //assign the y coordinate to the mouse's y position
      this.y = mouseY;
    }
  }
}

// define the particle class to represent the particle objects in the program, it is typically used in generative
class Particle{
  //constructor to initialise the particle's properties
  constructor(x, y, speed){
    // initialise the location as a vector
    this.loc = createVector(x,y);
    //Assign the speed
    this.speed = speed;
    //Initialise the angke with a random value
    this.angle = random(TWO_PI);
    // Initialise the brightness with a random value
    this.brightness = random(100, 255);
    //Initialise the brightness offset with a random value
    this.brightnessOffset = random(TWO_PI);
  }
  
  //method to run the particle's behavior
  run(){
    // call the update method
    this.update();
    //call the display method
    this.display();
    //call the followMouse method
    this.followMouse();
  }
  
  //method to run the Particle's properties
  update(){
    //Calculate the angleNoise
    let angleNoise = noise(this.loc.x/noiseScale, this.loc.y/noiseScale) * TWO_PI * noiseStrength;
    //Create a direction vector from the angle and noise
    let dir = p5.Vector.fromAngle(this.angle + angleNoise);
    //Multiply the direction by the speed
    dir.mult(this.speed);
    //Increment the location by the direction vector
    this.loc.add(dir);
    //Call the checkEdges method
    this.checkEdges();
    //Interpolate the brightness based on time
    this.brightness = 150 + 105 * sin(millis()/1000 + this.brightnessOffset);
  }
  // method to display the particle on the canvas
  display(){
    //removes the outline of the particles
    noStroke();
    // set the fill color to the brightness value
    fill(this.brightness);
    // draw an ellipse for the particles
    ellipse(this.loc.x, this.loc.y, particleRadius);
  }
  
  //method to make the particle follow the mouse
  followMouse(){
    //if dist(mouseX, mouseY, lastMouseX, lastMouseY) is greater than 1 to check if the mouse has moved
    if(dist(mouseX, mouseY, lastMouseX, lastMouseY)>1){
      //Declare and initilise the trail intensity based on the distance
      let trailIntensity = dist(mouseX, mouseY, this.loc.x, this.loc.y);
      // if statement to check if the particle is within the range
      if (trailIntensity < 100){
        //Create an attraction force towards the mouse
        let attractionForceMouse = createVector(mouseX - this.loc.x, mouseY - this.loc.y);
        //Set the magniture of the attraction force
        attractionForceMouse.setMag(this.speed*2/trailIntensity);
        //updates the position of the particle based on the attraction force towards the mouse
        this.loc.add(attractionForceMouse);
      }
    }
  }
  //method to check if the particle is out of bounds
  checkEdges(){
    //if the particle is out of the horizontal bounds, it will assign a random x coordinate within the width
    if(this.loc.x < 0 || this.loc.x > width){
       this.loc.x = random(width);
    }
    //if the particle is out of the vertical bounds, it will assign a random y cooridnate within the height
    if(this.loc.y < 0 || this.loc.y > width){
       this.loc.y = random(height);
    }
  }
}
