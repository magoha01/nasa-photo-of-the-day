import React from 'react'
import styled from 'styled-components';

const HeaderDiv = styled.div`
    margin: 2%;
    display: flex;
    justify-content: space-between;
    flex-flow: column wrap;
    /* border: 1px solid #e5e5e5; */
    padding: 2%;
    text-align: center;
    /* background-color: #001845; */

 h1{
     font-size: 4rem;
     margin: 0;
     color: e5e5e5;
 }
 h3{
    font-size: 3rem;
    margin: 0; 
    padding: 1%;
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