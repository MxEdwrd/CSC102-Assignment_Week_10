function sound(src) {
    //Defines the audio name function that later functions will reference.
    this.sound = document.createElement("audio"); //Creates the element "audio" to reference later.
    this.sound.src = src; //The this.sound.src is equal to the source.
    this.sound.setAttribute("preload","audio"); //Preloads the audio in the website so it won't have to wait when you want the audio to play
    this.sound.setAttribute("controls","none"); //Sets the controls for the audio to none. Don't know how to enable controls.
    this.sound.style.display = "none"; //Sets the style display to none. 
    document.body.append(this.sound); //Appends the this.sound.
    this.play = function(){ //Defines the play function.
        this.sound.play();
    }
    this.stop = function(){ //Defines the stop function.
        this.sound.pause();
    }
}
function playAudio(){
    //Defines the function name that HTML references for playing the audio.
    console.log("Playing Audio"); //Outputs "Playing Audio" to the console.
    mySound = new sound("Back To The Future.mp3"); //Defines the audio name (source).
    mySound.play(); //Allows audio to start playing.
    document.getElementById("startaudio").disabled = true; //After clicking the start button, the start button will be disabled.
    document.getElementById("stopaudio").disabled = false; //After clicking the start button, the stop button will be enabled.
}
function stopAudio(){
    //Defines the function name that HTML referenes for stopping the audio.
    console.log("Stopping Audio"); //Outputs "Stopping Audio" to the console.
    document.getElementById("stopaudio").disabled = true; //After clicking the stop button, the stop button will be disabled.
    document.getElementById("startaudio").disabled = false; //After clicking the stop button, the start button will be enabled.
    location.replace("UATSpaceHome.html"); //Reloads the website to stop music, currently the only way I know to stop audio. 
}
