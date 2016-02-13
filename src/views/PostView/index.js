import styles from './index.scss'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import config from 'utils/config'

export class PostView extends React.Component {
  static propTypes = {
    params: React.PropTypes.object.isRequired,
  }

  constructor() {
    super()
    this.state = {
      postFirebase: null,
    }
  }

  componentDidMount() {
    this._getPost()
  }

  _getPost() {
    const refPost = new Firebase(`${config.firebase.demoRef}posts/${this.props.params.id}`)
    this.bindAsObject(refPost, 'postFirebase')
  }

  _renderPost() {
    const { postFirebase } = this.state
    if (!postFirebase) return null
    return (<div>
      <div>{postFirebase.user_id}</div>
      <div>{postFirebase.content}</div>
      <div>{postFirebase.created_at}</div>
    </div>)
  }

  render() {
    return (
      <div className={styles.PostView}>
        {this._renderPost()}
      </div>
    )
  }
}

export default reactMixin.decorate(ReactFireMixin)(PostView)
