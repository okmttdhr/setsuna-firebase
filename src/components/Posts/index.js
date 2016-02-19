import styles from './index.scss'
import Header from 'components/Posts/Header/index'
import Timeline from 'components/Timeline/index'

export default class Posts extends React.Component {
  static propTypes = {
    postsFirebase: React.PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className={styles.Posts}>
        <Header {...this.props} />
        <Timeline items={this.props.postsFirebase} {...this.props} {...this.state} />
      </div>
    )
  }
}
