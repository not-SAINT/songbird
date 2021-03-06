import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { playSuccess, playError } from '../../helpers/audio-utils';
import { MAX_REWARD } from '../../constants/common';

import style from './AnswerBird.module.scss';

const AnswerBird = ({
  birdInfo,
  rightAnswer,
  countErrors,
  setRoundEnd,
  isNextRoundReady,
  isResetSelectedAnswers,
  increaseScore,
  increaseCountErrors,
  setCurrentBirdInfo,
}) => {
  const [answerState, setAnswerState] = useState(0);
  const { id, name } = birdInfo;
  const indicatorClasses = cn(
    style.AnswerBird__indicator,
    {
      [style['AnswerBird-error']]: answerState < 0,
    },
    {
      [style['AnswerBird-right']]: answerState > 0,
    }
  );

  useEffect(() => {
    if (isResetSelectedAnswers) {
      setAnswerState(0);
    }
  }, [isResetSelectedAnswers]);

  const handlerClick = () => {
    setCurrentBirdInfo(birdInfo);

    if (isNextRoundReady || answerState < 0) {
      return null;
    }

    if (answerState === 0 && rightAnswer !== name) {
      playError();
      setAnswerState(-1);
      increaseCountErrors();
      return null;
    }

    setAnswerState(1);
    setRoundEnd(true);
    increaseScore(MAX_REWARD - countErrors);
    playSuccess();

    return null;
  };

  return (
    <div
      className={style.AnswerBird}
      onClick={handlerClick}
      onKeyUp={handlerClick}
      role="button"
      tabIndex={id}
    >
      <span>{name}</span>
      <div className={indicatorClasses} />
    </div>
  );
};

AnswerBird.propTypes = {
  birdInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  rightAnswer: PropTypes.string.isRequired,
  countErrors: PropTypes.number.isRequired,
  isNextRoundReady: PropTypes.bool.isRequired,
  setRoundEnd: PropTypes.func.isRequired,
  isResetSelectedAnswers: PropTypes.bool.isRequired,
  increaseScore: PropTypes.func.isRequired,
  increaseCountErrors: PropTypes.func.isRequired,
  setCurrentBirdInfo: PropTypes.func.isRequired,
};

export default AnswerBird;
