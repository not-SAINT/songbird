import React from 'react';
// import PropTypes from 'prop-types';

import BirdImage from '../BirdImage';

import style from './QuestionBlock.module.scss';

const QuestionBlock = () => {
  return (
    <div className={style.QuestionBlock}>
      <BirdImage />
    </div>
  );
};

QuestionBlock.propTypes = {
  // score: PropTypes.number.isRequired,
  // activeTabId: PropTypes.number.isRequired,
};

export default QuestionBlock;
