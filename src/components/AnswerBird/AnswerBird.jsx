import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './AnswerBird.module.scss';

const AnswerBird = ({
  answer,
  id,
  rightAnswer,
  setRoundEnd,
  isNextRoundReady,
  isResetSelectedAnswers,
}) => {
  const [answerState, setAnswerState] = useState(0);

  const answerClasses = cn(
    style.AnswerBird,
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
    if (isNextRoundReady) {
      return null;
    }

    if (rightAnswer === answer) {
      setAnswerState(1);
      setRoundEnd(true);
    } else {
      setAnswerState(-1);
    }

    return null;
  };

  return (
    <div
      className={answerClasses}
      onClick={handlerClick}
      onKeyUp={handlerClick}
      role="button"
      tabIndex={id}
    >
      <span>{answer}</span>
    </div>
  );
};

AnswerBird.propTypes = {
  answer: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rightAnswer: PropTypes.string.isRequired,
  isNextRoundReady: PropTypes.bool.isRequired,
  setRoundEnd: PropTypes.func.isRequired,
  isResetSelectedAnswers: PropTypes.bool.isRequired,
};

export default AnswerBird;
