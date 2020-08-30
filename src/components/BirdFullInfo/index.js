import { connect } from 'react-redux';

import BirdFullInfo from './BirdFullInfo';

const mapStateToProps = ({ appState: { currentBirdInfo } }) => ({
  currentBirdInfo,
});

export default connect(mapStateToProps)(BirdFullInfo);
