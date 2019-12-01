
var btnarray = document.getElementsByClassName("colour-btn");
var incbtn = document.getElementById("increment");
var decbtn = document.getElementById("decrement");
// var activeObj.count = 0;
var agreebtn = document.getElementById("agree");
var cancelbtn = document.getElementById("cancel");
var add = document.getElementById("add");
var output1 = document.getElementById("Output1") .value;
var output2 = document.getElementById("Output2");
var activeObj;
// stores all colours
var colArray = [];

class colObj {
  constructor(name) {
    this.price = colourDict[name];
    this.name = name;
    this.count = 0;
  }
}

var colourDict = {
  "red": 16.99,
  "blue": 14.99,
  "green": 420.00,
  "yellow": 14.99,
  "brown": 14.99,
  "orange": 14.99,
  "white": 14.99,
  "pink": 14.99,
  "purple": 14.99,
  "black": 14.99,
  "grey": 14.99,
  "darkorchid": 14.99,
  "darkgoldenrod": 15.60,
  "fuchsia": 15.60,
  "orangered": 15.60,
  "maroon": 15.60,
  "greenyellow": 15.60,
  "salmon": 15.60,
}

function newAdd(){
  document.getElementById("Output2").value = colArray[0].name;
  activeObj = colArray[0];
}

add.onclick = function(event) {
  if(add.innerHTML === "Add to Cart" ){
    $("#addModal").modal('toggle');
    newAdd();
  }
  else {
    $("#checkoutModal").modal('toggle');
  }
}
 
function updateArray (colObj) {
  found = false;
  for ( i = 0; i < colArray.length; i++ ){
    if(colObj.name == colArray[i].name) {
      colArray.splice(i,1);
      found = true;
      break;
    }
  }
  
  if (!found) {
    colArray.push(colObj);
  }
}

function showCol(){
  string = "";
  for (let i = 0; i < colArray.length; i++) {
    string = string + "," + colArray[i].name; 
  }
  // remove first comma later
  return string;
}

for( i=0; i<btnarray.length; i++ ) {
  btnarray[i].style.backgroundColor = btnarray[i].id ;
  btnarray[i].onclick = function(event) {
    // document.querySelector("#Output1") .value = this.id;
    // document.querySelector("#Output2") .value = this.id; 
    updateArray(new colObj(this.id))
    document.querySelector("#Output1") .value = showCol();
    document.querySelector("#Output2") .value = showCol();

    console.log(colArray);
  }
}

function newInc() {
  activeObj.count = activeObj.count + 1;
  console.log(activeObj.count);
  document.querySelector("#Output3") .value = activeObj.count;
}

function newDec() {
  if (activeObj.count > 0) {
    activeObj.count = activeObj.count - 1;
    console.log(activeObj.count);
    document.querySelector("#Output3") .value = activeObj.count;
  }
}

incbtn.onclick = function(event) {
  newInc();
}

decbtn.onclick = function(event) {
  newDec();
}

cancelbtn.onclick = function(event) { 
  activeObj.count = 0
  document.querySelector("#Output3") .value = activeObj.count;
}

function doAgree() {
  
}

agreebtn.onclick = function(event) {
  if (activeObj.count > 0) {
    document.querySelector("#Output4") .value = activeObj.count;
    // 
    add.innerHTML = "checkout now";
    detailsCreate(activeObj.count,activeObj.name);
    // activeObj.count = 0;
    // document.querySelector("#Output3") .value = activeObj.count;
  } 
}

function detailsCreate(number,colour) {
  parent = document.getElementById("details");
  for(i=0; i<number; i++) {
    childeE = document.createElement("div");
    childeE.className = "circle";
    childeE.style.backgroundColor = colour;
    parent.appendChild(childeE);
  }
} 

