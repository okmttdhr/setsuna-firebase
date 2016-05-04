import styles from './index.scss'
import i18next from 'i18next'
import classNames from 'classnames'
import firebaseUtils from 'utils/firebase/index'

export default class UserSettings extends React.Component {
  static propTypes = {
    userFirebase: React.PropTypes.object,
  }

  constructor() {
    super()
    this.langOptions = [
      { name: 'English', value: 'en' },
      { name: '日本語', value: 'ja' },
    ]
  }

  _changeLang(e) {
    i18next.changeLanguage(e.target.value, (err) => {
      if (err) {
        alert('言語の切り替えができませんでした。時間が経ってから再度お試しください。')
      }
      location.reload()
    })
  }

  _logout() {
    firebaseUtils.users.logout()
  }

  /**
   * ユーザーの名前、メールアドレス、言語情報を表示
   */
  renderInfo() {
    const { userFirebase } = this.props
    if (!userFirebase) {
      return null
    }
    return (
      <ul className={styles.UserSettings__list}>
        <li>
          <i className={classNames({
            [styles.UserSettings__list__icon]: true,
            'material-icons': true,
          })}>person</i>
          <p className={styles.UserSettings__list__text}>
            {userFirebase[userFirebase.auth.provider].displayName}
          </p>
        </li>
        {userFirebase[userFirebase.auth.provider].email
          ?
            <li>
              <i className={classNames({
                [styles.UserSettings__list__icon]: true,
                'material-icons': true,
              })}>email</i>
              <p className={styles.UserSettings__list__text}>
                {userFirebase[userFirebase.auth.provider].email}
              </p>
            </li> : null}
        <li>
          <i className={classNames({
            [styles.UserSettings__list__icon]: true,
            'material-icons': true,
          })}>language</i>
          <select
            className={styles.UserSettings__list__select}
            onChange={::this._changeLang}
            defaultValue={i18next.language}>
            {this.langOptions.map((option, index) => (
                <option
                  key={index}
                  value={option.value}>
                    {option.name}
                </option>
              ))}
          </select>
        </li>
        <li className={styles.UserSettings__list__logout} onClick={::this._logout}>
          <i className='UserSettings__list__icon material-icons'>skip_next</i>
          <p className={styles.UserSettings__list__text}>{i18next.t('User__logout')}</p>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div className={styles.UserSettings}>
        {this.renderInfo()}
      </div>
    )
  }
}
