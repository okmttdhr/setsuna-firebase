import './index.scss'

import i18next from 'i18next'

export class NotFoundView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {}

  render() {
    return (
      <div className='NotFoundView'>
        <a href='/#/' className='NotFoundView__link'>
          {i18next.t('error__404')}
        </a>
      </div>
    )
  }
}

export default NotFoundView
