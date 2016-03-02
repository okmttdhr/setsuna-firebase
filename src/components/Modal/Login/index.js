import styles from './index.scss'
import classNames from 'classnames'
import firebaseUtils from 'utils/firebase/index'

export class ModalLogin extends React.Component {
  static propTypes = {
  }

  _loginWithOAuthPopup() {
    firebaseUtils.users.loginWithOAuthPopup('google')
      .then((authData) => firebaseUtils.users.create(authData))
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
          onClick={::this._loginWithOAuthPopup}>
          Login
        </div>
      </div>
    )
  }
}

export default ModalLogin
