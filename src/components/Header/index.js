import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import { MdHome } from 'react-icons/md'

import { FiLogOut } from 'react-icons/fi'


const Header = () => {
  const navigate = useNavigate()

  const onclickLogout = () => {
    localStorage.removeItem('user');
    
    navigate('/signup')
  }

  return (
    <nav className="nav-cont">
      <div className="mobile-view">
        <Link to="/" className="link-style">
          <h1 className='website-logo-style'>Syoft<span className='span-style'>.</span></h1>
        </Link>
        <ul className="mobile-list-cont">
          <li>
            <Link to="/" className="link-style">
              <MdHome className="mobile-icon-style" />
            </Link>
          </li>
          
          <li>
            <button className="mobile-logout-button" onClick={onclickLogout}>
              <FiLogOut className="mobile-icon-style" />
            </button>
          </li>
        </ul>
      </div>

      <div className="pc-view">
        <Link to="/" className="link-style">
        <h1 className='website-logo-style'>Syoft<span className='span-style'>.</span></h1>
        </Link>

        <ul className="pc-list-cont">
          <li>
            <Link to="/" className="link-style">
              <p className="comp-style">Home</p>
            </Link>
          </li>
        </ul>

        <button className="logout-style" onClick={onclickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Header