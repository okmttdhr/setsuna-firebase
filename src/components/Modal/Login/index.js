import styles from './index.scss'
import classNames from 'classnames'

export class ModalLogin extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div
        className={classNames({
          [styles.ModalLogin]: true,
        })}>
        ModalLogin
      </div>
    )
  }
}

export default ModalLogin
