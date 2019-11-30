
var btnarray = document.getElementsByClassName("colour-btn");
var incbtn = document.getElementById("increment");
var decbtn = document.getElementById("decrement");
var amount = 0;
var agreebtn = document.getElementById("agree");
var cancelbtn = document.getElementById("cancel");
var checkoutbtn = document.getElementById("checkout");

for( i=0; i<btnarray.length; i++ ) {
  btnarray[i].style.backgroundColor = btnarray[i].id ;
  btnarray[i].onclick = function(event) {
    document.querySelector("#Output1") .value = this.id;
    document.querySelector("#Output2") .value = this.id; 
  }
}

incbtn.onclick = function(event) {
  // amount.value = "1";
  amount = amount + 1;
  document.querySelector("#Output3") .value = amount;
}

decbtn.onclick = function(event) {
  if (amount > 0) {
    amount = amount - 1;
    document.querySelector("#Output3") .value = amount;
  } 
}

cancelbtn.onclick = function(event) { 
  amount = 0
  document.querySelector("#Output3") .value = amount;
}

agreebtn.onclick = function(event) {
  if (amount > 0) {
    document.querySelector("#Output4") .value = amount;
    checkoutbtn.style.display = "block";

    detailsCreate(amount,document.querySelector("#Output1") .value);

    amount = 0;
    document.querySelector("#Output3") .value = amount;
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

