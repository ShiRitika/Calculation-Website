"use strict";

//-------------Program to disable or enable a button using javascript--------------------
let input = document.querySelectorAll(".input");
let button = document.querySelectorAll(".button");

for (var i = 0; i < button.length; i++) {
  //for each button it must be disabled
  button[i].disabled = true;
}

input[0].addEventListener("keyup", swapHandle);
input[1].addEventListener("keyup", swapHandle);
input[2].addEventListener("keyup", frequencyHandle);
input[3].addEventListener("keyup", anagramHandle);
input[4].addEventListener("keyup", anagramHandle);
input[5].addEventListener("keyup", eopHandle);
input[6].addEventListener("keyup", sortingHandle);
input[7].addEventListener("keyup", searchingHandle);
input[8].addEventListener("keyup", searchHandle);

function swapHandle() {
  if (document.getElementById("fval").value === "") {
    button[0].disabled = true; //button remains disabled
  } else {
    button[0].disabled = false; //button is enabled
  }
}

function frequencyHandle() {
  if (document.getElementById("input_frequency").value === "") {
    button[1].disabled = true;
  } else {
    button[1].disabled = false;
  }
}

function anagramHandle() {
  if (document.getElementById("firstInput").value === "") {
    button[2].disabled = true; 
  } else {
    button[2].disabled = false; 
  }
}

function eopHandle() {
  if (document.getElementById("inputNumber").value === "") {
    button[3].disabled = true;
  } else {
    button[3].disabled = false; 
  }
}

function sortingHandle() {
  if (document.getElementById("sort_input").value === "") {
    button[4].disabled = true; 
  } else {
    button[4].disabled = false; 
  }
}

function searchingHandle() {
  if (document.getElementById("search_input").value === "") {
    button[5].disabled = true; 
  } else {
    button[5].disabled = false;
  }
}

function searchHandle() {
  if (document.getElementById("value_input").value === "") {
    button[6].disabled = true; 
  } else {
    button[6].disabled = false; 
  }
}

//-----------------------code for swapping-----------------------------------
const btnSwap = document.getElementById("btn1");
btnSwap.addEventListener("click", swapText); 
function swapText(event) {
  event.preventDefault();

  var first_value = document.getElementById("fval").value;
  var second_value = document.getElementById("sval").value;

  var temp; 
  temp = first_value;
  first_value = second_value;
  second_value = temp;

  //saving swap value again
  document.getElementById("fval").value = first_value;
  document.getElementById("sval").value = second_value;
  document.getElementById("invalid").innerHTML = "swapping done! :)";
}

//-------------------------code for Frequency--------------------------------------
const btnFrequency = document.getElementById("btn2");
btnFrequency.addEventListener("click", freqencyCount);
function freqencyCount(event) {
  event.preventDefault();

  var string_value = document.getElementById("input_frequency").value;
  const string_split = string_value.split(""); //converting string to array using split method

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

  let str_count = JSON.stringify(count); //converting obj to string to get display
  document.getElementById("invalid2").innerHTML = str_count;
}

// -----------------------code for Anagram----------------------------------
const btnAnagram = document.getElementById("btn3");
btnAnagram.addEventListener("click", checkAnagram);
function checkAnagram(event) {
  event.preventDefault();

  var string1 = document.getElementById("firstInput").value; 
  var string2 = document.getElementById("secondInput").value; 
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
    document.getElementById("output").innerHTML = "NO, it is not an Anagram! :("; 
  } else {
    document.getElementById("output").innerHTML = "YES, it is an Anagram! :)";
  }
}

// -----------------------code for finding Even , Odd & Prime----------------------------
const btnEOP = document.getElementById("btn4");
btnEOP.addEventListener("click", checkEOP);
function checkEOP(event) {
  event.preventDefault();

  var numbers = /^[0-9]+$/;
  var comma = /[_,]/;

  let stringInput = document.getElementById("inputNumber").value; 
  //validation to check input value should be a number
  if (stringInput.match(numbers)) {
    
    let array = stringInput.split(""); 
    validate(array);
  } else if (stringInput.match(comma)) {
    var array = stringInput.split(/[, ]+/);
    validate(array);
  } else {
    document.getElementById("even").innerHTML = "Please inter only numbers!**";
  }
  function validate(array) {
    var arr = ["Even:"];
    var arr2 = ["Odd:"];
    var arr3 = ["Prime:"];

    for (let i = 0; i < array.length; i++) {
      // code for checking even odd
      if (array[i] % 2 == 0) {
        arr.push(array[i]);
      } else if (array[i] % 2 != 0) {
        arr2.push(array[i]);
      }
    }

    for (let i = 0; i < array.length; i++) {
      // code for checking prime number
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
    document.getElementById("even").innerHTML = arr;
    document.getElementById("odd").innerHTML = arr2;
    document.getElementById("prime").innerHTML = arr3;
  }
}

//-----------------------code for Sorting starts-------------------------------------
const btnSorting = document.getElementById("btn5"); //get button for anagram
btnSorting.addEventListener("click", checkSorting);
function checkSorting(event) {
  event.preventDefault();
  var comma = /[_,]/;
  var numbers = /^[0-9]/;
  var string = /^[A-Za-z]/;

  let sort_Input = document.getElementById("sort_input").value; //get value from input box in form if string
  if (sort_Input.match(comma) && sort_Input.match(numbers)) { 
    var array = sort_Input.split(/[, ]+/);
    sortArrayWithCommaNum(array);
  
  } else if(sort_Input.match(comma) && sort_Input.match(string)){
    var array = sort_Input.split(/[, ]+/);
    sortArrayWithCommaStr(array);
  } else {
    var array = sort_Input.split("");
    sortArray(array); //convert string input in array
  }
    var sortedArray = array;

  document.getElementById("invalid7").innerHTML = `[ Sorted Array: ${sortedArray}]`;
}

function sortArrayWithCommaNum(array){
  array.sort(function(a, b){return a - b});//sort()
  return array;
}

function sortArrayWithCommaStr(array){
  array.sort();
  return array;
}
//sort array with for loop
function sortArray(array) {
  for (let i = 1; i < array.length; i++) {
    // for next value
    for (let j = 0; j < i; j++) {
      //for prev value
      if (array[i] < array[j]) {
        //comparison between next & prev value
        let x = array[i]; //concept to swap values
        array[i] = array[j];
        array[j] = x;
      }
    }
  }
  return array;
}
//-----------------------code for sorting end here-------------------------------

//-----------------------code for searching start-----------------------------
const btnSearching = document.getElementById("btn6"); //get button for search value
btnSearching.addEventListener("click", getValue);
function getValue(event) {
  event.preventDefault();

  let search_Input = document.getElementById("search_input").value; //get value from input box in form if string

  //validation to check input value should be a number
  breakme: if (isNaN(search_Input)) {
    document.getElementById("eror").innerHTML = "Please enter only numbers!**";
    break breakme;
  } else {
    var array = search_Input.split(""); //convert string input in array
    iteration(array);
  }
  // function iteration(array){
  //   let search_Value = document.getElementById("value_input").value;
  //   console.log(search_Value);
  //   if(array.includes(search_Value)){
  //     document.getElementById("output5").innerHTML = "Yes number is present!";
  //     document.getElementById("output1").innerHTML = `Value: ${search_Value}`;
  //   } else {
  //     document.getElementById("output5").innerHTML = "NOT Present";
  //   }
  // }
  function iteration(array) {
    let search_Value = document.getElementById("value_input").value;

    let flag = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === search_Value) {
        flag = 1;
        break;
      }
    }
    if (flag == 1) {
      document.getElementById("output5").innerHTML = "Yes number is present!";
      document.getElementById("output1").innerHTML = `Value: ${search_Value}`;
    } else {
      document.getElementById("output5").innerHTML = "NOT Present";
    }
  }

  const btn_getposition = document.getElementById("btn7");
  btn_getposition.addEventListener("click", getPosition);
  function getPosition(event) {
    let search_Value = document.getElementById("value_input").value;
    event.preventDefault();
    let search_Input = document.getElementById("search_input").value; //get value from input box in form if string
    let array = search_Input.split(""); //convert string input in array
    const new_Array = array;
    // let index = new_Array.indexOf(search_Value);
    // // document.getElementById("output2").innerHTML = index;
    // document.getElementById("output2").innerHTML = index + 1;

    //   for(let i = 0 ; i < obj.length ; i++){
    //     if(obj[i] === search_Value){
    //       let index = new_Array.indexOf(search_Value);
    //    document.getElementById("output2").innerHTML = index + 1;
    //   }
    // }

    //accessing object approach
    var obj = {};
    for (let i = 0; i < new_Array.length; ++i) {
      //for inserting array into object
      obj[i] = new_Array[i];
    }
    let new_obj = obj;

    //loop for iterating object
    for (const item in new_obj) {
      var key = Object.keys(new_obj)[item];
      if (new_obj[key] === search_Value) {
        let keyNew = parseInt(key);
        document.getElementById("output2").innerHTML = keyNew + 1;
      }
    }
  }
}
