for (let i=0 ; i<14; i++){
    document.querySelectorAll(".songName")[i].textContent= document.querySelectorAll(".songNameinCard")[i].textContent;
    document.querySelectorAll(".artistName")[i].textContent= document.querySelectorAll(".artistNameinCard")[i].textContent;
    }
let songArray = [];
for (let i= 0; i<14; i++){
    songArray.push(new Audio(`./songs/${i+1}.mp3`))
}
