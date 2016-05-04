import './index.scss'

export class Footer extends React.Component {
  static propTypes = {}

  constructor() {
    super()
  }

  render() {
    return (
      <div className='Footer'>
        <a className='Footer__link--github' href='https://github.com/okmttdhr/setsuna-firebase' target='_blank'></a>
      </div>
    )
  }
}

export default Footer
