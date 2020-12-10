import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

const BASE_URL = 'https://api.nasa.gov';
const API_KEY = 't1miILVoljZ4KJES25OPAA3ZJCYyCSeLrBEcZuTo';

function App() {

  const [apodData, setApodData] = useState({});

  useEffect(() => {
    const fetchAPOD = () => {
    axios
      .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
      .then((res) => {
        setApodData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    };
    fetchAPOD();
  }, []);

  return (
    <div className="App">
      <h1>Astrology Photo of the Day</h1>
      <h2>{apodData.title}</h2>
      <p>{apodData.date}</p>
      {apodData.media_type === "image" ? 
      (<img src={apodData.url} alt={apodData.title} />) : 
      (<iframe
      title="space-video"
      src={apodData.url}
      frameBorder="0"
      gesture="media"
      allow="encrypted-media"
      allowFullScreen
      className="photo"
      />)}
      <p>{apodData.explanation}</p> 
    </div>
  );
}

export default App;