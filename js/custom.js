
document.getElementById("play-pause-button").addEventListener("click", function(){
    var audio = document.getElementById('player');
    audio.classList.toggle("is-playing");

    if(audio.className == 'is-playing'){
        this.innerHTML = '<path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>';
        audio.pause();
    }
    else{
        this.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
        audio.play();
    }
});