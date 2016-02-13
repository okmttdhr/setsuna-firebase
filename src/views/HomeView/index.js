import styles from './index.scss'

export class HomeView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={styles.HomeView}>
        Home!
      </div>
    )
  }
}

export default HomeView
