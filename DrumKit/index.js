// Handling mouse clicks
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var butInnerHTML = this.innerHTML;
        makeSound(butInnerHTML, this);  // Pass the button element to the makeSound function
    });
}

// Handling keypresses
document.addEventListener("keypress", function(event) {
    var keyPressed = event.key;
    var buttonElement = document.querySelector("." + keyPressed);  // Find the corresponding button element

    if (buttonElement) {  // Check if the button exists
        makeSound(keyPressed, buttonElement);  // Pass the button element to the makeSound function
    }
});

// Updated makeSound function
function makeSound(key, buttonElement) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        default:
            console.log("Invalid key: " + key);
            return;
    }

    // Change the color of the button to white and then back to black
    buttonElement.style.color = "white";
    setTimeout(() => {
        buttonElement.style.color = "black";
    }, 100);
}
