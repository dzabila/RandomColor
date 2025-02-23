const colors = document.querySelectorAll(".color");
const colorName = document.querySelectorAll(".color--name");

document.addEventListener("keydown", function(event) {
    if(event.key === ' '){
        generateRandomColor();
    }

}); 
function generateRandomColor(){
    let color = "#";
    for (let x = 0; x < 6; x++) {
        for (let i = 0; i < 6; i++) {
          let randomNumber = Math.trunc(Math.random() * 15) + 1;
          if (randomNumber === 10) {
            randomNumber = "a";
          } else if (randomNumber === 11) {
            randomNumber = "b";
          } else if (randomNumber === 12) {
            randomNumber = "c";
          } else if (randomNumber === 13) {
            randomNumber = "d";
          } else if (randomNumber === 14) {
            randomNumber = "e";
          } else if (randomNumber === 15) {
            randomNumber = "f";
          }
  
          color += randomNumber;
          console.log(color);
        }
        colors[x].style.backgroundColor = color;
        colorName[x].textContent = color;
        color = "#";
      }
}