let songArray = [];
let audio;
let audioIsPlaying = false;
for (let i=0 ; i<14; i++){
    document.querySelectorAll(".songName")[i].textContent= document.querySelectorAll(".songNameinCard")[i].textContent;
    document.querySelectorAll(".artistName")[i].textContent= document.querySelectorAll(".artistNameinCard")[i].textContent;
    document.querySelectorAll(".librarySongList")[i].classList.add(`${i+1}`);
    songArray.push(new Audio (`./songs/${i+1}.mp3`));
};

$(".card").on("click" , function() {
    if( audioIsPlaying=== true){
        audio.currentTime =0;
        audio.pause();
    };
   songArray[this.classList[0]-1].play();
   audio= songArray[this.classList[0]-1]
   audioIsPlaying = true;
   $().attr("src", "./icon/pause.png");
});

$(".librarySongList").on("click" , function() {
    if(audioIsPlaying === true){
        audio.currentTime =0;
        audio.pause();
    };
    songArray[this.classList[1]-1].play();
    audio= songArray[this.classList[1]-1]
    audioIsPlaying = true;
 });