import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');


const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(async (data) => {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime.toString());
}, 1000)); 


window.addEventListener('load', () => {
  const storedTime = localStorage.getItem('videoplayer-current-time');
  if (storedTime !== null) {
    player.setCurrentTime(parseFloat(storedTime));
  }
});


