const audios = ['exultant','electro', 'scary', 'motivational', 'calm', 'cine', 'joyful', 'fearful', 'indian', 'pop'];


let currentSong = null;

audios.forEach(audio =>{
    const button = document.createElement('button');
    button.classList.add('button');
    button.innerHTML=audio;
    button.addEventListener('click', () =>{
        stopSongs();
        document.getElementById(audio).play();
        currentSong = document.getElementById(audio);
    });
    
    document.getElementById('buttons').appendChild(button);
});

const pauseButton = document.getElementById('pause-button');
pauseButton.addEventListener('click', () => {
    if (currentSong) {
        currentSong.pause();
    }
});

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', () => {
    if (currentSong) {
        currentSong.play();
    }
});

function stopSongs(){
    audios.forEach(audio =>{
        const song = document.getElementById(audio);

        song.pause();
        song.currentTime=0;
        
    });
}
