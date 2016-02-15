import styles from './index.scss'

import { connect } from 'react-redux'

import userActions from 'actions/user'
import NavigationPost from 'components/Navigation/Post/index'
import NavigationPosts from 'components/Navigation/Posts/index'
import NavigationStars from 'components/Navigation/Stars/index'
import NavigationUser from 'components/Navigation/User/index'
import NavigationAccount from 'components/Navigation/Account/index'

const mapStateToProps = (state) => ({
  user: state.user,
})

export class Navigation extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    userFirebase: React.PropTypes.object,
  }

  _renderNavigation() {
    if (!this.props.userFirebase) {
      return (
        <NavigationAccount {...this.props} />
      )
    }
    return (
      <ul className={styles.Navigation__list}>
        <li>
          <NavigationPost />
        </li>
        <li>
          <NavigationPosts />
        </li>
        <li>
          <NavigationStars />
        </li>
        <li>
          <NavigationUser />
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div className={styles.Navigation}>
        {this._renderNavigation()}
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...userActions,
})(Navigation)
