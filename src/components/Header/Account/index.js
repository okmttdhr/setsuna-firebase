import styles from './index.scss'

export class HeaderAccount extends React.Component {
  static propTypes = {
    account: React.PropTypes.object.isRequired,
    initAuth: React.PropTypes.func.isRequired,
    createAuth: React.PropTypes.func.isRequired,
    deleteAuth: React.PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.initAuth()
  }

  render () {
    const {account} = this.props
    return (
      <div className={styles['HeaderAccount']}>
        <div>
          <p>{account.google.displayName}</p>
          <p>{account.google.email}</p>
        </div>
        <div>
          {account.isFetching
            ? <p>ログインしています</p> : null}
          {!account.token
            ? <button
              className='btn btn-default'
              onClick={::this.props.createAuth}>
              Login
            </button> : null}
          {account.token
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

export default HeaderAccount
