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
    return (
      <div className='HeaderAccount'>
        {this.props.account.isFetching
          ? <p>ログインしています</p> : null}
        {!this.props.account.token
          ? <button
            className='btn btn-default'
            onClick={::this.props.createAuth}>
            Login
          </button> : null}
        {this.props.account.token
          ? <button
            className='btn btn-default'
            onClick={::this.props.deleteAuth}>
            Logout
          </button> : null}
      </div>
    )
  }
}

export default HeaderAccount
