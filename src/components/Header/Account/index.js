import styles from './index.scss'

export default class HeaderAccount extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    userFirebase: React.PropTypes.object,
    createAuth: React.PropTypes.func.isRequired,
    deleteAuth: React.PropTypes.func.isRequired
  }

  render () {
    const {user, userFirebase} = this.props
    console.log('userFirebase-----------------------------')
    console.log(userFirebase)
    return (
      <div className={styles['HeaderAccount']}>
        {userFirebase
          ? <div>
            <p>{userFirebase.google.displayName}</p>
            <p>{userFirebase.google.email}</p>
          </div> : null}
        <div>
          {user.isFetching
            ? <p>ログインしています</p> : null}
          {!userFirebase
            ? <button
              className='btn btn-default'
              onClick={::this.props.createAuth}>
              Login
            </button> : null}
          {userFirebase
            ? <button
              className='btn btn-default'
              onClick={::this.props.deleteAuth}>
              Logout
            </button> : null}
        </div>
      </div>
    )
  }
}
