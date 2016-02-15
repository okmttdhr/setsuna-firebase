import styles from './index.scss'
import classNames from 'classnames'

export default class NavigationPost extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className={styles.NavigationPost}>
        <i className={classNames({
          [styles.NavigationPost__icon]: true,
          'material-icons': true,
        })}>edit</i>
      </div>
    )
  }
}
