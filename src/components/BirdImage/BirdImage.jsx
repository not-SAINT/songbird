import React from 'react';
import PropTypes from 'prop-types';

import birdTemplate from '../../img/bird-template.png';

import style from './BirdImage.module.scss';

const BirdImage = ({ imgSrc, imgAlt }) => {
  return <img className={style.BirdImage} src={imgSrc} alt={imgAlt} />;
};

BirdImage.defaultProps = {
  imgSrc: birdTemplate,
  imgAlt: 'Дефолтная птичка',
};

BirdImage.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default BirdImage;
