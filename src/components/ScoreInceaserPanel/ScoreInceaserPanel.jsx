import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { MAX_REWARD } from '../../constants/common';

import style from './ScoreInceaserPanel.module.scss';

const ScoreInceaserPanel = ({ countErrors, isNextRoundReady }) => {
  const text = isNextRoundReady ? `+ ${MAX_REWARD - countErrors}` : '';
  const scoreClasses = cn(style.ScoreInceaserPanel, {
    [style['ScoreInceaserPanel--hide']]: isNextRoundReady,
  });

  return <span className={scoreClasses}>{text}</span>;
};

ScoreInceaserPanel.propTypes = {
  countErrors: PropTypes.number.isRequired,
  isNextRoundReady: PropTypes.bool.isRequired,
};

export default ScoreInceaserPanel;
