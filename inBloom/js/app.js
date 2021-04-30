function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.opacity = "0";  
    }
    document.getElementById(cityName).style.opacity = "1";
  }

  $(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('nav').toggleClass('active')
    })
})
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}