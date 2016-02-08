import styles from './index.scss'
import { connect } from 'react-redux'
import Firebase from 'firebase'
import ReactFireMixin from 'reactfire'
import reactMixin from 'react-mixin'
import i18next from 'i18next'

import config from 'utils/config'
import counterActions from 'actions/counter'
import postsActions from 'actions/posts'
import Posts from 'components/Posts/index'

const mapStateToProps = (state) => ({
  counter: state.counter,
  posts: state.posts
})

export class PostsView extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired,
    userFirebase: React.PropTypes.object
  }

  constructor () {
    super()
    this.state = {
      postsFirebase: [],
      starsFirebase: []
    }
  }

  componentDidMount () {
    this._getPosts()
    this._getStars(this.props.userFirebase)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.userFirebase && nextProps.userFirebase !== this.props.userFirebase) {
      this._getStars(nextProps.userFirebase)
    }
  }

  _isBinded (bindVar) {
    return typeof this.firebaseRefs[bindVar] !== 'undefined'
  }

  _getPosts () {
    const refPosts = new Firebase(config.firebase.demoRef + 'posts')
    this.bindAsArray(
      refPosts.orderByChild('created_at').limitToLast(10),
      'postsFirebase'
    )
  }

  _getStars (userFirebase) {
    if (!userFirebase || this._isBinded('starsFirebase')) return
    const refStars = new Firebase(config.firebase.demoRef + 'stars/' + userFirebase.auth.uid)
    this.bindAsArray(
      refStars.orderByChild('created_at').limitToLast(10),
      'starsFirebase'
    )
  }

  _changeLang () {
    if (i18next.language === 'en') {
      i18next.changeLanguage('ja', (err, t) => {
        if (err) {
          alert('言語の切り替えができませんでした。時間が経ってから再度お試しください。')
        }
        location.reload()
      })
    } else {
      i18next.changeLanguage('en', (err, t) => {
        if (err) {
          alert('言語の切り替えができませんでした。時間が経ってから再度お試しください。')
        }
        location.reload()
      })
    }
  }

  render () {
    return (
      <div className='container text-center'>
        <hr />
        {i18next.t('key')}
        <p onClick={::this._changeLang}>click</p>
        <div>
          <p>
            Counter:&nbsp;
            <span className={styles['counter--green']}>{this.props.counter}</span>
          </p>
          <button
            className='btn btn-default'
            onClick={() => this.props.increment(1)}>
            Increment
          </button>
          <button
            className='btn btn-default'
            onClick={this.props.doubleAsync}>
            Double (Async)
          </button>
        </div>
        <hr />
        {this.state.postsFirebase.length > 0
          ? <Posts {...this.props} {...this.state} /> : 'loading'}
      </div>
    )
  }
}

const PostsViewWithMixin = reactMixin.decorate(ReactFireMixin)(PostsView)
export default connect(mapStateToProps, {
  ...counterActions,
  ...postsActions
})(PostsViewWithMixin)
