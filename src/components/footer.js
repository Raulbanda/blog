import React from 'react'
import profileImage from '../assets/images/profile-img.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__menu-wrapper">
        <label htmlFor="menu" className="footer__label">
          <img src={profileImage} alt="Made by Rou Hun Fan" className="footer__img" />
        </label>

        <input type="checkbox" name="menu" id="menu" className="footer__checkbox" />
        <ul className="footer__menu">
          <li className="footer__menu-item">color switch</li>
          <li className="footer__menu-item">
            <a href="https://twitter.com/flowen_nl" target="_blank" rel="noopener noreferrer">
              <svg
                className="twitter-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
              >
                <path
                  d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm6.4 12.7v.4c0 4.3-3.3 9.3-9.3 9.3-1.9 0-3.6-.5-5-1.5h.8c1.5 0 3-.5 4.1-1.4-1.4 0-2.6-1-3.1-2.3.2 0 .4.1.6.1.3 0 .6 0 .9-.1-1.5-.3-2.6-1.6-2.6-3.2.4.2.9.4 1.5.4-.9-.6-1.5-1.6-1.5-2.7 0-.6.2-1.2.4-1.7 1.6 2 4 3.3 6.8 3.4-.1-.2-.1-.5-.1-.7 0-1.8 1.5-3.3 3.3-3.3.9 0 1.8.4 2.4 1 .7-.1 1.5-.4 2.1-.8-.2.8-.8 1.4-1.4 1.8.7-.1 1.3-.3 1.9-.5-.6.8-1.2 1.4-1.8 1.8z"
                  fill="#1DA1F2"
                />
              </svg>
            </a>
          </li>
          <li className="footer__menu-item">
            <a href="https://flowen.me" target="_blank" rel="noopener noreferrer">
              flowen.me
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
