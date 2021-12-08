import React from 'react'

export default function PhotoCard(props) {
    const { info } = props

    return (
        <div className='photoCard'>
            <img src={info.url} alt='NASA "photo of the day"'/>
        </div>
    )
}