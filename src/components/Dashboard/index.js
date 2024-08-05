import {Link} from 'react-router-dom'
import { Component } from 'react'

import './index.css'
import Header from '../Header'

class Dashboard extends Component{
  state = {
    user: null
  }

  componentDidMount() {
    const userData = localStorage.getItem('user')
    if (userData) {
      const parsedData = JSON.parse(userData)
      if (Array.isArray(parsedData) && parsedData.length > 0) {
        this.setState({ user: parsedData[0] })
      }
    }
  }
  render(){
    const {user}=this.state
    const user_firstname = user ? user.user_firstname : ''
    console.log(user_firstname)
    return (
  <>
    <div className="home-bg-cont">
      <Header />
      <h1 className="home-h2-style">Transform<span className='span-style'>.</span> Accelerate<span className='span-style'>.</span> Scale<span className='span-style'>.</span> Optimize<span className='span-style'>.</span></h1>
      <div className="home-cont">
      {user && (
              <h1 className="home-h-style">Welcome, {user_firstname} {user.user_lastname}!</h1>
            )}
        <h1 className="home-h-style">Why <span className='span-style'>Syoft?</span></h1>
        
        <p className="home-p-style">
        Syoft is one of the coveted development partners as we have broad domain expertise. Apart from being thought leaders, our focus is to be backed by industry trends and development of futuristic software solutions.
        </p>
        <p className='home-p-style'>Apply for a position that fits you and join our family.</p>
        <Link className="home-link-style" to="/">
          <button className="home-bt-style">Find Jobs</button>
        </Link>
      </div>
    </div>
  </>
  )}
}
export default Dashboard