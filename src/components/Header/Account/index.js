import styles from './index.scss'
import firebaseUtils from 'utils/firebase/index'

export default class HeaderAccount extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object
  }

  loginWithOAuthPopup () {
    firebaseUtils.users.loginWithOAuthPopup('google')
      .then((authData) => {
        return firebaseUtils.users.create(authData)
      })
      .catch(() => {
        alert('ログインできませんでした。時間が経ってから再度お試しください。')
      })
  }

  logout () {
    firebaseUtils.users.logout()
  }

  render () {
    const {userFirebase} = this.props
    return (
      <div className={styles['HeaderAccount']}>
        {userFirebase
          ? <div>
            <p>{userFirebase.google.displayName}</p>
            <p>{userFirebase.google.email}</p>
          </div> : null}
        <div>
          {userFirebase
            ? <button
              className='btn btn-default'
              onClick={::this.logout}>
              Logout
            </button>
            : <button
              className='btn btn-default'
              onClick={::this.loginWithOAuthPopup}>
              Login
            </button>}
        </div>
      </div>
    )
  }
}
