import React from 'react'


function Header(props){

    const { headerInfo } = props

    return(
        <div className = 'header-container'>
            <h1>Astronomy Picture of the Day</h1>
            <h3>{headerInfo.date}</h3>
        </div>
    )
}

export default Header