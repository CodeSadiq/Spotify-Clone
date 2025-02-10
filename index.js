let songArray = [];
let audio;
let audioIsPlaying = false;
let playedAudioClass =0;
let playedCardClass =0;
let currentIndex =0;
let cardBtnClass, songListBtnClass;
for (let i=0 ; i<14; i++){
    document.querySelectorAll(".songName")[i].textContent= document.querySelectorAll(".songNameinCard")[i].textContent;
    document.querySelectorAll(".artistName")[i].textContent= document.querySelectorAll(".artistNameinCard")[i].textContent;
    document.querySelectorAll(".librarySongList")[i].classList.add(`${100+i+1}`);
    document.querySelectorAll(".playNowContainer .playnowButton .invert")[i].classList.add(`${i+200+1}`);
    songArray.push(new Audio (`./songs/${i+1}.mp3`));
};

function changePlayBtn() {
    setTimeout(()=> {
        $(`${"."+cardBtnClass+" "+"*"+" "+"*"}`).attr("src", "./icon/pause.png");
        $(`${"."+"playNowContainer"+" "+"."+"playnowButton"+" "+"."+songListBtnClass}`).attr("src","./svg/pause.svg");    
        $(".301").attr("src","./svg/pause.svg")
    },100);

    setInterval(function() {
        let currentTime = formatTime(audio.currentTime);
        let duration = formatTime(audio.duration || 0); // Handles NaN for duration
        $("#402").text(`${currentTime} / ${duration}`);

        $(".seekbarThumb").css("margin-left",`${formatSeekbarThumb()+"%"}`);
        
        if(audio.currentTime=== audio.duration) {
            resetPlayBtn();
        }
    }, 100);

    $(".seekbar").on("click", function(event){
        let rect = document.querySelector(".seekbar").getBoundingClientRect();
        let offsetX = event.clientX - rect.left;
        let PersentageFromLeft = Math.floor((offsetX*100)/rect.width);
        audio.currentTime = (PersentageFromLeft * audio.duration) / 100;
      })
};

function resetPlayBtn(){
    $(`${"."+cardBtnClass+" "+"*"+" "+"*"}`).attr("src", "./icon/play-button.png");
    $(`${"."+"playNowContainer"+" "+"."+"playnowButton"+" "+"."+songListBtnClass}`).attr("src","./svg/playsong.svg");
    $(".301").attr("src","./svg/playsong.svg")
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

function formatSeekbarThumb(){
    let positionFromLeft = (Math.floor(audio.currentTime*5)*100)/ (Math.floor(audio.duration*5));
    return positionFromLeft;
};


$(".card").on("click" , function() {
    if( this.classList[0] === playedCardClass && audioIsPlaying ===true){
        if(audio.paused){
            audio.play();
            changePlayBtn();
        }else{
            audio.pause();
            resetPlayBtn();
        }
    } 
    if(this.classList[0] !== playedCardClass){
        if( audioIsPlaying=== true){
            audio.currentTime =0;
            audio.pause();
            resetPlayBtn();
        };
       songArray[this.classList[0]-1].play();
       audio= songArray[this.classList[0]-1]
       audioIsPlaying = true;
       playedCardClass = this.classList[0];
       currentIndex= parseInt(this.classList[0])-1;
       playedAudioClass = parseInt(this.classList[0])+100
       cardBtnClass= this.classList[0]
       songListBtnClass = parseInt(this.classList[0])+200 ;
       changePlayBtn();
       $("#401").text(`${$(`${"."+cardBtnClass+" "+"."+"songNameinCard" }`).text()}`);
    
    }
   });

$(".librarySongList").on("click" , function() {
    if( this.classList[1] === playedAudioClass && audioIsPlaying ===true){
        if(audio.paused){
            audio.play();
            changePlayBtn();
        }else{
            audio.pause();
            resetPlayBtn();
        }
    } 
    if(this.classList[1] !== playedAudioClass ) {
        if(audioIsPlaying === true){
            audio.currentTime =0;
            audio.pause();
            resetPlayBtn();
        };
        songArray[this.classList[1]-100-1].play();
        audio= songArray[this.classList[1]-100-1]
        audioIsPlaying = true;
        playedAudioClass = this.classList[1];
        currentIndex = parseInt(this.classList[1])-100-1;
        playedCardClass = parseInt(this.classList[1])-100;
        songListBtnClass = parseInt(this.classList[1])-100+200;
        cardBtnClass = parseInt(this.classList[1])-100;
        changePlayBtn();
        $("#401").text(`${$(`${"."+cardBtnClass+" "+"."+"songNameinCard" }`).text()}`);
    }
});

$(".301").on("click", function(){
    if(audioIsPlaying=== false){
        $(".librarySongList").first().trigger("click");
    } else{
        if(audio.paused){
            audio.play();
            changePlayBtn();
        }else{
            audio.pause();
            resetPlayBtn();
        }
    }
});

$(".changeSong").on("click", function(){
        if(this.id === '501' && currentIndex >0){
            $(".librarySongList").eq(currentIndex - 1).trigger("click");
        }else if ( this.id === '503' && currentIndex< songArray.length){
            $(".librarySongList").eq(currentIndex + 1).trigger("click");
        }
    
})
$(".hamburger").on("click", function(){
   $(".leftContainer").addClass("leftContainerInMobile ");

})

$(".homeSearchRightAdded").on("click", function(){
    $(".leftContainer").removeClass("leftContainerInMobile ");
})

// $(document).ready(function() {
//     // Manually trigger click on the first song
//     $(".librarySongList").first().trigger("click");
// });

