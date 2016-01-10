import { Link } from 'react-router'

export class AboutView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h3>This is the about view</h3>
        <hr />
        <Link to='/'>Back To Home View</Link>
      </div>
    )
  }
}

export default AboutView
