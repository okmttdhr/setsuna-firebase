import Header from 'components/Posts/Header/index'
import styles from './index.scss'

export default class Posts extends React.Component {
  static propTypes = {
    postsFirebase: React.PropTypes.array
  }

  render () {
    const postsFirebase = []
    this.props.postsFirebase.map((item, index) => {
      return postsFirebase.unshift(<div key={index}>{JSON.stringify(item)}</div>)
    })
    return (
      <div className={styles['Posts']}>
        <Header {...this.props} />
        {postsFirebase}
      </div>
    )
  }
}
