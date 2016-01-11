import { connect } from 'react-redux'
import accountActions from 'actions/account'
import HeaderAccount from 'components/Header/Account/index'
import styles from './index.scss'

const mapStateToProps = (state) => ({
  account: state.account
})

export class Header extends React.Component {
  static propTypes = {
    account: React.PropTypes.object.isRequired,
    initAuth: React.PropTypes.func.isRequired,
    createAuth: React.PropTypes.func.isRequired,
    deleteAuth: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div className={styles['Header']}>
        <HeaderAccount {...this.props} />
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...accountActions
})(Header)
