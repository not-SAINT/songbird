import { VOLUME_LEVEL_DEFAULT } from '../constants/common';

import successSound from '../sounds/correct.mp3';
import errorSound from '../sounds/error.mp3';

export const playSound = (source, volume = VOLUME_LEVEL_DEFAULT) => {
  if (source) {
    const audio = new Audio();
    audio.src = source;
    audio.volume = volume;
    audio.autoplay = true;
  }
};

export const playSuccess = () => playSound(successSound);

export const playError = () => playSound(errorSound);
