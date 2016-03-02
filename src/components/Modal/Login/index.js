import styles from './index.scss'
import classNames from 'classnames'
import firebaseUtils from 'utils/firebase/index'

export class ModalLogin extends React.Component {
  static propTypes = {
    toggleModalLogin: React.PropTypes.func.isRequired,
  }

  _loginWithOAuthPopup(provider) {
    firebaseUtils.users.loginWithOAuthPopup(provider)
      .then((authData) => firebaseUtils.users.create(authData))
      .then(() => this.props.toggleModalLogin())
      .catch(() => {
        alert('ログインできませんでした。時間が経ってから再度お試しください。')
      })
  }

  render() {
    return (
      <div
        className={classNames({
          [styles.ModalLogin]: true,
        })}>
        <div
          className={classNames({})}
          onClick={() => this._loginWithOAuthPopup('facebook')}>
          Login with Facebook
        </div>
        <div
          className={classNames({})}
          onClick={() => this._loginWithOAuthPopup('google')}>
          Login with Google
        </div>
      </div>
    )
  }
}

export default ModalLogin
