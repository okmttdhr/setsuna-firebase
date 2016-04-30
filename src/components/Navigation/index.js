import './index.scss'

import { connect } from 'react-redux'
import classNames from 'classnames'
import i18next from 'i18next'

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
        <ul className='Navigation__list'>
          <NavigationLogo {...this.props} />
          <NavigationLink
            {...this.props}
            text={i18next.t('login')}
            textIcon=''
            pathname='/timeline'
            requireAuth
            floatRight />
          <NavigationLink
            {...this.props}
            text={i18next.t('signup')}
            textIcon=''
            pathname='/timeline'
            requireAuth
            floatRight />
        </ul>
      )
    }
    return (
      <ul className='Navigation__list'>
        <NavigationPost {...this.props} />
        <NavigationLink
          {...this.props}
          text={i18next.t('home')}
          textIcon='home'
          pathname='/timeline'/>
        <NavigationLink
          {...this.props}
          text={i18next.t('star')}
          textIcon='star'
          pathname='/stars'
          requireAuth />
        <NavigationLink
          {...this.props}
          text={i18next.t('user')}
          textIcon='person'
          pathname='/user'
          requireAuth />
      </ul>
    )
  }

  render() {
    return (
      <div className={classNames({
        Navigation: true,
        'Navigation--top': this.props.location.pathname === '/',
      })}>
        {this._renderNavigation()}
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...userActions,
  ...applicationActions,
})(Navigation)
