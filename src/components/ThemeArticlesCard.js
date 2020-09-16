import React from 'react'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

export default function ThemeArticlesCard (props) {
  return (
    <Col xs={4} className='article-card-container'>
      <div className='card'>
        <div className='card-background'>
          <img src='https://unsplash.it/400/608?image=123' alt='article-background' />
          <div className='card-article-overlay'>
            <div className='card-article-overlay-content'>
              <ul className='card-article-meta'>
                <li><Link to='#'><i className='fa fa-tag' /> {props.category}</Link></li>
                <li><Link to='#0'><i className='fa fa-clock-o' /> {props.date}</Link></li>
              </ul>
              <Link to={{ pathname: `/themes/${props.slug}` }} className='card-article-title'>{props.title}</Link>
              <ul className='card-article-meta card-article-meta--last'>
                <li><Link to='#0'><i className='fa fa-user' />{props.author}</Link></li>
                <li><Link to='#0'><i className='fa fa-facebook-square' /> Share</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Col>)
}
