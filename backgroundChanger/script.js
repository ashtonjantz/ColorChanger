const colors = ["red", "yellow", "blue", "green"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // console.log(document.body);
    const randomNumber = getRandomNumber(); 
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];

})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);

}