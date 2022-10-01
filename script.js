"use strict";

//Program to disable or enable a button using javascript
let input = document.querySelectorAll(".input"); //selecting all input fields
let button = document.querySelectorAll(".button"); //selecting all buttons

for(var i = 0 ; i < button.length ; i++){ //for each button it must be disabled
  button[i].disabled = true; //setting button state to disabled
}

input[0].addEventListener("change", swapHandle);//for input field value
input[2].addEventListener("change",frequencyHandle);
input[3].addEventListener("change",anagramHandle);
input[5].addEventListener("change",eopHandle);

function swapHandle() {
    if (document.querySelector(".input").value === "") {
        button[0].disabled = true; //button remains disabled
    } else {
        button[0].disabled = false; //button is enabled
    }
}

function frequencyHandle() {
  if (document.querySelector(".input").value === "") {
      button[1].disabled = true; //button remains disabled
  } else {
      button[1].disabled = false; //button is enabled
  }
}

function anagramHandle() {
  if (document.querySelector(".input").value === "") {
      button[2].disabled = true; //button remains disabled
  } else {
      button[2].disabled = false; //button is enabled
  }
}

function eopHandle() {
  if (document.querySelector(".input").value === "") {
      button[3].disabled = true; //button remains disabled
  } else {
      button[3].disabled = false; //button is enabled
  }
}



//-----------------------code for swapping-----------------------------------
const btnSwap = document.getElementById("btn1"); //get button swap
btnSwap.addEventListener("click", swapText); //adding event listener
function swapText(event) {
  event.preventDefault(); //prevent submiting form

  var first_value = document.getElementById("fval").value;
  var second_value = document.getElementById("sval").value;

  var temp; //temporary third variable
  temp = first_value;
  first_value = second_value;
  second_value = temp;

  console.log(first_value);
  console.log(second_value);

  //saving swap value again
  document.getElementById("fval").value = first_value;
  document.getElementById("sval").value = second_value;
  document.getElementById("invalid").innerHTML = "swapping done! :)";
}

//-------------------------code for Frequency--------------------------------------
const btnFrequency = document.getElementById("btn2"); //get button for frequency
btnFrequency.addEventListener("click", freqencyCount); //adding event listener
function freqencyCount(event) {
  event.preventDefault();

  var string_value = document.getElementById("input").value;

  const string_split = string_value.split(""); //converting string to array using split method
  console.log(string_split);

  //we use forEach method to access each element in array and count it
  let count = {}; //here we init count by setting it as empty obj it will tell count of each element
  string_split.forEach((val, index) => {
    if (!count[val]) {
      //if element comes only first time
      count[val] = 1;
    } else {
      count[val] = count[val] + 1; //if element come more that one time count get increased by 1
    }
  });
  console.log(count);
  let str_count = JSON.stringify(count); //converting obj to string to get display
  console.log(str_count);

  document.getElementById("invalid2").innerHTML = str_count; //display obj on window
}

// -----------------------code for Anagram----------------------------------
const btnAnagram = document.getElementById("btn3"); //get button for anagram
btnAnagram.addEventListener("click", checkAnagram);
function checkAnagram(event) {
  event.preventDefault();

  var string1 = document.getElementById("firstInput").value; //get value from input box
  // console.log(string1);

  var string2 = document.getElementById("secondInput").value; //get another string(sorted of first string)
  // console.log(string2);
  const check_Anagram = isAnagram(string1, string2);

  function isAnagram(string1, string2) {
    if (string1.length !== string2.length) {
      //check the lengtrh of both strings equal or not
      return false; //return false if length is not equal
    }
    var counter = {}; //empty obj for frequency count of string1
    for (let letter of string1) {
      counter[letter] = (counter[letter] || 0) + 1; //if not set 0 it will give undefine
    }
    for (let items of string2) {
      //for each letter in string2
      if (!counter[items]) {
        //if any letter is not in privious counter obj return false
        return false;
      }
      counter[items] = counter[items] - 1; //otherwise conter item get minus to become undefined
    }
    return true;
  }
  if (check_Anagram === false) {
    document.getElementById("output").innerHTML =
      "NO, it is not an Anagram! :("; //display obj on window
    // console.log("NO, it is not an Anagram");
  } else {
    document.getElementById("output").innerHTML = "YES, it is an Anagram! :)";
    // console.log("YES, it is Anagram");
  }
}

// -----------------------code for finding Even , Odd & Prime----------------------------
const btnEOP = document.getElementById("btn4"); //get button for anagram
btnEOP.addEventListener("click", checkEOP);
function checkEOP(event) {
  event.preventDefault();

  let stringInput = document.getElementById("inputNumber").value; //get value from input box in form if string
  console.log(stringInput);
  //validation to check input value should be a number
  if(isNaN(stringInput)){
    document.getElementById("even").innerHTML ="Please inter only numbers!**"
  } else{
    
    let array = stringInput.split(""); //convert string input in array
  console.log(array);

  var arr = ["Even:"]; 
  var arr2 = ["Odd:"];
  var arr3 = ["Prime:"];

  for (let i = 0; i < array.length; i++) { // code for checking even odd
    if (array[i] % 2 == 0) {
      arr.push(array[i]);
    } else if (array[i] % 2 != 0) {
      arr2.push(array[i]);
    } 
  }

for (let i = 0; i < array.length ; i++) { // code for checking prime number
    let flag = 0;
    for (let j = 2; j < array[i]; j++) {
        if (array[i] % j == 0) {
            flag = 1;
            break;
        }
    }
     // if number greater than 1 and not divisible by other numbers
    if (array[i] > 1 && flag == 0) {
        arr3.push(array[i]);
    }
  }

  console.log(arr);
  console.log(arr2);
  console.log(arr3);

  document.getElementById('even').innerHTML = arr;
  document.getElementById('odd').innerHTML = arr2;
  document.getElementById('prime').innerHTML = arr3;
}
}