function play(){
    document.getElementById("videoPlayer").play();
    document.getElementById("pause").disabled=false;
    document.getElementById("play").disabled=true;
    document.getElementById("stop").disabled=false;
}

function pause(){
    document.getElementById("videoPlayer").pause();
    document.getElementById("pause").disabled=true;
    document.getElementById("play").disabled=false;
    
}

function stop(){
    let vid = document.getElementById("videoPlayer");
    vid.pause();
    vid.currentTime=0;
    document.getElementById("stop").disabled=true;
    document.getElementById("play").disabled=false;
    
}


function refresh(){
    let vid = document.getElementById("videoPlayer");
    vid.pause();
    vid.currentTime=0;
    play();
    
}

function init() {
   var vid = document.getElementById("videoPlayer");  
  
   vid.addEventListener('timeupdate', updateProgressBar, false);
}

function updateProgressBar() {
       var vid = document.getElementById("videoPlayer");  
       var progressBar = document.getElementById('progress-bar');
       var percentage = Math.floor((100 / vid.duration) * vid.currentTime);
       progressBar.value = percentage;
       progressBar.style.width = percentage + '%';
   }

   function volume(action){
       var vid = document.getElementById("videoPlayer");  
       if(action == "plus") {
           var vol =  parseFloat(vid.volume).toFixed(1);
           if(vol < 1){
               vid.volume = vid.volume + 0.1;
           }
       } else if(action == "minus") {
           var vol =  parseFloat(vid.volume).toFixed(1);
           if(vol >0){
               vid.volume = vid.volume - 0.1;
           }
       }else if(action == "headphone") {
           if(vid.muted){
               vid.muted = false;
           } else {
               vid.muted = true;
           }
       }
    
}

function likes() {
       if (typeof(Storage) !== "undefined") {
           var count = Number(localStorage.getItem("like"));
           ++count;
           localStorage.setItem("like", count);
           init();
     }
}

     function dislikes() {
       var count = Number(localStorage.getItem("dislike"));
           ++count;
           localStorage.setItem("dislike", count);
           init();
     }

     function run(link){
         var player = document.getElementById("videoPlayer");  
         player.src=link;
   
   player.load();
   player.play();
   document.getElementById("pause").disabled=false;
    document.getElementById("play").disabled=true;
    document.getElementById("stop").disabled=false;
}