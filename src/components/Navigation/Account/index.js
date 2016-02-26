import styles from './index.scss'
import classNames from 'classnames'
import firebaseUtils from 'utils/firebase/index'

export default class NavigationAccount extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,
  }

  _loginWithOAuthPopup() {
    firebaseUtils.users.loginWithOAuthPopup('google')
      .then((authData) => firebaseUtils.users.create(authData))
      .catch(() => {
        alert('ログインできませんでした。時間が経ってから再度お試しください。')
      })
  }

  _logout() {
    firebaseUtils.users.logout()
  }

  render() {
    const { userFirebase } = this.props
    return (
      <div className={classNames({
        [styles.NavigationAccount]: true,
      })}>
        {userFirebase
          ? <div>
            <p>{userFirebase[userFirebase.auth.provider].displayName}</p>
            <p>{userFirebase[userFirebase.auth.provider].email}</p>
          </div> : null}
        <div>
          {userFirebase
            ? <button
              className='btn btn-default'
              onClick={::this._logout}>
              Logout
            </button>
            : <button
              className={classNames({
                test: true,
              })}
              onClick={::this._loginWithOAuthPopup}>
              Login
            </button>}
        </div>
      </div>
    )
  }
}
