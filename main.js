
/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*******************************************************************
 * Method-y Helper Functions Your Back-End Dev Has Written For You *
 ******************************************************************/


const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}




const getImagePathD6 = function(roll) {
  return `./images/d6/${roll}.png`
}

const getImagePathNumbers = function(roll) {
  return `./images/numbers/${roll}.png`
}


/******************
 * BUTTON QUERIES *
 ******************/


const d6Button = document.querySelector('#d6-roll');
const doubleD6Button1 = document.querySelector('#double-d6-roll-1');
const doubleD6Button2 = document.querySelector('#double-d6-roll-2');
const d12Button = document.querySelector('#d12-roll');
const d20Button = document.querySelector('#d20-roll');
const resetButton = document.querySelector('#reset-button');



/******************
 * CLICK HANDLERS *
 ******************/

const rollD6 = function() {
  const roll = getRandomNumber(6);
  sixes.push(roll);
  const median = getMedian(sixes);
  const mean = getMean(sixes);

  d6Button.src = getImagePathD6(roll);
  d6Mean.innerText = mean;
  d6Median.innerText = median;
}

const rollDoubleD6 = function() {
  const roll1 = getRandomNumber(6);
  const roll2 = getRandomNumber(6);
  doubleSixes.push(roll1 + roll2);
  const median = getMedian(doubleSixes);
  const mean = getMean(doubleSixes);

  doubleD6Button1.src = getImagePathD6(roll1);
  doubleD6Button2.src = getImagePathD6(roll2);
  doubleD6Mean.innerText = mean;
  doubleD6Median.innerText = median;
}

const rollD12 = function() {
  const roll = getRandomNumber(12);
  twelves.push(roll);
  const median = getMedian(twelves);
  const mean = getMean(twelves);

  d12Button.src = getImagePathNumbers(roll);
  d12Mean.innerText = mean;
  d12Median.innerText = median;
}

const rollD20 = function() {
  const roll = getRandomNumber(20);
  twenties.push(roll);
  const median = getMedian(twenties);
  const mean = getMean(twenties);

  d20Button.src = getImagePathNumbers(roll);
  d20Mean.innerText = mean;
  d20Median.innerText = median;
}

const resetAll = function() {
  sixes.splice(0)
  doubleSixes.splice(0)
  twelves.splice(0)
  twenties.splice(0)

  d6Button.src = './images/start/d6.png';
  doubleD6Button1.src = './images/start/d6.png';
  doubleD6Button2.src = './images/start/d6.png';
  d12Button.src = './images/start/d12.jpeg';
  d20Button.src = './images/start/d20.jpg';

  d6Mean.innerText = '';
  d6Median.innerText = '';
  doubleD6Mean.innerText = '';
  doubleD6Median.innerText = '';
  d12Mean.innerText = '';
  d12Median.innerText = '';
  d20Mean.innerText = '';
  d20Median.innerText = '';
}

/*******************
 * EVENT LISTENERS *
 *******************/

d6Button.addEventListener('click', rollD6);
doubleD6Button1.addEventListener('click', rollDoubleD6);
doubleD6Button2.addEventListener('click', rollDoubleD6);
d12Button.addEventListener('click', rollD12);
d20Button.addEventListener('click', rollD20);
resetButton.addEventListener('click', resetAll);


/****************
 * MATH SECTION *
 ****************/
function getMean(rolls) {
  let sum = 0;
  for (const roll of rolls) {
    sum += roll;
  }

  return (sum / rolls.length).toFixed(2);
}


function getMedian(rolls) {
  const sorted = sortByNumber(rolls);
  const midPoint = Math.floor(sorted.length / 2)
  if (sorted.length % 2 === 0) {
    return getMean([sorted[midPoint], sorted[midPoint - 1]]);
    // Or, the manual way:
    //return ((sorted[midPoint] + sorted[midPoint - 1]) / 2).toFixed(2);
  } else {
    return sorted[midPoint].toFixed(2);
  }
}

function getMode(rolls) {
   const counts = [];
   for (const roll of rolls) {
     let found = false;
     for (const count of counts) {
       if (count[0] === roll) {
         found = true;
         count[1]++;
       }
     }

     if (!found) {
       counts.push([roll, 1]);
     }
   }
   let mode = counts[0][0];
   let highest = counts[0][1];
   for (const count of counts) {
     const roll = count[0];
     const rollCount = count[1];
     if (rollCount > highest) {
       mode = roll;
       highest = rollCount;
     }
   }

   return mode;

  // One pass version
  // const counts = [];
  // let mode = rolls[0];
  // let highestCountSeen = 0;
  // for (const roll of rolls) {
    // let found = false;
    // for (const count of counts) {
      // if (count[0] === roll) {
        // count[1]++;
        // found = true;
        // if (count[1] > highestCountSeen) {
          // highestCountSeen = count[1];
          // mode = count[0];
        // }
      // }
    // }
// 
    // if (!found) {
      // counts.push([roll, 1]);
    // }
  // }
// 
  // return mode;
// }



/********************
* Math-Area Queries *
********************/

const d6Mean = document.querySelector('#d6-rolls-mean')
const d6Median = document.querySelector('#d6-rolls-median')
const doubleD6Mean = document.querySelector('#double-d6-rolls-mean')
const doubleD6Median = document.querySelector('#double-d6-rolls-median')
const d12Mean = document.querySelector('#d12-rolls-mean')
const d12Median = document.querySelector('#d12-rolls-median')
const d20Mean = document.querySelector('#d20-rolls-mean')
const d20Median = document.querySelector('#d20-rolls-median')
