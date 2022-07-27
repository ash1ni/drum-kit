var numberOfButtons = document.querySelectorAll(".drum").length;


//for loop for performing click function on the button
for(var i=0;i<numberOfButtons;i++){
       document.querySelectorAll("button")[i].addEventListener("click", function(){
        
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        
       
})
}


//fucntion to detect keypress of the particular key for the drum
//anonymous call back function is used to detect keypress from the keyboard
document.addEventListener("keydown",function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
})


// makeSound function for different buttons to produce different sounds of the drum

function makeSound(key){
    switch (key) {
            case "w":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

            case "a":
               var tom1 = new Audio('sounds/tom-1.mp3');
               tom1.play();
               break;
            case "s":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            case "d":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "j":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "k":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "l":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            default: console.log(key)
                break;
        }
}


// A function for button animation to tell user which button they pressed on the keyboard and screen

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed")
    
    
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)

}

 


