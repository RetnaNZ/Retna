
var OurTeam = document.getElementById("OurTeam");
var YourTeam = document.getElementById("YourTeam");
var Publishing = document.getElementById("Publishing");


var OurTeamText = document.getElementById("OurTeamText");
var YourTeamText = document.getElementById("YourTeamText");
var PublishingText = document.getElementById("PublishingText");

var ButtonElements = [OurTeam, YourTeam, Publishing];
var domElements = [OurTeamText, YourTeamText, PublishingText];
var currentElement = 0;
var animating = false;


fadeIn();

  function fadeIn(element) {
    
    if(animating == false){
      element = domElements[currentElement];
  var op = 0.1;  // initial opacity
      element.style.opacity = op;

      element.style.display = 'flex';
var timer = setInterval(function () {
  if (op >= 1.0){
      clearInterval(timer);
      setTimeout(() => {
        fadeOut(element);
      }, 2.0 * 1000);
      ;
  }
      element.style.opacity = op;
  element.style.filter = 'alpha(opacity=' + op * 100 + ")";
  op += op * 0.1;
}, 50);
      animating = true;
    }

}

function fadeOut(element){

  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
          
          if(currentElement == 2){
            currentElement = 0;
          }else{
            currentElement ++;
          }
          animating = false;

          setTimeout(() => {
            fadeIn();
          }, 0.5 * 1000);
          ;
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 50);
}