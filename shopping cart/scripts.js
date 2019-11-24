// Get the modal
var addmodal = document.getElementById("addModal");

// Get the button that opens the modal
var addbtn = document.getElementById("add");

var cancelbtn = document.getElementById("cancel");


// When the user clicks on the button, open the modal
addbtn.onclick = function() {
  addmodal.style.display = "block";
}

cancelbtn.onclick = function() {
  addmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == addmodal) {
    addmodal.style.display = "none";
  }
}


var btnarray = document.getElementsByClassName("colour-btn");

for( i=0; i<btnarray.length; i++ ) {
  btnarray[i].style.backgroundColor = btnarray[i].id ;
  btnarray[i].onclick = function(event) {
    document.querySelector("#colourOutput").value = this.id;
    
  }
}