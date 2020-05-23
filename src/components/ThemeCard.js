import React from 'react'
import bgTheme from '../images/bg-theme-islam.jpg'
import { Link } from 'react-router-dom'


export default function ThemeCard(props) {
    return (
        <div className="card-grid-space">
            <Link className="card" style={{ backgroundImage:`url(${bgTheme})` }} to={{pathname: `/themes/${props.slug}`}}>
            <div>
            <h3>{props.title}</h3>
            </div>
            </Link>
        </div>
    )
}
