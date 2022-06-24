const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");

const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [{
    name: "music-1",
    title: "faded",
    artist: "alan walker",
    pic:"pic-1",
  },
  {
    name: "music-2",
    title: "mi gente",
    artist: "willy william",
    pic:"pic-2",
  },
  {
    name: "music-3",
    title: "Ram Siya Ram",
    artist: "Sachet Tandon",
    pic:"pic-3",
  },
  {
    name: "music-4",
    title: "Shiva Tandava",
    artist: "Uma Mohan",
    pic:"pic-4",
  },
];
var isplaying = false;

const playMusic = function() {
  isplaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};
// for pause function
const pauseMusic = function() {
  isplaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};
play.addEventListener("click", function() {
  isplaying ? pauseMusic() : playMusic();
});


// changing music data
const loadSong= function(songs){
  title.textContent=songs.title;
  artist.textContent=songs.artist;
  music.src="music/"+songs.name+".mp3";
  img.src="images/"+songs.pic+".jpg";
};

var songIndex=0;
const nextSong=function(){
  songIndex=(songIndex+1)%songs.length;
  loadSong(songs[songIndex]);
  playMusic();
}
const prevSong=function(){
  songIndex=(songIndex-1+songs.length)%songs.length;
  loadSong(songs[songIndex]);
  playMusic();
}
next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);
