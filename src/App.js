import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

const BASE_URL = 'https://api.nasa.gov';
const API_KEY = 't1miILVoljZ4KJES25OPAA3ZJCYyCSeLrBEcZuTo'

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

  const Content = (props) => (
        <div>
            <h1>{props.title}</h1>
            <img src={props.url} alt={props.title}/>
        </div>

  );

  return (
    <div className="App">
      <Content url={apodData.url} title={apodData.title} />
      <p>
        {apodData.explanation}
      </p>
    </div>
  );
}

export default App;
