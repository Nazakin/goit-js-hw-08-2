import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localKeyStorage = 'videoplayer-current-time';
player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(localKeyStorage, seconds);
  }, 1000)
);
player.setCurrentTime(localStorage.getItem(localKeyStorage) || 0);
    