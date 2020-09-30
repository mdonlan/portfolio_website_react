
// this particle system is from https://github.com/mdonlan/canvas-particles
// I have slightly adapted it for this website
// I striped out any calls to UI elements from the original
// b/c those were dev options and not needed

// global data
let particles = [];
let canvas = null;
let ctx = null;
let canvasHeight = null;
let canvasWidth = null;
let totalFrames = 0;
let particleSpeed = 2;
let oldParticleSpeed = null;
let startTime = null;
let connectionDistance = 200;
let oldConnectionDistance = null;
let numParticles = 50;
let oldNumParticles = null;
let mousePos = null;
let mouseRadius = 200;
let maxConnections = 3;
let oldMaxConnections = null;
let frameInterval = 2;
let moveSpeedInRadius = 30;

function createParticle() {
  let x = Math.floor(Math.random() * canvasWidth) + 1;
  let y = Math.floor(Math.random() * canvasHeight) + 1;
  // velocity is between 1 and -1
  let velX = ((Math.floor(Math.random() * 10) + 2) / 50);
  let velY = ((Math.floor(Math.random() * 10) + 2) / 50);

  let xIsPositive = Math.random() >= 0.5;
  let yIsPositive = Math.random() >= 0.5;

  if(xIsPositive) {
    velX = velX * -1;
  }

  if(yIsPositive) {
    velY = velY * -1;
  }

  // set rand color
  let color = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  //let color = "#dddddd";
  // set rand size
  let radius = Math.floor(Math.random() * 3) + 1;

  let point = {
    x: x,
    y: y,
    velX: velX,
    velY: velY,
    color: color,
    radius: radius,
    inMouseRadius: false,
    numConnections: 0,
    moveOutOfRadiusDir: null,
  }
  
  particles.push(point);
};

function movePoint(point) {

  if(point.inMouseRadius) {
    // if the point is inside the mouse radius then accelerate 
    // its movement speed to get it out of radius
    //point.x += point.velX * particleSpeed * 3;
    //point.y += point.velY * particleSpeed * 3;

    if(point.moveOutOfRadiusDir === 'left') {
      point.x -= moveSpeedInRadius;
    } else if(point.moveOutOfRadiusDir === 'right') {
      point.x += moveSpeedInRadius;
    } else if(point.moveOutOfRadiusDir === 'up') {
      point.y -= moveSpeedInRadius;
    } else if(point.moveOutOfRadiusDir === 'down') {
      point.y += moveSpeedInRadius;
    }
    
  } else {
    // if point is outside mouse radius move at normal speed
    point.x += point.velX * particleSpeed;
    point.y += point.velY * particleSpeed;
  }

  // check if new location will be inside canvas
  checkIfValidPosition(point)
};

function checkIfValidPosition(point) {
  // if new location is not valid, ie against or pass a border
  // then revese the velocity of that axis
  // this gives the visual of it bouncing off the wall
  if(point.x - point.radius <= 0 || point.x + point.radius >= canvas.width) {
    point.velX = -point.velX;
  }

  if(point.y - point.radius <= 0 || point.y + point.radius >= canvas.height) {
    point.velY = -point.velY;
  }
};

function drawPoint(point) {
  
  ctx.arc(point.x, point.y, point.radius, 0, 2*Math.PI);
  ctx.fillStyle = point.color;
  ctx.strokeStyle = point.color;

};

function update() {
  totalFrames++;

  if(startTime === null) {
    // if no start time create one
    startTime = Date.now();
  }

  // clear canvas of all previous particles
  // only clear every x frames
  if(totalFrames % frameInterval === 0){
    // every 2 frames
    clear();
  }

  for(var i = 0; i < particles.length; i++) {
    // run for each point
     
    let closeToMouse = checkDistToMouse(particles[i]);

    if(closeToMouse) {
      moveAwayFromMouse(particles[i]);
    } else {
      
    }

    movePoint(particles[i]);
    
    // begin point draw path
    // we set all the line positions and then draw at end for efficiency
    ctx.beginPath();
    drawPoint(particles[i]);
    // end path and draw the lines and fill
    ctx.fill();
    ctx.stroke();
    //ctx.closePath();

    // only draw connections every x frames
    // must keep this value in line w/ clear or else it will stutter
    if(totalFrames % frameInterval === 0){
      // every 2 frames
      findConnections(particles[i], i);
    }
  }

  updateUI();

  window.requestAnimationFrame(update);
};

function moveAwayFromMouse(particle) {
  // particle is too close to the mousePos
  // change particle direction to 'bounce' off mouse radius

  if(mousePos.x > particle.x) {
    // mouse is to right of particle, need to move particle left to move away from mouse

    // move left
    particle.moveOutOfRadiusDir = 'left';

    // if particle is close to mouse on its right side and its velocity is still moving it right
    // then flip its horizontal velocity
    if(particle.velX >= 0) {
      particle.velX = -particle.velX;
    }
  } else {
    // need to move right
    particle.moveOutOfRadiusDir = 'right';

    if(particle.velX <= 0) {
      particle.velX = -particle.velX;
    }
  }

  if(mousePos.y > particle.y) {
    // need to move up
    particle.moveOutOfRadiusDir = 'up';

    if(particle.velY >= 0) {
      particle.velY = -particle.velY;
    }
  } else {
    // need to move down
    particle.moveOutOfRadiusDir = 'down';

    if(particle.velY <= 0) {
      particle.velY = -particle.velY;
    }
  }

  // check if valid position

};

function checkDistToMouse(particle) {
  // check how far point is from mouse and if too close then move away from mouse
  if(mousePos) {
    let distance = Math.hypot(mousePos.x - particle.x, mousePos.y - particle.y);
    if(distance < mouseRadius) {
      particle.inMouseRadius = true;
      return true
    } else {

      // if not in mouseRadius check if close to hitting and set it to change dir
      if(distance + 10 < mouseRadius) {

      }

      particle.inMouseRadius = false;
      return false
    }
  } else {
    particle.inMouseRadius = false;
    return false
  }
};


function updateUI() {
  // runs in update, detects and changes to 
  // data that is in UI and updates

  // particle speed
  if(oldParticleSpeed !== particleSpeed) {
    // if particle speed setting has changed
    //particleSpeedElem.innerHTML = particleSpeed;
    oldParticleSpeed = particleSpeed;
    console.log('updating particle speed');
  }

  // connection distance
  if(oldConnectionDistance !== connectionDistance) {
    // if particle speed setting has changed
    //connectionDistanceElem.innerHTML = connectionDistance;
    oldConnectionDistance = connectionDistance;
    console.log('updating connection distance speed');
  }

  // number of particles
  if(oldNumParticles !== numParticles) {
    // if particle speed setting has changed
    //numParticlesElem.innerHTML = numParticles;
    oldNumParticles = numParticles;
    console.log('updating number of particles');
  }

  // max connections
  if(oldMaxConnections !== maxConnections) {
    // if particle speed setting has changed
    //maxConnectionsElem.innerHTML = maxConnections;
    oldMaxConnections = maxConnections;
    console.log('updating number of max connections');
  }
};

function start() {
  for(var i = 0; i < numParticles; i++) {
    createParticle();
  }
  
  // start the loop
  window.requestAnimationFrame(update);
};

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

function findConnections(point, index) {
  // pass the i / index from calling function
  // then set this counter to start at that point
  // this will cause current point to only check points larger than it
  // which reduces unnessesary checks b/c lower points
  // have already been checked against this point

  // reset num connections each frame
  point.numConnections = 0;

  for(let i = index; i < particles.length; i++) {
    if(particles[i] !== point) {
      let distance = Math.hypot(point.x - particles[i].x, point.y - particles[i].y);
      if(distance < connectionDistance && point.numConnections < maxConnections) {
        drawLine(point, particles[i]);
        point.numConnections = point.numConnections + 1;
      }
    }
  }
};

function drawLine(point1, point2) {
  // linear gradient from start to end of line
  var gradient = ctx.createLinearGradient(point1.x, point1.y, point2.x, point2.y);
  gradient.addColorStop(0, point1.color);
  gradient.addColorStop(1, point2.color);
  ctx.strokeStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(point1.x, point1.y);
  ctx.lineTo(point2.x, point2.y);
  ctx.stroke();
  ctx.closePath();
};

window.onload = function() {
  console.log('testing123')

  canvas = document.querySelector(".canvas");
  console.log(canvas)
  // set canvas to full window size
  canvas.width = window.innerWidth - 20;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d');
  canvasHeight = canvas.height;
  canvasWidth = canvas.width;

  //document.querySelector(".header").addEventListener("click", moveControlPanel);
  //document.querySelector("body").addEventListener("mousemove", movedMouse);
  //document.querySelector("body").addEventListener("mouseup", mouseUp);
  //document.querySelector("body").addEventListener("mousedown", mouseDown);

  start();
}
