import { testPurses } from "./shortChangeTests.js";
/* 
    Write a function enoughChange
    
   //  Given an object representing a coin purse, and a price
   //      it should return true/false depending on whether 
   //      or not you have enough change to complete a 
   //      purchase at the given price
    
   //  The function should also update the "counters"
   //      such that they reflect the quantities in
   //      the test case
        
   //  You should then use this function to update the 
   //      purchaseConfirmation div to display whether
   //      or not you can afford the purchase with the
   //      coin quantities provided
        
    Finally, create nextCase and previousCase 
        buttons to cycle through the test cases 
    
    Refresh the mini-browser or save this file to
        load new test cases!
*/

const purchaseConfirmation = document.getElementById("purchase-confirmation");
const quarterCounter = document.getElementById("quarter-count");
const dimeCounter = document.getElementById("dime-count");
const nickelCounter = document.getElementById("nickel-count");
const pennyCounter = document.getElementById("penny-count");

let sampleTest = testPurses[0];

// Your code here 👇

let currentTest = 0;
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

purchaseConfirmation.innerText = enoughChange(sampleTest);

function enoughChange() {
  let { quarters, dimes, nickels, pennies, price } = sampleTest;
  let total = purseTotal(quarters, dimes, nickels, pennies);
  updateTotals(quarters, dimes, nickels, pennies);
  if (total >= price) {
    purchaseConfirmation.style.backgroundColor = "green";
    return `With $${total} in coins, you can afford this $${price} purchase`;
  } else {
    purchaseConfirmation.style.backgroundColor = "darkred";
    return `With $${total} in coins, you can't afford this $${price} purchase`;
  }
}

function updateTotals(quarters, dimes, nickels, pennies) {
  quarterCounter.innerText = `${quarters}`;
  dimeCounter.innerText = `${dimes}`;
  nickelCounter.innerText = `${nickels}`;
  pennyCounter.innerText = `${pennies}`;
}

function quarterTotal(count) {
  return count * 0.25;
}

function nickelTotal(count) {
  return count * 0.05;
}

function dimeTotal(count) {
  return count * 0.1;
}

function pennyTotal(count) {
  return count * 0.01;
}

function purseTotal(quarters, dimes, nickels, pennies) {
  return (
    Math.round(
      (quarterTotal(quarters) +
        nickelTotal(nickels) +
        dimeTotal(dimes) +
        pennyTotal(pennies)) *
        100
    ) / 100
  );
}

prevButton.addEventListener("click", () => {
  if (currentTest >= 1) {
    prevCase();
  }
});

nextButton.addEventListener("click", () => {
  if (currentTest <= testPurses.length - 2) {
    nextCase();
  }
});

function prevCase() {
  currentTest--;
  sampleTest = testPurses[currentTest];
  let { quarters, dimes, nickels, pennies, price } = sampleTest;
  updateTotals(quarters, dimes, nickels, pennies);
  purchaseConfirmation.innerText = enoughChange(price);
}
function nextCase() {
  currentTest++;
  sampleTest = testPurses[currentTest];
  let { quarters, dimes, nickels, pennies, price } = sampleTest;
  updateTotals(quarters, dimes, nickels, pennies);
  purchaseConfirmation.innerText = enoughChange(price);
}
