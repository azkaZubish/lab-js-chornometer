
const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());

  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0]
  secUniElement.innerText = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const li = document.createElement('li')
  li.innerText = chronometer.split()

  splitsElement.appendChild(li)
}

function clearSplits() {
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  chronometer.stop()
}

function setSplitBtn() {
  printSplit()
}

function setStartBtn() {
  chronometer.start(printTime)
}

function setResetBtn() {
  chronometer.reset()
  clearSplits()
  printTime()
}

let isRunning = false;
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
   if (!isRunning) {
    setStartBtn();
    isRunning = true;
  } else {
    setStopBtn();
    isRunning = false;
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(isRunning){
    setSplitBtn()
  }else {
    setResetBtn()
  }
});
