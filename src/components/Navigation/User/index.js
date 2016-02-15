import styles from './index.scss'

export default class NavigationUser extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div className={styles.NavigationUser}>
        <i className='material-icons'>person</i>
      </div>
    )
  }
}
