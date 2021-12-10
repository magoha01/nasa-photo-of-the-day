import React from 'react'
import styled from 'styled-components';


const PhotoCardDiv = styled.div`
text-align: center;
display: flex;
flex-flow: row nowrap;
align-items: center;
background-color: #102542;
overflow: hidden;

div{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 100%;
    margin: 0;  
}


img {
    width: 75%;
    /* border: 1px solid #e5e5e5; */
}

h2{
    font-size: 2rem;
 
}

span{
   font-size: 1rem;

}

p{
 font-size: 1.2rem;
 line-height: 1.5;
 margin: 0 7% 7% 7%;
}
`



export default function PhotoCard(props) {
    const { pcInfo } = props

    return (
        <PhotoCardDiv>
            <div>
                
                <img src={pcInfo.url} alt={pcInfo.title}/>
                <span>{pcInfo.copyright ? `Copyright: ${pcInfo.copyright} `: null}</span>
            </div>
            <div>
            <h2>{pcInfo.title}</h2>
            <p>{pcInfo.explanation}</p>
            </div>
            

        </PhotoCardDiv>
    )
}