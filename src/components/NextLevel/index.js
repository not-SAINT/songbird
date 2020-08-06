import { connect } from 'react-redux';

import NextLevel from './NextLevel';

import {
  goToNextLevel,
  setRoundEnd,
  resetSelectedAnswers,
  resetCountErrors,
  resetCurrentBirdInfo,
} from '../../redux/actions/creators/app-state';

const mapStateToProps = ({ appState: { score, isNextRoundReady, currentLevel } }) => ({
  score,
  isNextRoundReady,
  currentLevel,
});

const actionCreators = {
  goToNextLevel,
  setRoundEnd,
  resetSelectedAnswers,
  resetCountErrors,
  resetCurrentBirdInfo,
};

export default connect(mapStateToProps, actionCreators)(NextLevel);
