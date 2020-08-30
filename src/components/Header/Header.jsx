import React from 'react';
import PropTypes from 'prop-types';

import RoundTab from '../RoundTab';
import ScoreInceaserPanel from '../ScoreInceaserPanel';
import menuTabs from '../../constants/round-tabs';

import style from './Header.module.scss';

const Header = ({ score, currentLevel }) => {
  const tabs = menuTabs.map(({ id, name }) => {
    return <RoundTab id={id} name={name} currentLevel={currentLevel} key={id} />;
  });

  return (
    <header className={style.Header__wrapper}>
      <div className={style.Header}>
        <h1 className={style.Header__logo}>
          <span>Song</span>
          <span className={style['Header__logo-last']}>bird</span>
        </h1>
        <span className={style.Header__score}>{`Очки: ${score}`}</span>
        <ScoreInceaserPanel />
      </div>
      <div className={style.Header__menu}>{tabs}</div>
    </header>
  );
};

Header.propTypes = {
  score: PropTypes.number.isRequired,
  currentLevel: PropTypes.number.isRequired,
};

export default Header;
