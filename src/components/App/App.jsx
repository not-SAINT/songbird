import React from 'react';
// import PropTypes from 'prop-types';

import Header from '../Header';
import QuestionBlock from '../QuestionBlock';
import AnswersBlock from '../AnswersBlock';
import BirdFullInfo from '../BirdFullInfo';
import NextLevel from '../NextLevel';

import style from './App.module.scss';

const App = () => {
  return (
    <div className={style.App__wrapper}>
      <Header />
      <QuestionBlock />
      <div className={style.App__answers}>
        <AnswersBlock />
        <BirdFullInfo />
      </div>
      <NextLevel />
    </div>
  );
};

export default App;
