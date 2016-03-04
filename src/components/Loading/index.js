import styles from './index.scss'
import classNames from 'classnames'

export class Loading extends React.Component {
  static propTypes = {
  }

  constructor() {
    super()
  }

  render() {
    return (
      <div className={classNames({
        [styles.Loading]: true,
      })}>
        <i className={classNames({
          [styles.Loading__icon]: true,
          'material-icons': true,
        })}>autorenew</i>
      </div>
    )
  }
}

export default Loading
