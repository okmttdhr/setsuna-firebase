import 'styles/core.scss'
import styles from './index.scss'
import Header from 'components/Header/index'

export class CoreLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return (
      <div className='page-container'>
        <Header/>
        <div className={styles['CoreLayout__viewContainer']}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default CoreLayout
