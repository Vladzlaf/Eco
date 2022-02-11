// const audio = document.querySelector('audio');
// const playBtn = document.querySelector('.logo');
// const pauseBtn = document.querySelector('.button-player');
// // let isPlay = audio = false

// function playAudio() {
//     if (audio.pause == true) {
//         audio.currentTime = 0;
//         audio.play();      
//     }
//     else if (audio.pause == false ){
//         audio.pause();
  
//     }
// }

// // function pauseAudio() {
// //   audio.pause();
// // }

// console.log (playBtn.addEventListener('click', playAudio)) 
// // pauseBtn.addEventListener('click', pauseAudio);

// ---------------------Active buttons---------------------//
const btns = document.querySelector ('.container');
const btn = document.querySelectorAll ('.nav-item');
const play = document.querySelector ('.button-player');
const back = document.querySelector ('.main')
let isPlay = false

btns.addEventListener ('click', function changeAndActive (event) {
    event.target.dataset.img;
    back.style.backgroundImage = `url(./assets/img/${event.target.dataset.img}.jpg)`;
    btn.forEach(element => {
        element.classList.remove ('active')
    });
    event.target.classList.add ('active')
    
}
)

play.addEventListener('click', function playPause() {
    play.classList.toggle ('activePlay')
}
)
// ---------------------Audio---------------------//

const audio = new Audio()

function playAudio() {
    if (isPlay) {
        audio.src = './assets/audio/forest.mp3'
        audio.currentTime = 0;
        audio.play();
    }
    else {
        audio.pause();
    }
}

play.addEventListener ('click', ()=> playAudio(isPlay= !isPlay), playAudio)

function playAudioList (event) {
    audio.src = `./assets/audio/${event.target.dataset.img}.mp3`
    audio.currentTime = 0;
    audio.play();
} 

btns.addEventListener ('click',  playAudioList)


