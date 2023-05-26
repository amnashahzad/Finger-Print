//setting up time in the task bar

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    m = checkTime(m);

    document.getElementById('txt').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

//Setting up the button reaction and rotation Animation
const lockScreen = document.querySelector('.lockScreen');//lockscreen
const fingerPrint = document.querySelector('.fingerprintSensor');//fingerprint button
const animationDisplay =document.querySelector('.Wave');//animation display





fingerPrint.addEventListener("mousedown", fingerprintActivation );


function fingerprintActivation(){
  animationDisplay.style.display = "block";

  setTimeout(function(){
      lockScreen.style.display = "none";
  },2000);

}