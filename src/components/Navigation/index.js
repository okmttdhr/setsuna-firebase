import styles from './index.scss'

import { connect } from 'react-redux'

import userActions from 'actions/user'
import applicationActions from 'actions/application'
import NavigationPost from 'components/Navigation/Post/index'
import NavigationPosts from 'components/Navigation/Posts/index'
import NavigationStars from 'components/Navigation/Stars/index'
import NavigationUser from 'components/Navigation/User/index'
import NavigationLogo from 'components/Navigation/Logo/index'

const mapStateToProps = (state) => ({
  user: state.user,
  application: state.application,
})

export class Navigation extends React.Component {
  static propTypes = {
    location: React.PropTypes.object.isRequired,
  }

  _renderNavigation() {
    if (this.props.location.pathname === '/') {
      return (
        <ul className={styles.Navigation__list}>
          <NavigationLogo {...this.props} />
        </ul>
      )
    }
    return (
      <ul className={styles.Navigation__list}>
        <NavigationPost {...this.props} />
        <NavigationPosts {...this.props} />
        <NavigationStars {...this.props} />
        <NavigationUser {...this.props} />
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
  ...applicationActions,
})(Navigation)
