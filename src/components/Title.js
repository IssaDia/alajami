import React from 'react'

export default function Title(props) {
    return (
        <div className='title-container'>
            <h2>
            <span style={{ textTransform: 'uppercase'}}>{props.title}</span>
            </h2>
        </div>
    )
}
