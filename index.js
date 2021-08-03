console.log(Math.floor(Math.random() * 12));
// Add eventlistener for each drum-class button
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonKey = this.innerHTML;
    makeSound(buttonKey);
    buttonAnimation(buttonKey);
  });
}

// Add eventlistener for keyboard presses
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Assign sound to each keybord detected by click (innerHTML>>buttonKey) or by press (event.key)
function makeSound(key) {
    switch (key) {
      case "w":
        var tom1Audio = new Audio("sounds/tom-1.mp3");
        tom1Audio.play();
        break;
      case "e":
        var kickassAudio = new Audio("sounds/trance.mp3");
        kickassAudio.play();
        break;
      case "r":
        var kickassAudio = new Audio("sounds/shortBase.mp3");
        kickassAudio.play();
        break;
      case "a":
        var tom2Audio = new Audio("sounds/tom-2.mp3");
        tom2Audio.play();
        break;
      case "s":
        var tom3Audio = new Audio("sounds/tom-3.mp3");
        tom3Audio.play();
        break;
      case "d":
        var tom4Audio = new Audio("sounds/tom-4.mp3");
        tom4Audio.play();
        break;
      case "f":
        var kickassAudio = new Audio("sounds/laser.mp3");
        kickassAudio.play();
        break;
      case "i":
        var kickassAudio = new Audio("sounds/sticks.mp3");
        kickassAudio.play();
        break;
      case "o":
        var kickassAudio = new Audio("sounds/techno.mp3");
        kickassAudio.play();
        break;
      case "j":
        var snareAudio = new Audio("sounds/snare.mp3");
        snareAudio.play();
        break;
      case "k":
        var crashAudio = new Audio("sounds/crash.mp3");
        crashAudio.play();
        break;
      case "l":
        var kickassAudio = new Audio("sounds/kick-bass.mp3");
        kickassAudio.play();
        break;
      //random sound with the key b:
      case "b":
        var soundList = ["tom-1", "trance", "shortBase", "tom-2", "tom-3", "tom-4", "laser", "sticks", "techno", "snare", "crash", "kick-bass"];
        var randomSound = soundList[Math.floor(Math.random() * 12)];
        console.log(randomSound);
        var randomAudio = new Audio("sounds/" + randomSound + ".mp3");
        randomAudio.play();
        break;
      default:
        console.log("Invalid key");
    }
}

// Define animation for current key (e.g. .w) and assign css-action
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () { activeButton.classList.remove("pressed"); }, 200);
}
