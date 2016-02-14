import { connect } from 'react-redux'
import userActions from 'actions/user'
import NavigationUser from 'components/Navigation/User/index'
import styles from './index.scss'

const mapStateToProps = (state) => ({
  user: state.user,
})

export class Navigation extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    userFirebase: React.PropTypes.object,
  }

  render() {
    return (
      <div className={styles.Navigation}>
        <NavigationUser {...this.props} />
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...userActions,
})(Navigation)
