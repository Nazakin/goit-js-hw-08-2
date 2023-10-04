import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const localStorageKey = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });
    player.on('play', onPlay);
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
    player.on('timeupdate', (data) => {
      const currentTime = data.seconds;
      localStorage.setItem('videoplayer-current-time', currentTime);
    });
    const updateCurrentTime = throttle((currentTime) => {
      localStorage.setItem('videoplayer-current-time', currentTime);
    }, 1000);
    window.addEventListener('DOMContentLoaded', () => {
      const savedTime = localStorage.getItem('videoplayer-current-time');
      if (savedTime !== null) {
        player.setCurrentTime(savedTime).then(function () {
          player.play().then(function () {
          }).catch(function (error) {
            console.error('Помилка при спробі відтворити відео:', error.message);
          });
        }).catch(function (error) {
          console.error('Помилка при встановленні часу відтворення:', error.message);
        });
      }
    });
    