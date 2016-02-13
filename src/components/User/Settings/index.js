import styles from './index.scss'
import i18next from 'i18next'

export default class UserSettings extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object
  }

  constructor () {
    super()
    this.langOptions = [
      {name: 'English', value: 'en'},
      {name: '日本語', value: 'ja'}
    ]
  }

  changeLang (e) {
    i18next.changeLanguage(e.target.value, (err, t) => {
      if (err) {
        alert('言語の切り替えができませんでした。時間が経ってから再度お試しください。')
      }
      location.reload()
    })
  }

  /**
   * ユーザーの名前、メールアドレス、言語情報を表示
   */
  renderInfo () {
    const {userFirebase} = this.props
    if (!userFirebase) {
      return null
    }
    return (
      <div>
        <div>
          <p>{userFirebase[userFirebase.auth.provider].displayName}</p>
          <p>{userFirebase[userFirebase.auth.provider].email}</p>
        </div>
        <select onChange={::this.changeLang}>
          {this.langOptions.map((option, index) => {
            return (
              <option
                key={index}
                value={option.value}
                selected={i18next.language === option.value}>
                  {option.name}
              </option>
            )
          })}
        </select>
      </div>
    )
  }

  render () {
    return (
      <div className={styles['UserSettings']}>
        {this.renderInfo()}
      </div>
    )
  }
}
