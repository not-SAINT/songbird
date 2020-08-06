import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import QuestionBlock from '../QuestionBlock';
import AnswersBlock from '../AnswersBlock';
import BirdFullInfo from '../BirdFullInfo';
import NextLevel from '../NextLevel';
import { getRandomAnswerIndex } from '../../helpers/random-utils';
import birds from '../../constants/birds';

import style from './App.module.scss';

const App = ({ currentLevel }) => {
  const rightAnswerID = getRandomAnswerIndex();
  const rightBirdInfo = birds[currentLevel][rightAnswerID];

  return (
    <div className={style.App__wrapper}>
      <Header />
      <QuestionBlock rightBirdInfo={rightBirdInfo} />
      <div className={style.App__answers}>
        <AnswersBlock rightAnswerID={rightAnswerID} />
        <BirdFullInfo />
      </div>
      <NextLevel />
    </div>
  );
};

App.propTypes = {
  currentLevel: PropTypes.number.isRequired,
};

export default App;
