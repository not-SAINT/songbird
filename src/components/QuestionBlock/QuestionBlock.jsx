import React from 'react';
// import PropTypes from 'prop-types';

import BirdImage from '../BirdImage';

import style from './QuestionBlock.module.scss';

const QuestionBlock = () => {
  return (
    <div className={style.QuestionBlock}>
      <div>
        <BirdImage />
      </div>

      <div className={style.QuestionBlock__headers}>
        <h2>************</h2>
        <hr />
      </div>
    </div>
  );
};

QuestionBlock.propTypes = {
  // score: PropTypes.number.isRequired,
  // activeTabId: PropTypes.number.isRequired,
};

export default QuestionBlock;
