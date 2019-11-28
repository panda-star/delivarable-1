
var btnarray = document.getElementsByClassName("colour-btn");

for( i=0; i<btnarray.length; i++ ) {
  btnarray[i].style.backgroundColor = btnarray[i].id ;
  btnarray[i].onclick = function(event) {
    document.querySelector("#Output1") .value = this.id;
    document.querySelector("#Output2") .value = this.id; 
  }
}