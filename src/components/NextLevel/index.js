import { connect } from 'react-redux';

import NextLevel from './NextLevel';

import {
  goToNextLevel,
  setRoundEnd,
  resetSelectedAnswers,
} from '../../redux/actions/creators/app-state';

const mapStateToProps = ({ appState: { isNextRoundReady, currentLevel } }) => ({
  isNextRoundReady,
  currentLevel,
});

const actionCreators = {
  goToNextLevel,
  setRoundEnd,
  resetSelectedAnswers,
};

export default connect(mapStateToProps, actionCreators)(NextLevel);
