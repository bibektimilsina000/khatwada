document.getElementById("btn2").addEventListener("click", toFahrenheit);
document.getElementById("btn1").addEventListener("click", tocel);

function toFahrenheit() {
  document.getElementById("converter to fare").innerHTML =
    "<button >Convert To Fahrenheit</button>";
  console.log("clicked");
}
function tocel() {
  document.getElementById("converter to fare").innerHTML =
    "<button >Convert To celsious</button>";
  console.log("clicked");
}
