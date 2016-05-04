import './index.scss'
import i18next from 'i18next'

export class Footer extends React.Component {
  static propTypes = {
    location: React.PropTypes.object.isRequired,
  }

  constructor() {
    super()
  }

  render() {
    return (
      <div className='Footer'>
        {this.props.location.pathname === '/'
          ? <a className='Footer__link--github' href='https://github.com/okmttdhr/setsuna-firebase' target='_blank'></a>
          : <a className='Footer__link--about' href='/#/'>{i18next.t('aboutSetsuna')}</a>
        }
      </div>
    )
  }
}

export default Footer
