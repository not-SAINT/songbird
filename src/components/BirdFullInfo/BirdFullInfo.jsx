import React from 'react';
import PropTypes from 'prop-types';

import BirdImage from '../BirdImage';
import birdTemplateImage from '../../img/bird-template.png';

import style from './BirdFullInfo.module.scss';
import BirdPlayer from '../BirdPlayer/BirdPlayer';

const birdTemplate = {
  name: '****',
  species: '*****',
  description: '*****',
  image: birdTemplateImage,
  audio: '',
};

const BirdFullInfo = ({ currentBirdInfo }) => {
  const { name, species, image, description, audio } = currentBirdInfo || birdTemplate;

  return (
    <div className={style.BirdFullInfo}>
      {!currentBirdInfo && <p>Слушаем запись на птичьем и пробуем угадать, кто это.</p>}
      {currentBirdInfo && (
        <>
          <div className={style.BirdFullInfo__container}>
            <div>
              <BirdImage imgSrc={image} />
            </div>
            <div className={style.BirdFullInfo__headers}>
              <h2>{name}</h2>
              <hr />
              <h4 className={style.BirdFullInfo__header}>{species}</h4>
              <hr />
              <BirdPlayer src={audio} />
            </div>
          </div>
          <p className={style.BirdFullInfo__text}>{description}</p>
        </>
      )}
    </div>
  );
};

BirdFullInfo.defaultProps = {
  currentBirdInfo: null,
};

BirdFullInfo.propTypes = {
  currentBirdInfo: PropTypes.objectOf(PropTypes.any),
};

export default BirdFullInfo;
