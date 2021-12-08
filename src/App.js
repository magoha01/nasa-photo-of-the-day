import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import PhotoCard from './components/photoCard'

function App() {

  const [photoCard, setPhotoCard] = useState([])

  useEffect(() => { 
    const fetchPhotoCard = () => {
       axios.get(`https://api.nasa.gov/planetary/apod?api_key=QCdee4fA6R2LJIjWO0dds8DWpy7jgkagHUiQ7V9a&count=2`)
      .then(resp => {
        setPhotoCard(resp.data);
      })
      .catch(err =>{
        debugger;
      })
    }
   fetchPhotoCard()
  }, [])
  
  return (
    <div className="App">
       <h1>NASA Photo of The Day</h1>
       {photoCard.map(card =>{
          return <PhotoCard info={card} />
          }
        )}
    </div>
  );
}

export default App;
