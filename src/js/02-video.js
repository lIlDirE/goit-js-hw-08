import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const getLocalTime = localStorage.getItem('videoplayer-current-time');

player.on("timeupdate", throttle(function (data) {
   localStorage.setItem('videoplayer-current-time', data.seconds)
},1000))

function setCurrentTime(){
	const time = localStorage.getItem('videoplayer-current-time');
	player.setCurrentTime(time);
}

if(getLocalTime){
	setCurrentTime();
}