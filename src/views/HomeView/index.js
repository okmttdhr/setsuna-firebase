import styles from './index.scss'

export class HomeView extends React.Component {
  constructor () {
    super()
  }

  componentDidMount () {
    // this._onAuth()
  }

  // _onAuth () {
  //   firebaseRef.onAuth((authData) => {
  //     const hasUserFirebaseState = this.state.userFirebase
  //     this.props.history.pushState(null, '/timeline')
  //   })
  // }

  render () {
    return (
      <div className={styles['HomeView']}>
        Home!
      </div>
    )
  }
}

export default HomeView
