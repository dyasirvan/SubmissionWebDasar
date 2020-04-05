function hilang() {
    document.getElementById("pSel").style.display = "none";
    document.getElementById("hiddenNot").style.display = "block";
}

function muncul() {
    document.getElementById("pSel").style.display = "block";
    document.getElementById("hiddenNot").style.display = "none";
}

var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("li");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}