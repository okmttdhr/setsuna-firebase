import styles from './index.scss'
import classNames from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class Modal extends React.Component {
  static propTypes = {
    isShow: React.PropTypes.bool.isRequired,
    toggleShow: React.PropTypes.func.isRequired,
    children: React.PropTypes.element.isRequired,
  }

  render() {
    return (
      <div className={classNames({
        [styles.Modal]: true,
        [styles.isShow]: this.props.isShow,
      })}>
        <div className={styles.Modal__overlay} onClick={::this.props.toggleShow}></div>
        <div className={classNames({
          [styles.Modal__content]: true,
          [styles['Modal__content--isShow']]: this.props.isShow,
        })}>{this.props.children}</div>
      </div>
    )
  }
}

export default Modal

// })} onClick={(e) => e.stopPropagation()}>
// <ReactCSSTransitionGroup transitionName='example' transitionAppear={this.props.isShow}>
