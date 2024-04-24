import React, { useRef } from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faChartLine, faLocationPin, faBars } from '@fortawesome/free-solid-svg-icons'
import {
  // faWhatsapp,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

// React Lazy Load Image Component
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function NavBar() {
  const menuItems = useRef()
  const handelToggle = () => {
    menuItems.current.classList.toggle('show')
  }
  return (
    <div className="nav">
      <div className="navbar">
        <NavLink to="/">
          <div className="logo">
            <LazyLoadImage
              src={require('../../images/cryptocurrency.png')}
              alt="cryptocurrency"
              effect="blur"
            />
            <h3 className="logo-text">Cryptocurrency</h3>
          </div>
        </NavLink>

        <div className="nav-links">
          <ul className="links" ref={menuItems}>
            <li>
              <NavLink to="/">
                <div className="icon">
                  <FontAwesomeIcon icon={faHouse} />
                </div>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cryptocurrency">
                <div className="icon">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                cryptocurrency
              </NavLink>
            </li>
            <li>
              <NavLink to="/news">
                <div className="icon">
                  <FontAwesomeIcon icon={faLocationPin} />
                </div>
                News
              </NavLink>
            </li>
            {/* <li>
              <a
                href="https://api.whatsapp.com/send/?phone=01110649108&text=Welcome+I%27m+Ahmed+samy+%20Software%20Engineer&type=phone_number&app_absent=0"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="icon">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </div>
                Contact Me
              </a>
            </li> */}
            <li className="contact">
              <a href="https://github.com/ahmedsamyop" target={'_blank'} rel="noreferrer">
                <div className="icon">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmedsamyop"
                target={'_blank'}
                rel="noreferrer"
              >
                <div className="icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </a>
              <a href="https://twitter.com/ahmedsamyop" target={'_blank'} rel="noreferrer">
                <div className="icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </a>
            </li>
          </ul>
          <div className="menu" onClick={handelToggle}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
