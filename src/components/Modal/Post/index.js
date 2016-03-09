import styles from './index.scss'
import classNames from 'classnames'

export class ModalPost extends React.Component {
  static propTypes = {
  }

  handleClick() {
  }

  render() {
    return (
      <div
        className={classNames({
          [styles.ModalPost]: true,
        })}>
        <form className={styles.ModalPost__form}>
          <textarea className={classNames({
            [styles.ModalPost__textarea]: true,
          })}/>
          <div className={classNames({
            [styles.ModalPost__submit]: true,
          })} onClick={::this.handleClick}>投稿する</div>
        </form>
      </div>
    )
  }
}

export default ModalPost
