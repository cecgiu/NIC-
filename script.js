// this code doesnt work - maybe I still need to learn how to link the docs? Not sure. 
let logoBig = document.body.getElementById('logo');
function increaseWidth () {
    logoBig.style.width = '500px'
  }
  logoBig.addEventListener ('mouseover', increaseWidth)