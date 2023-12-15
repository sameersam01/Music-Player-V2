const music=document.querySelector("audio");
const play=document.getElementById("play");
const img=document.getElementById("img");
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const prev=document.getElementById("prev");
const next=document.getElementById("next");

const songs=[
    {
        name:"song-0",
        title:"Alone",
        artist:"Alan Walker",        
        cover:"Cover0"
    },{
        name:"song-1",
        title:"Carols of bell",
        artist:"Lindsey Strling",        
        cover:"Cover1"
    },
    {
        name:"song-2",
        title:"Cheque",
        artist:"Shubh",
        cover:"Cover2"
    },
    {
        name:"song-3",
        title:"ILL MindZ",
        artist:"Byg Bird",
        cover:"Cover3" 
    },
    {
        name:"song-4",
        title:"Mexico",
        artist:"Hunar Sindhu",
        cover:"Cover4" 
    }
]

let isPlaying=false;
//for play function
const playMusic=()=>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
   
};

//for pause function
const pauseMusic=()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
   
};

play.addEventListener("click",()=>{
    if (isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }

   
});
const loadSongs=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="assests/"+songs.name+".mp3";
    img.src="img/"+songs.cover+".png"
}
//loadSongs(songs[2])
songIndex=0;
const nextsong=()=>{
    loadSongs(songs[songIndex]);
    songIndex=(songIndex+1)%songs.length;
    playMusic();

}
const prevsong=()=>{
    loadSongs(songs[songIndex]);
    songIndex=(songIndex-1+songs.length)%songs.length;
    playMusic();

}
next.addEventListener("click",nextsong);
prev.addEventListener("click",prevsong);


