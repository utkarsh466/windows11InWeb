// alert("Pls use fullscreen mode for better experience");
// var conf = confirm("Pls use fullscreen mode for better experience\n(Press F11 before pressing ok)");

let winicon = document.getElementsByClassName("winicon")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];
let power = document.getElementsByClassName("power") [0];
winicon.addEventListener("click", () => {
  // let clickPopUp = document.getElementsByClassName("clickPopUp")[0];
  // clickPopUp.style.display = "none";
  
  if (startmenu.style.bottom == "50px") {
    startmenu.style.bottom = "-655px";
    power.style.display="none";
  } else {
    startmenu.style.bottom = "50px";
    power.style.display = "block";   
    
  }
});






// function popUp() {
//   let clickPopUp = document.getElementsByClassName("clickPopUp")[0];
//   clickPopUp.style.display = "block";
//   clickPopUp.style.transition="10s ease-in";
// }

// setTimeout(popUp, 7000);    
