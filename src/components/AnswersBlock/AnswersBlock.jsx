import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import AnswerBird from '../AnswerBird';
import birds from '../../constants/birds';
import { getRandomAnswerIndex } from '../../helpers/random-utils';

import style from './AnswersBlock.module.scss';

const AnswersBlock = ({ currentLevel, isNextRoundReady, setSelectedAnswers }) => {
  const rightAnswerID = getRandomAnswerIndex();
  const roundBirds = birds[currentLevel];
  const rightAnswer = roundBirds[rightAnswerID].name;
  const answers = roundBirds.map(({ id, name }) => {
    return <AnswerBird answer={name} id={id} rightAnswer={rightAnswer} key={id} />;
  });

  useEffect(() => {
    setSelectedAnswers();
  }, [currentLevel, setSelectedAnswers]);

  if (!isNextRoundReady) {
    // eslint-disable-next-line no-console
    console.log(`Правильный ответ: ${rightAnswer}`);
  }

  return <div className={style.AnswersBlock}>{answers}</div>;
};

AnswersBlock.propTypes = {
  currentLevel: PropTypes.number.isRequired,
  isNextRoundReady: PropTypes.bool.isRequired,
  setSelectedAnswers: PropTypes.func.isRequired,
};

export default AnswersBlock;
