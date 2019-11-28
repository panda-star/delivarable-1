
var btnarray = document.getElementsByClassName("colour-btn");
var incbtn = document.getElementById("increment");
var decbtn = document.getElementById("decrement");
var amount = 0;

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