// Custom audio player
const playButtons = document.querySelectorAll('#play-pause-button');
for (const button of playButtons) {
    button.addEventListener("click", function() {
        let audio = button.closest(".audio-controls").querySelector("#player");
        audio.classList.toggle("paused");

        if(audio.className == 'paused') {
          audio.pause();
          // Cambia a boton de pausa
          this.innerHTML = '<path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>';
        }
        else {     
          audio.play();     
          // Cambia a boton de play
          this.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
        }
    });
};

function onlyPlayOneIn(container) {
    container.addEventListener("play", function(event) {
    audio_elements = container.getElementsByTagName("audio")
      for(i=0; i < audio_elements.length; i++) {
        audio_element = audio_elements[i];
        if (audio_element !== event.target) {
            audio_element.pause();
            //cambiar el resto de audios a "paused"
            audio_element.classList.toggle('paused');
            // Cambiar el SVG del resto de audios al boton de play
            audio_element.??????
            
        }
      }
    }, true);
  }

document.addEventListener("DOMContentLoaded", function() {
  onlyPlayOneIn(document.body);
});

//var aud = document.getElementById("player");
//aud.onended = function() {
//    this.querySelector("#play-pause-button").innerHTML = '<path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>';
//};