
var userChoice = prompt("press F to go foward, press B to go backward, press L to go left, press R to go right, press N,S,E,W to choose a direction" )

var marsRover = {
  position: [0,0],
  direction: 'N'
}

for(var i=0; i<userChoice.length; i++){
  if (userChoice[i] === "F"){
    goForward(marsRover)
    }
   else if (userChoice[i] === "B") {
  goBackward(marsRover);
   }
   else if (userChoice[i] === "R") {
  turnRight(marsRover)
   }
   else if (userChoice[i] === "L") {
  turnLeft(marsRover)
   }
   else {
     console.log ("Try it again")
   }
}


function detectobstacle(marsRover){
  if ( marsRover.position[0] === 2 && marsRover.position[1] === 7){
    userChoice.length = 0
  }
}
detectobstacle(marsRover)


function goForward(marsRover) {
  if (detectobstacle(marsRover) === true){
    console.log("stop")
}else{
  switch(marsRover.direction) {
    case 'N':
    if (marsRover.position[0]>8) {
      marsRover.position[0]=0;
                  break;
              } else {
                  marsRover.position[0]++;
                  break;
              }
    break;
    case 'E':
    if (marsRover.position[1]>8) {
      marsRover.position[1]=0;
                  break;
              } else {
                  marsRover.position[1]++;
                  break;
              }
    break;
    case 'S':
    if (marsRover.position[0]<1) {
      marsRover.position[0]=9;
                  break;
              } else {
                  marsRover.position[0]--;
                  break;
              }
      break;
    case 'W':
    if (marsRover.position[1]<1) {
      marsRover.position[1]=9;
                  break;
              } else {
                  marsRover.position[1]--
                  break;
              }
      break;
  }
}console.log(marsRover.position)
}

function goBackward(marsRover) {
  switch(marsRover.direction) {
    case 'N':
    if (marsRover.position[0]<1) {
      marsRover.position[0]=9;
                  break;
              } else {
                  marsRover.position[0]--;
                  break;
              }
      break;
    case 'E':
    if (marsRover.position[1]<1) {
      marsRover.position[1]=9;
                  break;
              } else {
                  marsRover.position[1]--
                  break;
              }
      break;
    case 'S':
    if (marsRover.position[0]>8) {
      marsRover.position[0]=0;
                  break;
              } else {
                  marsRover.position[0]++;
                  break;
              }
    break;
    case 'W':
    if (marsRover.position[1]>8) {
      marsRover.position[1]=0;
                  break;
              } else {
                  marsRover.position[1]++;
                  break;
              }
    break;
  }
console.log(marsRover.position)
}


function turnLeft(marsRover) {
  switch(marsRover.direction) {
    case 'N':
      marsRover.direction='W'
      break;
    case 'E':
      marsRover.direction='N'
      break;
    case 'S':
      marsRover.direction='E'
      break;
    case 'W':
      marsRover.direction='S'
      break;
  }
console.log(marsRover.direction)
}


function turnRight(marsRover) {
  switch(marsRover.direction) {
    case 'N':
      marsRover.direction='E'
      break;
    case 'E':
      marsRover.direction='S'
      break;
    case 'S':
      marsRover.direction='W'
      break;
    case 'W':
      marsRover.direction='N'
      break;
  }
console.log(marsRover.direction)
}
