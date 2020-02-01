// Question 1
var myFunctionExpression = function() {
    console.log("Martin");
}

// Question 2
const button = document.querySelector(".btn");
button.addEventListener("click", function() {
        console.log("I was clicked");
});

// Question 3
const textInput = document.getElementById("firstName");
textInput.addEventListener("keydown", function() {
        console.log(textInput.value);
});

// Question 4
const secondButton = document.getElementsByTagName("button")[1];
secondButton.addEventListener("mouseover", function() {
    secondButton.classList.add("hover");
});

// Question 5
const thirdButton = document.querySelector("[data-animal='dog']");
thirdButton.addEventListener("mouseout", function() {
    secondButton.classList.remove("hover");
});

// Question 6
const list = document.querySelectorAll("li");
list.forEach(li => li.addEventListener("mouseover", function() {
    console.log(li.dataset.animal);
}))

// Question 7
const animal = "cow";
switch(animal) {
    case "cat":
        console.log("Meow");
        break;

    case "cow":
        console.log("Moo");
        break;
    
    case "bird":
        console.log("Tweet");
        break;
        
    default:
        console.log("Harrumph");  
}

// Question 8
const sheep = ["Malcolm", "Anders", "Marie"];
sheep.forEach(sheep => console.log(sheep));

// Question 9
function helloTimer(ms) {
    return new Promise(res => setTimeout(res, ms));
}
async function helloTimerLoop(){
    for(i = 0; i < 6; i++) {
        console.log("Hello");
        await helloTimer(500);
    }
}

helloTimerLoop();

// Question 10
var divContainer = document.querySelector(".container");
setTimeout(() => {
    divContainer.innerHTML = "Text Updated";
}, 2000);