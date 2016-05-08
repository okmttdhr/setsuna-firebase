import './index.scss'

import i18next from 'i18next'

export class NotFoundView extends React.Component {
  static propTypes = {
    text: React.PropTypes.string,
  }

  constructor() {
    super()
  }

  componentDidMount() {}

  render() {
    const { text } = this.props
    return (
      <div className='NotFoundView'>
        {
          text
          ? <p className='NotFoundView__text'>{text}</p>
          : <a href='/#/' className='NotFoundView__text NotFoundView__text--link'>
            {i18next.t('error__404')}
          </a>
        }
      </div>
    )
  }
}

export default NotFoundView
