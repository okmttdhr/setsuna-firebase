import './index.scss'
import classNames from 'classnames'
import config from 'utils/config'

export class Modal extends React.Component {
  static propTypes = {
    isShow: React.PropTypes.bool.isRequired,
    toggleShow: React.PropTypes.func.isRequired,
    children: React.PropTypes.element.isRequired,
    styleMdOverlay: React.PropTypes.object,
    styleSmOverlay: React.PropTypes.object,
    styleMdContent: React.PropTypes.object,
    styleSmContent: React.PropTypes.object,
  }

  render() {
    const styleOverlay = window.innerWidth <= config.SCREEN_SM
      ? this.props.styleSmOverlay : this.props.styleMdOverlay
    const styleContent = window.innerWidth <= config.SCREEN_SM
      ? this.props.styleSmContent : this.props.styleMdContent
    return (
      <div
        className={classNames({
          Modal: true,
          isShow: this.props.isShow,
        })}>
        <div className='Modal__overlay' style={styleOverlay} onClick={this.props.toggleShow}></div>
        <div className='Modal__content' style={styleContent} onClick={(e) => e.stopPropagation()}>
          {this.props.children}
        </div>
        <i
          className={classNames({
            Modal__close: true,
            'material-icons': true,
          })}
          onClick={this.props.toggleShow}>
          clear
        </i>
      </div>
    )
  }
}

export default Modal
