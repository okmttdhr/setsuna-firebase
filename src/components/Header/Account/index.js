import styles from './index.scss'

export default class HeaderAccount extends React.Component {
  static propTypes = {
    user: React.PropTypes.object.isRequired,
    initAuth: React.PropTypes.func.isRequired,
    createAuth: React.PropTypes.func.isRequired,
    deleteAuth: React.PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.initAuth()
  }

  render () {
    const {user} = this.props
    return (
      <div className={styles['HeaderAccount']}>
        {user.token
          ? <div>
            <p>{user.google.displayName}</p>
            <p>{user.google.email}</p>
          </div> : null}
        <div>
          {user.isFetching
            ? <p>ログインしています</p> : null}
          {!user.token
            ? <button
              className='btn btn-default'
              onClick={::this.props.createAuth}>
              Login
            </button> : null}
          {user.token
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
