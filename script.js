function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  var text = document.getElementById("switchtext");
  var currentText = text.className;
  text.innerHTML = currentClass == "dark-mode" ? "dark mode" : "light mode";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    if (n == "1") {
      document.getElementById('work').className = 'main w3-animate-right';
      document.getElementById('degree').className = 'main w3-animate-right';
      document.getElementById('cw').className = 'main w3-animate-right';
      document.getElementById('htb').className = 'main w3-animate-right';
      document.getElementById('awards').className = 'main w3-animate-right';
      document.getElementById('interests').className = 'main w3-animate-right';
      document.getElementById('contact').className = 'main w3-animate-right';
    } else if (n == "-1") {      
      document.getElementById('hi').className = 'main w3-animate-left';
      document.getElementById('work').className = 'main w3-animate-left';
      document.getElementById('degree').className = 'main w3-animate-left';
      document.getElementById('cw').className = 'main w3-animate-left';
      document.getElementById('htb').className = 'main w3-animate-left';
      document.getElementById('awards').className = 'main w3-animate-left';
      document.getElementById('interests').className = 'main w3-animate-left';
    }
    showSlides(slideIndex += n);
  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

 // document.getElementById('hi').className += '';
 // document.getElementById('work').className += '';
 // document.getElementById('degree').className += '';
 // document.getElementById('cw').className += '';
 // document.getElementById('htb').className += '';
 // document.getElementById('awards').className += '';
 // document.getElementById('interests').className += '';
 // document.getElementById('contact').className += '';




var prev = document.getElementById("prevdiv");
var next = document.getElementById("nextdiv");

function showSlides(n) {
    var i;
    i
    var slides = document.getElementsByClassName("main");
    //var prev = document.getElementByClassName("prevdiv");
    //var next = document.getElementByClassName("nextdiv");

    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        if (n == 1) {
            document.getElementById("prevdiv").style.display = "none";
            document.getElementById("nextdiv").style.display = "block";
        } else if (n == 8) {
            document.getElementById("nextdiv").style.display = "none";
            document.getElementById("prevdiv").style.display = "block";
        } else {
            document.getElementById("nextdiv").style.display = "block";
            document.getElementById("prevdiv").style.display = "block";
        }          
    }  
    console.log(slideIndex);
    slides[slideIndex - 1].style.display = "block";
}

function addRight() {
  document.getElementById('hi').className += ' w3-animate-right';
  document.getElementById('work').className += ' w3-animate-right';
  document.getElementById('degree').className += ' w3-animate-right';
  document.getElementById('cw').className += ' w3-animate-right';
  document.getElementById('htb').className += ' w3-animate-right';
  document.getElementById('awards').className += ' w3-animate-right';
  document.getElementById('interests').className += ' w3-animate-right';
  document.getElementById('contact').className += ' w3-animate-right';
  
}

function addLeft() {
  document.getElementById('hi').className += ' w3-animate-left';
  document.getElementById('work').className += ' w3-animate-left';
  document.getElementById('degree').className += ' w3-animate-left';
  document.getElementById('cw').className += ' w3-animate-left';
  document.getElementById('htb').className += ' w3-animate-left';
  document.getElementById('awards').className += ' w3-animate-left';
  document.getElementById('interests').className += ' w3-animate-left';
  document.getElementById('contact').className += ' w3-animate-left';
}
