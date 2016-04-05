class CustomAlert extends React.Component {
  static propTypes = {
    styles: React.PropTypes.object.isRequired,
    handleClose: React.PropTypes.func.isRequired,
    id: React.PropTypes.string.isRequired,
    message: React.PropTypes.string.isRequired,
    classNames: React.PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.classNames} id={this.props.id} style={this.props.styles}>
        <div className='s-alert-box-inner'>{this.props.message}</div>
        <span className='s-alert-close' onClick={this.props.handleClose}></span>
      </div>
    )
  }
}

export default CustomAlert
