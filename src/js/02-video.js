import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timeSetter = checkLS();

player.setCurrentTime(timeSetter);

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(data.seconds)
    );
  }, 1000)
);

function checkLS() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime === null) {
    return 0;
  }

  return JSON.parse(currentTime);
}
