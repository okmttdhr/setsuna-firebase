import styles from './index.scss'
import Header from 'components/Posts/Header/index'
import Post from 'components/Posts/Post/index'

export default class Posts extends React.Component {
  static propTypes = {
    postsFirebase: React.PropTypes.array
  }

  _renderPost () {
    const postsFirebase = []
    this.props.postsFirebase.map((item, index) => {
      return postsFirebase.unshift(<Post key={index} item={item} {...this.props} />)
    })
    return postsFirebase
  }

  render () {
    return (
      <div className={styles['Posts']}>
        <Header {...this.props} />
        {this._renderPost()}
      </div>
    )
  }
}
