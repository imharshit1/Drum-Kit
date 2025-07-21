function playSound(key) {
    switch (key) {
            case "w":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "a":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "k":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                let kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break;

            default:
                console.log(buttonInnerHtml);
        }
}

function buttonAnimation(currentKey) {
    let findButton = document.querySelector("." + currentKey); 
    findButton.classList.add("pressed");

    setTimeout(function() {
        findButton.classList.remove("pressed");
    }, 100);
}

// Keyboard
document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});


// Button
const numberOfDrums = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfDrums; i++) {

    let button = document.querySelectorAll(".drum")[i];
    button.addEventListener("click", function() {
        let buttonInnerHtml = this.innerHTML;

        playSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });

}


