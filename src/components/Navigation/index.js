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
    user: React.PropTypes.object.isRequired,
    userFirebase: React.PropTypes.object,
  }

  render() {
    return (
      <div className={styles.Navigation}>
        <ul className={styles.Navigation__list}>
          <li>
            <NavigationPost />
          </li>
          <li>
            <NavigationPosts />
          </li>
          <li>
            <NavigationStars />
          </li>
          <li>
            <NavigationUser {...this.props} />
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  ...userActions,
})(Navigation)
