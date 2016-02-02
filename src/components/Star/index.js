import styles from './index.scss'

export default class Star extends React.Component {
  static propTypes = {
  }

  handleClick (e) {
    console.log('log!')
    e.stopPropagation()
  }

  render () {
    return (
      <div className={styles['Star']} onClick={::this.handleClick}>
        star
      </div>
    )
  }
}
