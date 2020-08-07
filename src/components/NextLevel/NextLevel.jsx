import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { MAX_LEVEL } from '../../constants/common';

import style from './NextLevel.module.scss';

const NextLevel = ({
  isNextRoundReady,
  currentLevel,
  goToNextLevel,
  setRoundEnd,
  resetSelectedAnswers,
  resetCountErrors,
  resetCurrentBirdInfo,
}) => {
  const btnClasses = cn(style.NextLevel, { [style['NextLevel--active']]: isNextRoundReady });

  const handlerNextLevelClick = () => {
    setRoundEnd(false);
    resetCountErrors();
    resetCurrentBirdInfo();
    resetSelectedAnswers();

    if (currentLevel < MAX_LEVEL) {
      goToNextLevel();
    }

    if (currentLevel === MAX_LEVEL) {
      // console.log(`Игра окончена. Итоговый счет: ${score}`);
    }
  };

  return (
    <button
      className={btnClasses}
      type="button"
      onClick={handlerNextLevelClick}
      disabled={!isNextRoundReady}
    >
      Следующий уровень
    </button>
  );
};

NextLevel.propTypes = {
  isNextRoundReady: PropTypes.bool.isRequired,
  currentLevel: PropTypes.number.isRequired,
  goToNextLevel: PropTypes.func.isRequired,
  setRoundEnd: PropTypes.func.isRequired,
  resetSelectedAnswers: PropTypes.func.isRequired,
  resetCountErrors: PropTypes.func.isRequired,
  resetCurrentBirdInfo: PropTypes.func.isRequired,
};

export default NextLevel;
