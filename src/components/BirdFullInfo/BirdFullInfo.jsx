import React from 'react';
// import PropTypes from 'prop-types';

import BirdImage from '../BirdImage';

import style from './BirdFullInfo.module.scss';

const BirdFullInfo = () => {
  return (
    <div className={style.BirdFullInfo}>
      Слушаем запись на птичьем и пробуем угадать, кто это.
      <BirdImage />
    </div>
  );
};

// BirdFullInfo.defaultProps = {
//   token: null,
// };

BirdFullInfo.propTypes = {
  // score: PropTypes.number.isRequired,
  // activeTabId: PropTypes.number.isRequired,
};

export default BirdFullInfo;
