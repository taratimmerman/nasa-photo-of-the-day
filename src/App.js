import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import styled from "styled-components";

const BASE_URL = 'https://api.nasa.gov';
const API_KEY = 't1miILVoljZ4KJES25OPAA3ZJCYyCSeLrBEcZuTo';

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const Image = styled.img`
  width: 60%;
  border-radius: 10px;
`;

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
    <Wrapper className="App">
      <h1>Astrology Photo of the Day</h1>
      <h2>{apodData.title}</h2>
      <p>{apodData.date}</p>
      {apodData.media_type === "image" ? 
      (<Image src={apodData.url} alt={apodData.title} />) : 
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
      <p>Copyright {apodData.copyright}</p>
    </Wrapper>
  );

}

export default App;