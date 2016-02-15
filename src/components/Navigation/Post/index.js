import styles from './index.scss'

export default class NavigationPost extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className={styles.NavigationPost}>
        <i className='material-icons'>edit</i>
      </div>
    )
  }
}
