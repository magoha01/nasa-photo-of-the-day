import React from 'react'
import styled from 'styled-components';


const PhotoCardDiv = styled.div`
text-align: center;
display: flex;
flex-flow: column wrap;
align-items: center;
margin: 10%;

img {
    width: 75%;
}

h2{
    color: green;
}

p{
    margin: 2%;
}

`


export default function PhotoCard(props) {
    const { pcInfo } = props

    return (
        <PhotoCardDiv>
            
                <h2>{pcInfo.title}</h2>
                <img src={pcInfo.url} alt={pcInfo.title}/>
                <span>{pcInfo.copyright ? `Copyright: ${pcInfo.copyright} `: null}</span>
                <p>{pcInfo.explanation}</p>

        </PhotoCardDiv>
    )
}