var originalText = "i love my country Pakistan.<br>i like my city Faisalabad.<br>i love my Homeland."
var cities = ['Faisalabad','Lahore','Karachi','Burewala','Sheikhupura','Kashmir'];

function lowerCase(){
    let  lowerCaseText = originalText.toLowerCase();
    document.getElementById("output").innerHTML = lowerCaseText;
}
function upperCase(){
    let  upperCaseText = originalText.toUpperCase();
    document.getElementById("output").innerHTML = upperCaseText;
}


function capatalize() {
    let capatalizeText = '<span style ="text-transform: capitalize;">'+ originalText + '</span>';
    document.getElementById("output").innerHTML = capatalizeText;
    // document.getElementById("output").style.textTransform = "capitalize";

}
    function  betterFormatting() {
        let text = document.getElementById("input").value;
        if (!text) {
            alert("Please type text")
            return;
         }
         text = text.toLowerCase();
    document.getElementById("output").style.textTransform = "capitalize";
    document.getElementById("output").innerHTML = text; 

}
function printAllCities() {
    document.getElementById("output").innerHTML = "";
    for (let i = 0; i< cities.length; i++){
        let num = i+1;
    document.getElementById("output").innerHTML += num + ' )' + cities[i] + '<br>';

    } 


}
function addCity(){
    let city = document.getElementById("input").value;
    if (city.length < 3){
        alert("Enter correctly");
  return;
    } 
  let firstLetter = city.slice(0,1).toUpperCase();
  let allLetter = city.slice(1).toLowerCase();
  let cityWord = firstLetter + allLetter;
  console.log (cityWord);

  let cityFound = false;
  for (let i=0; i < cities.length; i++) {
      if (cities[i] === cityWord){
        cityFound = true;
        let html = '<span style = "color: red;font-size: 20px;">"' + cityWord + '"</span>Already exist in list.';
        document.getElementById("output").innerHTML = html;

      }

  }
  if (cityFound === false){

    cities.push(cityWord);
    let html = '<span style = "color: red;font-size: 20px;">"' + cityWord + '"</span>has been successfully added into list.&#128151;';
   document.getElementById("output").innerHTML = html;


  }


}

function checkCity(){
    let city = document.getElementById("input").value;
    if (city.length < 3){
        alert("Enter correctly");
  return;
    } 
  let firstLetter = city.slice(0,1).toUpperCase();
  let allLetter = city.slice(1).toLowerCase();
  let cityWord = firstLetter + allLetter;
  console.log (cityWord);

  let cityFound = false;
  for (let i=0; i < cities.length; i++) {
      if (cities[i] === cityWord){
        cityFound = true;
        let html = '<span style = "color: red;font-size: 20px;">"' + cityWord + '"</span>Already exist in list.';
        document.getElementById("output").innerHTML = html;

      }

  }
  if (cityFound === false){
    let html = '<span style = "color: red;font-size: 20px;">"' + cityWord + '"</span>Sorry &#128524;"' + cityWord + '"not found in list.';
   document.getElementById("output").innerHTML = html;
}
}
function findWord(){
    let newOriginalText = originalText.toLowerCase();
    let word = document.getElementById("input").value;
    if (!word){
        alert("Please type word");
        return;

    }
    word = word.toLowerCase();
    let findWord = newOriginalText.indexOf(word);
    if (findWord !== -1){
        let html = '<span style = "color: red;font-size: 20px;">Your word"' + word + '"</span>found in list at"' + findWord + '"';
   document.getElementById("output").innerHTML = html;


    }
    else {
        let html = '<span style = "color: red;font-size: 20px;">Sorry your word"' + word + '"</span>not found in list.';
   document.getElementById("output").innerHTML = html;

    }
}

function replaceWord() {
    let newOriginalText = originalText.toLowerCase();
    let word = document.getElementById("input").value;
    if (!word){
        alert("Please type word");
        return;

    }
    let replaceWith = prompt('Enter a word that you want replace');
    replaceWith.toLowerCase();
    if (!replaceWith){
        alert("Please type word");
        return;
          

    }
    word.toLowerCase();
    word = new RegExp (word,'g');
    replaceWith.toLowerCase();
    let replaceWord = newOriginalText.replace(word,replaceWith);
    document.getElementById("output").innerHTML = replaceWord;





}







document.getElementById("clearOutput").onclick = function () {
    document.getElementById("output").innerHTML = "";
}
document.getElementById("clear").onclick = function () {
    document.getElementById("input").innerHTML = "";
}