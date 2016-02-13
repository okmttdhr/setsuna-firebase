import { connect } from 'react-redux'
import userActions from 'actions/user'
import HeaderUser from 'components/Header/User/index'
import styles from './index.scss'

const mapStateToProps = (state) => ({
  user: state.user,
})

export class Header extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    userFirebase: React.PropTypes.object,
  }

  render() {
    return (
      <div className={styles.Header}>
        <HeaderUser {...this.props} />
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...userActions,
})(Header)
