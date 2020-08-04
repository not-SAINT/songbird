import { connect } from 'react-redux';

import NextLevel from './NextLevel';

import {
  goToNextLevel,
  setRoundEnd,
  resetSelectedAnswers,
  resetCountErrors,
  resetCurrentBirdInfo,
} from '../../redux/actions/creators/app-state';

const mapStateToProps = ({ appState: { isNextRoundReady, currentLevel } }) => ({
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
