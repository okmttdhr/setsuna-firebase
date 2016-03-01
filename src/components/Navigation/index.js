import styles from './index.scss'

import { connect } from 'react-redux'

import userActions from 'actions/user'
import NavigationPost from 'components/Navigation/Post/index'
import NavigationPosts from 'components/Navigation/Posts/index'
import NavigationStars from 'components/Navigation/Stars/index'
import NavigationUser from 'components/Navigation/User/index'

const mapStateToProps = (state) => ({
  user: state.user,
})

export class Navigation extends React.Component {
  static propTypes = {
  }

  _renderNavigation() {
    return (
      <ul className={styles.Navigation__list}>
        <NavigationPost />
        <NavigationPosts {...this.props} />
        <NavigationStars {...this.props} />
        <NavigationUser {...this.props} />
      </ul>
    )
  }

  render() {
    return (
      <div className={styles.Navigation}>
        {this._renderNavigation()}
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...userActions,
})(Navigation)
