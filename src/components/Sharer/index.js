import styles from './index.scss'

export default class Sharer extends React.Component {
  static propTypes = {
  }

  handleclick(e) {
    e.stopPropagation()
    console.log('modalでも開く')
  }

  render() {
    return (
      <div className={styles.Sharer} onClick={::this.handleclick}>
      </div>
    )
  }
}
