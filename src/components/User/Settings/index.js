import styles from './index.scss'
// import firebaseUtils from 'utils/firebase/index'

export default class UserSettings extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object
  }

  render () {
    const {userFirebase} = this.props
    const provider = userFirebase.auth.provider
    return (
      <div className={styles['UserSettings']}>
        {userFirebase
          ? <div>
            <p>{userFirebase[provider].displayName}</p>
            <p>{userFirebase[provider].email}</p>
          </div> : null}
      </div>
    )
  }
}
