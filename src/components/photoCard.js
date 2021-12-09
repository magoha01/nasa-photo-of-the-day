import React from 'react'

export default function PhotoCard(props) {
    const { pcInfo } = props

    return (
        <div className='photoCard'>
            <div className = 'photoInfo'>
                <h2>{pcInfo.title}</h2>
                <img src={pcInfo.url} alt={pcInfo.title}/>
                <span>{pcInfo.copyright ? `Copyright: ${pcInfo.copyright} `: null}</span>
            </div>
            <p>{pcInfo.explanation}</p>
        </div>
    )
}