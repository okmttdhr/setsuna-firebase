import styles from './index.scss'
import classNames from 'classnames'

export class ModalPost extends React.Component {
  static propTypes = {
  }

  render() {
    return (
      <div
        className={classNames({
          [styles.ModalPost]: true,
        })}>
        <textarea className={classNames({
          [styles.ModalPost__textarea]: true,
        })}/>
      </div>
    )
  }
}

export default ModalPost
