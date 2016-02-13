import styles from './index.scss'
import classNames from 'classnames'
import firebaseUtils from 'utils/firebase/index'

export default class HeaderUser extends React.Component {
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
      <div className={classNames({
        [styles['HeaderUser']]: true
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
              onClick={::this.logout}>
              Logout
            </button>
            : <button
              className={classNames({
                test: true
              })}
              onClick={::this.loginWithOAuthPopup}>
              Login
            </button>}
        </div>
      </div>
    )
  }
}
