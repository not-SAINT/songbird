import { connect } from 'react-redux';

import ScoreInceaserPanel from './ScoreInceaserPanel';

const mapStateToProps = ({ appState: { countErrors, isNextRoundReady } }) => ({
  countErrors,
  isNextRoundReady,
});

export default connect(mapStateToProps)(ScoreInceaserPanel);
