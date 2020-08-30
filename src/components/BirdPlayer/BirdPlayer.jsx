import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';

import './AudioPlayerCustom.scss';
import style from './BirdPlayer.module.scss';

const BirdPlayer = ({ src, isStopPlaying }) => {
  const playerRef = useRef();

  useEffect(() => {
    if (isStopPlaying) {
      playerRef.current.audio.current.pause();
    }
  }, [isStopPlaying]);

  return (
    <AudioPlayer
      className={style.BirdPlayer}
      src={src}
      layout="horizontal-reverse"
      showJumpControls={false}
      customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
      autoPlayAfterSrcChange={false}
      ref={playerRef}
    />
  );
};

BirdPlayer.defaultProps = {
  isStopPlaying: false,
};

BirdPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isStopPlaying: PropTypes.bool,
};

export default BirdPlayer;
