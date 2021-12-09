import React from 'react'
import styled from 'styled-components';

const HeaderDiv = styled.div`
 text-align: left;
 margin: 5%;

 h1{
     font-size: 5rem;
 }

`

function Header(props){

    const { headerInfo } = props

    return(
        <HeaderDiv>
            <h1>Astronomy Picture of the Day</h1>
            <h3>{headerInfo.date}</h3>
        </HeaderDiv>
    )
}

export default Header