var no_time_dies_through = 0;
var n = 100;
var currentPosition = 0;
var ladderMap = {
  7: 33,
  73: 85,
  51: 72,
};

var snakeMap = {
  36: 19,
  65: 35,
  87: 32,
};

 const diceHandler =   () =>{
  no_time_dies_through++;
  const diceValue = Math.ceil(Math.random() * 6);
  console.log("Your dice value >>>", diceValue);
  let newValue = changeCurrentPosition(diceValue);

  if (newValue === n) {
    console.log("###################### wow you win", newValue);
    console.log("No of time dice through",no_time_dies_through);
   return newValue
  } else {
  return  diceHandler();
  }
 
  
}

const changeCurrentPosition =  (diceValue) =>{
  let newcCurrentPosition = currentPosition + diceValue;
  let presentValue = 0;

  if (newcCurrentPosition <= n) {
    presentValue = newcCurrentPosition;
    currentPosition = newcCurrentPosition;
  } else {
    presentValue = currentPosition;
  }

  presentValue =  snakeAndLadder(presentValue)
  console.log("presentValue===", presentValue);
  currentPosition = presentValue;
  return presentValue;
}

function snakeAndLadder(position){
  if (snakeMap[position]) {
    console.log(
      `Opps! You're at ${position} and a snake has bitten you go back to ${snakeMap[position]}`
    );
    position = snakeMap[position];
  }
  if (ladderMap[position]) {
    console.log(
      `Yay! You're at ${position},you got a ladder go to ${ladderMap[position]}`
    );
    position = ladderMap[position];

  }
  return position
}


module.exports = diceHandler