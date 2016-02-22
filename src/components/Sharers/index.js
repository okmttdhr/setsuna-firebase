import styles from './index.scss'

export default class Sharers extends React.Component {
  static propTypes = {
  }

  handleclick(e) {
    e.stopPropagation()
    console.log('modalでも開く')
  }

  render() {
    return (
      <div className={styles.Sharers} onClick={::this.handleclick}>
      </div>
    )
  }
}
