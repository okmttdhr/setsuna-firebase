import styles from './index.scss'
import classNames from 'classnames'
import utils from 'utils/index'
import firebaseUtils from 'utils/firebase/index'

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
