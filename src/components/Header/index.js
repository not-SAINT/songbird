import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = ({ appState: { score, currentLevel } }) => ({
  score,
  currentLevel,
});

export default connect(mapStateToProps)(Header);
