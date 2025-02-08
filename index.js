let songArray = [];
let audio;
let audioIsPlaying = false;
let cardBtnClass, songListBtnClass;
for (let i=0 ; i<14; i++){
    document.querySelectorAll(".songName")[i].textContent= document.querySelectorAll(".songNameinCard")[i].textContent;
    document.querySelectorAll(".artistName")[i].textContent= document.querySelectorAll(".artistNameinCard")[i].textContent;
    document.querySelectorAll(".librarySongList")[i].classList.add(`${100+i+1}`);
    document.querySelectorAll(".playNowContainer .playnowButton .invert")[i].classList.add(`${i+200+1}`);
    songArray.push(new Audio (`./songs/${i+1}.mp3`));
};
function changePlayBtn() {
    $(`${"."+cardBtnClass+" "+"*"+" "+"*"}`).attr("src", "./icon/pause.png");
    $(`${"."+"playNowContainer"+" "+"."+"playnowButton"+" "+"."+songListBtnClass}`).attr("src","./svg/pause.svg");
    setTimeout(()=> {
        $(".301").attr("src","./svg/pause.svg")
    },100);
};
function resetPlayBtn(){
    $(`${"."+cardBtnClass+" "+"*"+" "+"*"}`).attr("src", "./icon/play-button.png");
    $(`${"."+"playNowContainer"+" "+"."+"playnowButton"+" "+"."+songListBtnClass}`).attr("src","./svg/playsong.svg");
    $(".301").attr("src","./svg/playsong.svg")
}

$(".card").on("click" , function() {
    if( audioIsPlaying=== true){
        audio.currentTime =0;
        audio.pause();
        resetPlayBtn();
    };
   songArray[this.classList[0]-1].play();
   audio= songArray[this.classList[0]-1]
   audioIsPlaying = true;
   cardBtnClass= this.classList[0]
   songListBtnClass = parseInt(this.classList[0])+200 ;
   changePlayBtn();
});

$(".librarySongList").on("click" , function() {
    if(audioIsPlaying === true){
        audio.currentTime =0;
        audio.pause();
        resetPlayBtn();
    };
    songArray[this.classList[1]-100-1].play();
    audio= songArray[this.classList[1]-100-1]
    audioIsPlaying = true;
    songListBtnClass = parseInt(this.classList[1])-100+200;
    cardBtnClass = parseInt(this.classList[1])-100;
    changePlayBtn();
    
});
$(".301").on("click", function(){
    if(audio.paused){
        audio.play();
        $(".301").attr("src","./svg/pause.svg")
        changePlayBtn();
    }else{
        audio.pause();
        $(".301").attr("src","./svg/playsong.svg")
        resetPlayBtn();
    }
})