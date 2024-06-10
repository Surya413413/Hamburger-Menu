// Write your code here
import {Link, withRouter} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'
const Header = () => (
  <nav className="nav-container">
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
    </div>

    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button" data-testid="hamburgerIconButton">
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <>
            <div>
              <ul className="nav-menu">
                <li className="nav-menu-item">
                  <Link to="/" className="nav-link">
                    <AiFillHome /> Home
                  </Link>
                </li>

                <li className="nav-menu-item">
                  <Link to="/about" className="nav-link">
                    <BsInfoCircleFill /> About
                  </Link>
                </li>
              </ul>
            </div>
            <button
            data-testid="closeButton"
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
          </>
        )}
      </Popup>
    </div>
  </nav>
)

export default Header
