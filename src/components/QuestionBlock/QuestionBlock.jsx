import React from 'react';
import PropTypes from 'prop-types';

import BirdImage from '../BirdImage';
import { HIDDEN_BIRD_NAME } from '../../constants/common';

import style from './QuestionBlock.module.scss';

const QuestionBlock = ({ rightBirdInfo, isNextRoundReady }) => {
  const { name, audio, image } = rightBirdInfo;
  const birdName = isNextRoundReady ? name : HIDDEN_BIRD_NAME;
  const birdImage = isNextRoundReady ? <BirdImage imgSrc={image} /> : <BirdImage />;

  return (
    <div className={style.QuestionBlock}>
      <div>{birdImage}</div>

      <div className={style.QuestionBlock__headers}>
        <h2 className={style.QuestionBlock__header}>{birdName}</h2>
        <hr />
        <p>{audio}</p>
      </div>
    </div>
  );
};

QuestionBlock.propTypes = {
  rightBirdInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  isNextRoundReady: PropTypes.bool.isRequired,
};

export default QuestionBlock;
