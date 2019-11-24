// Get the modal
var addmodal = document.getElementById("addModal");

// Get the button that opens the modal
var addbtn = document.getElementById("add");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
addbtn.onclick = function() {
  addmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  addmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == addmodal) {
    addmodal.style.display = "none";
  }
}

var radionbtns = document.querySelectorAll('.colour');

for( i=0; i<radionbtns.length; i++ ) {
    radionbtns[i].addEventListener('change',function(){
        document.querySelector('#colourOutput').value = this.value;
    });
}