// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.padding = "0px 0px";
    document.getElementById("protocolLogo").style.width = "80px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("protocolLogo").style.width = "100px";
  }

  if(document.documentElement.scrollTop > 37 && document.documentElement.scrollTop < 500){
    var topEcart = (document.documentElement.scrollTop - 37);
    document.getElementById("tdContainer").style.top = topEcart+"px";
  }

  //document.getElementById("RoadMap").innerHTML = document.documentElement.scrollTop
}

/*
var delayInMilliseconds = 1000; //1 second

$(window).on("load",function(){
  $("loader-wrapper").fadeOut("slow");
  document.getElementById("loader-wrapper").style.display = "none";
});*/


const loader = document.getElementById("loader-wrapper");
const main = document.body;

function init() {
  setTimeout(() => {
    document.getElementById("loader-wrapper").style.display = 'none';
    document.getElementById("afterLoading").style.display = 'initial';
    document.getElementById("navbar").style.position = "fixed";
    document.body.style.cursor = "default";

  }, 3000);
}
/*
function reveal() {
  var reveals = document.getElementById("boldTitle");
  var windowHeight = window.innerHeight;
  var elementTop = reveals.getBoundingClientRect().top;
  var elementVisible = 150;
  if (elementTop < windowHeight - elementVisible) {
    reveals.classList.add("active");
  } else {
    reveals.classList.remove("active");
  }
}
*/
init();

//window.addEventListener("scroll", reveal);
