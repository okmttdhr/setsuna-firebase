import styles from './index.scss'

import { connect } from 'react-redux'

import userActions from 'actions/user'
import applicationActions from 'actions/application'
import NavigationPost from 'components/Navigation/Post/index'
import NavigationLogo from 'components/Navigation/Logo/index'
import NavigationLink from 'components/Navigation/Link/index'

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
        <NavigationLink
          {...this.props}
          text='Home'
          textIcon='home'
          pathname='/timeline'
          requireAuth={false} />
        <NavigationLink
          {...this.props}
          text='Star'
          textIcon='star'
          pathname='/stars'
          requireAuth />
        <NavigationLink
          {...this.props}
          text='You'
          textIcon='person'
          pathname='/user'
          requireAuth />
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
