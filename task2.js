document.addEventListener("DOMContentLoaded", function() {
  const stringButton = document.getElementById("stringButton");
  const numberButton = document.getElementById("numberButton");
  
  const stringResult = document.getElementById("stringResult");
  const numberResult = document.getElementById("numberResult");
  
  stringButton.addEventListener("click", function() {
    const inputString = document.getElementById("inputString").value;
    const upperCaseString = inputString.toUpperCase();
    const lowerCaseString = inputString.toLowerCase();
    const firstCharacter = inputString.charAt(0);
    const slicedString = inputString.slice(0, 3);

    stringResult.innerHTML = `
      <p>Input: ${inputString}</p>
      <p>Uppercase: ${upperCaseString}</p>
      <p>Lowercase: ${lowerCaseString}</p>
      <p>First Character: ${firstCharacter}</p>
      <p>Sliced String: ${slicedString}</p>
      <p>Thank you for your cooperation ${inputString} :)</p>
    `;
  });
  // Array methods example

// Get references to elements
const arrayButton = document.getElementById("arrayButton");
const arrayInput = document.getElementById("arrayInput");
const arrayResult = document.getElementById("arrayResult");

// Event listener for the arrayButton
arrayButton.addEventListener("click", function() {
  const arrayInputValue = arrayInput.value;
  
  // Convert the input string into an array
  const array = arrayInputValue.split(",").map(item => item.trim());
  
  // Array methods demonstration
  const arrayLength = array.length;
  const isArrayEmpty = array.length === 0;
  const firstElement = array[0];
  const lastElement = array[arrayLength - 1];
  const joinedArray = array.join(" - ");
  const reversedArray = array.slice().reverse().join(" - ");

  arrayResult.innerHTML = `
    Array Length: ${arrayLength}<br>
    Is Array Empty: ${isArrayEmpty}<br>
    First Element: ${firstElement}<br>
    Last Element: ${lastElement}<br>
    Joined Array: ${joinedArray}<br>
    Reversed Array: ${reversedArray}
  `;
});
const calculateButton = document.getElementById("calculateButton");
    const birthdayInput = document.getElementById("birthday");
    const ageResult = document.getElementById("ageResult");
    const daysUntilNextBirthdayResult = document.getElementById("daysUntilNextBirthdayResult");

    calculateButton.addEventListener("click", function() {
      const birthday = new Date(birthdayInput.value);
      const today = new Date();
      

      const ageInMilliseconds = today - birthday;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
      const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
      const daysUntilNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

      ageResult.textContent = `Your are approximately ${ageInYears.toFixed(0)} years old.`;
      daysUntilNextBirthdayResult.textContent = `There are ${daysUntilNextBirthday} days until your next birthday.`;
      
    });


  numberButton.addEventListener("click", function() {
    const inputNumber = parseFloat(document.getElementById("inputNumber").value);
    const fixedNumber = inputNumber.toFixed(4);
    const exponentialNumber = inputNumber.toExponential(4);
    const isInteger = Number.isInteger(inputNumber);
    const squaredNumber = Math.pow(inputNumber, 2);
    const roundedNumber = Math.round(inputNumber);

    numberResult.innerHTML = `
      <p>Input Number: ${inputNumber}</p>
      <p>Fixed (4 decimal places): ${fixedNumber}</p>
      <p>Exponential: ${exponentialNumber}</p>
      <p>Is Integer? ${isInteger}</p>
      <p>Squared: ${squaredNumber}</p>
      <p>Rounded: ${roundedNumber}</p>
    `;
  });
});
