import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer () {
  return (
    <footer className='site-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <h6>Dr Al Ajami</h6>
            <p className='text-justify'>Docteur en médecine, Docteur en littérature et langues Arabes, Coranologue, Théologien, Spécialiste de l'exégèse du Coran.</p>
          </div>

          <div className='col-xs-6 col-md-3'>
            <h6>Menu</h6>
            <ul className='footer-links'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/themes'>Themes</Link></li>
              <li><Link to='/search'>Search</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>

          <div className='col-xs-6 col-md-3'>
            <h6>Articles Récents</h6>
            <ul className='footer-links'>
              <li><a href='http://scanfcode.com/about/'>About Us</a></li>
              <li><a href='http://scanfcode.com/contact/'>Contact Us</a></li>
              <li><a href='http://scanfcode.com/contribute-at-scanfcode/'>Contribute</a></li>
              <li><a href='http://scanfcode.com/privacy-policy/'>Privacy Policy</a></li>
              <li><a href='http://scanfcode.com/sitemap/'>Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-sm-6 col-xs-12'>
            <p className='copyright-text'>Copyright &copy; 2017 All Rights Reserved by
              <a href='#'>Scanfcode</a>.
            </p>
          </div>

          <div className='col-md-4 col-sm-6 col-xs-12'>
            <ul className='social-icons'>
              <li><a className='facebook' href='#'><i className='fa fa-facebook' /></a></li>
              <li><a className='twitter' href='#'><i className='fa fa-twitter' /></a></li>
              <li><a className='dribbble' href='#'><i className='fa fa-dribbble' /></a></li>
              <li><a className='linkedin' href='#'><i className='fa fa-linkedin' /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>)
}
