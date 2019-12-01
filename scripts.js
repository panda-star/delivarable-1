
var btnarray = document.getElementsByClassName("colour-btn");
var incbtn = document.getElementById("increment");
var decbtn = document.getElementById("decrement");
var agreebtn = document.getElementById("agree");
var cancelbtn = document.getElementById("cancel");
var add = document.getElementById("add");

var activeObj;
// stores all colours
var colArray = [];

 // how many colours we have gone through
 var colcount = 1;


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
    document.getElementById("priceSpan").innerHTML = "Total price: $" + getTotalCost();
    makeSummary();
  }
}

function makeSummary() {
  parent = document.getElementById("summaryDiv");
  
  for ( i = 0; i < colArray.length; i++) {
    
    child = document.createElement("p");
    icon = document.createElement("p");
    icon.className = "circle";
    icon.style.backgroundColor = colArray[i].name;
    parent.appendChild(icon);
    child.innerHTML= colArray[i].name + " " + colArray[i].count + " $" 
    + colArray[i].count*colArray[i].price;
    parent.appendChild(child); 
  }
}
 
// adds or removes from array
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

// changes string to show all colours selected
function showCol(){
  string = "";
  for (let i = 0; i < colArray.length; i++) {
    string = string + "," + colArray[i].name; 
  }
  // remove first comma later
  return string;
}

// creates functionality for all colour buttons
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

agreebtn.onclick = function(event) {
  
  if (activeObj.count > 0) {
    add.innerHTML = "checkout now";
    detailsCreate(activeObj.count,activeObj.name);
    document.querySelector("#Output3") .value = 0;
  } 
 
  if (colcount === colArray.length) {
    $("#addModal").modal('toggle');  
    document.getElementById("price").innerHTML = "$" + getTotalCost();
    document.querySelector("#Output4") .value = getTotalnum();
    // must be trunctated
    temp = 4*getTotalCost()/3;
    temp = temp.toFixed(2);
    document.getElementById("originalPrice").innerHTML = "$" + temp;
    console.log(getTotalCost());
  }

  colcount += 1;
  activeObj = colArray[colcount-1];
  document.querySelector("#Output2") .value = activeObj.name;
  
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

function getTotalCost() {
  cost = 0;
  for ( i = 0; i < colArray.length; i++) {
   cost += colArray[i].price*colArray[i].count;  
  }
  // fixes error of some additions giving the wrong number
  cost = cost.toFixed(2);
  return cost;
}

function getTotalnum() {
  total = 0;
  for ( i = 0; i < colArray.length; i++) {
   total += colArray[i].count;  
  }
  // cost = cost.toFixed(2);
  return total;  
}