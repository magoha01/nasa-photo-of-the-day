import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import PhotoCard from './components/photoCard'
import Header from './components/header'

function App() {
  const [photoCard, setPhotoCard] = useState({})
  const [header, setHeader] = useState({})
  useEffect(() => { 
    const fetchPageInfo= () => {
       axios.get(`https://api.nasa.gov/planetary/apod?api_key=QCdee4fA6R2LJIjWO0dds8DWpy7jgkagHUiQ7V9a`)
      .then(res => {
        setPhotoCard(res.data);
        setHeader(res.data);
      })
      .catch(err =>{
        console.error(err);
      })
    }
   fetchPageInfo()
  }, [])
  
  return (
    <div className="App">
       <Header headerInfo={header} />
       <PhotoCard pcInfo={photoCard}/>
       {/* {photoCard.map(card =>{
          return <PhotoCard pcInfo={card} />
          }
        )} */}
      </div>
  );
}

export default App;

//QCdee4fA6R2LJIjWO0dds8DWpy7jgkagHUiQ7V9a&count=2