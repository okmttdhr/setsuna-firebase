import styles from './index.scss'

export default class HeaderAccount extends React.Component {
  static propTypes = {
    users: React.PropTypes.object.isRequired,
    account: React.PropTypes.object.isRequired,
    initAuth: React.PropTypes.func.isRequired,
    createAuth: React.PropTypes.func.isRequired,
    deleteAuth: React.PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.initAuth()
  }

  render () {
    const {users} = this.props
    return (
      <div className={styles['HeaderAccount']}>
        {users.token
          ? <div>
            <p>{users.google.displayName}</p>
            <p>{users.google.email}</p>
          </div> : null}
        <div>
          {users.isFetching
            ? <p>ログインしています</p> : null}
          {!users.token
            ? <button
              className='btn btn-default'
              onClick={::this.props.createAuth}>
              Login
            </button> : null}
          {users.token
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
