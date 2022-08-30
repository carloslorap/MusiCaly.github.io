let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let artist = document.querySelector('#artist');
let auto_play = document.querySelector('#auto');
var wave = document.getElementsByClassName('wave')[0];



let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;


let track = document.createElement('audio');

let all_song = [
   {
      name: "Alan Walker - Faded ",
      path: "audios/1.mp3",
      img: "imagenes/1.jpg",
      singer: "Alan Walker",
   },
   {
      name: "Alan Walker - Alone ",
      path: "audios/2.mp3",
      img: "imagenes/2.jpg",
      singer: "Alan Walker",
   },
   {
      name: "Alan Walker - Power",
      path: "audios/3.mp3",
      img: "imagenes/3.jpg",
      singer: "Alan Walker",
   },
   {
      name: "Alan Walker - The Spectre ",
      path: "audios/4.mp3",
      img: "imagenes/4.jpg",
      singer: "Alan Walker",
   },
   {
      name: "Alan Walker - New Heart",
      path: "audios/5.mp3",
      img: "imagenes/5.jpg",
      singer: "Alan Walker",
   },



];

function load_track(index_no) {
   clearInterval(timer);
   reset_slider();

   timer = setInterval(range_slider, 1000);
   track.src = all_song[index_no].path;
   title.innerHTML = all_song[index_no].name;
   track_image.src = all_song[index_no].img;
   artist.innerHTML = all_song[index_no].singer;
   track.load();

   total.innerHTML = all_song.length;



}
load_track(index_no);





function mute_sound() {
   track.volume = 0;
   volume.value = 0;
   volume_show.innerHTML = 0;


}

function reset_slider() {
   slider.value = 0;
}


function justplay() {
   if (playing_song == false) {
      playsong();
      wave.classList.add('active2');

   } else {
      pausesong();
      wave.classList.remove('active2');
   }
}


function playsong() {
   track.play();
   playing_song = true;
   play.innerHTML = '<i class="fa fa-pause"></i>';

}


function pausesong() {
   track.pause();
   playing_song = false;
   play.innerHTML = '<i class="fa fa-play"></i>';

}


function next_song() {
   if (index_no < all_song.length - 1) {
      index_no += 1;
      load_track(index_no);
      playsong();

   } else {

      index_no = 0;
      load_track(index_no);
      playsong();
   }
}

function previous_song() {
   if (index_no > 0) {
      index_no -= 1;
      load_track(index_no);
      playsong();

   } else {

      index_no = all_song.length;
      load_track(index_no);
      playsong();

   }
}

function volume_change() {
   volume_show.innerHTML = recent_volume.value;
   track.volume = recent_volume.value / 100;
}

function change_duration() {
   slider_position = track.duration * (slider.value / 100);
   track.currentTime = slider_position;
}



function autoplay_switch() {
   if (autoplay == 1) {
      autoplay = 0;
      auto_play.style.background = "#111727";

   } else {
      autoplay = 1;
      auto_play.style.background = "#36e2ec";


   }
}




function range_slider() {

   let position = 0;
   if (!isNaN(track.duration)) {
      position = track.currentTime * (100 / track.duration);
      slider.value = position;
   }


   if (track.ended) {
      play.innerHTML = '<i class="fa fa-play"></i>';
      if (autoplay == 1) {
         index_no += 1;
         load_track(index_no);
         playsong();
      }

   }
}




 ///////////////////////////////////////////////////////////////////////////////




 // const music = new Audio('audios/1.mp3');
// var playpausebtn = document.getElementById('play')
// var count = 0;


// function playPause() {
//     if (count == 0) {
//         count = 1;
//         music.play();
//         playpausebtn.innerHTML = '<i class="fa fa-pause"></i>';
//         wave.classList.add('active2');

//     } else {
//         count = 0;
//         music.pause();
//         playpausebtn.innerHTML = '<i class="fa fa-play"></i>';
//         wave.classList.remove('active2');
//     }
// }

