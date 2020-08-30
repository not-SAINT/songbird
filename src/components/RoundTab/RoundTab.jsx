import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './RoundTab.module.scss';

const RoundTab = ({ id, name, currentLevel }) => {
  const tabClasses = cn(style.RoundTab, {
    [style['RoundTab-active']]: id === currentLevel,
  });

  return <span className={tabClasses}>{name}</span>;
};

RoundTab.propTypes = {
  id: PropTypes.number.isRequired,
  currentLevel: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default RoundTab;
