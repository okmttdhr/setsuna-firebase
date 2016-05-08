import styles from './index.scss'
import classNames from 'classnames'
import i18next from 'i18next'
import Alert from 'react-s-alert'

import firebaseUtils from 'utils/firebase/index'

export class ModalLogin extends React.Component {
  static propTypes = {
    toggleModalLogin: React.PropTypes.func.isRequired,
  }

  _loginWithOAuthRedirect(provider) {
    firebaseUtils.users.loginWithOAuthRedirect(provider)
      .catch(() => {
        Alert.error(i18next.t('error__users__login') + i18next.t('tryAgainLater'))
      })
  }

  render() {
    return (
      <div
        className={classNames({
          [styles.ModalLogin]: true,
        })}>
        <div
          className={classNames({
            [styles.ModalLogin__SocialBtn]: true,
            [styles['ModalLogin__SocialBtn--Facebook']]: true,
          })}
          onClick={() => this._loginWithOAuthRedirect('facebook')}>
          Login with Facebook
        </div>
        <div
          className={classNames({
            [styles.ModalLogin__SocialBtn]: true,
            [styles['ModalLogin__SocialBtn--Twitter']]: true,
          })}
          onClick={() => this._loginWithOAuthRedirect('twitter')}>
          Login with Twitter
        </div>
        <div
          className={classNames({
            [styles.ModalLogin__SocialBtn]: true,
            [styles['ModalLogin__SocialBtn--Google']]: true,
          })}
          onClick={() => this._loginWithOAuthRedirect('google')}>
          Login with Google
        </div>
      </div>
    )
  }
}

export default ModalLogin
