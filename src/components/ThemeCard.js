import React from 'react'
import bgTheme from '../images/bg-theme-islam.jpg'


export default function ThemeCard(props) {
    return (
        <div className="card-grid-space">
            <a className="card" style={{ backgroundImage:`url(${bgTheme})` }} href="https://codetheweb.blog/2017/10/06/html-syntax/">
            <div>
            <h2>{props.title}</h2>
            </div>
            </a>
        </div>
    )
}
