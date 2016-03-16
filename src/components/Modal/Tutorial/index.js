import styles from './index.scss'
import classNames from 'classnames'
// import i18next from 'i18next'
// import utils from 'utils/index'
// import firebaseUtils from 'utils/firebase/index'

export class ModalTutorial extends React.Component {
  static propTypes = {
  }

  constructor() {
    super()
  }

  render() {
    return (
      <div
        className={classNames({
          [styles.ModalTutorial]: true,
        })}>
        ModalTutorial here
      </div>
    )
  }
}

export default ModalTutorial
