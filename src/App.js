import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [imageData, setImageData] = useState(null);
  const [EPICdata, setEPICdata] = useState(null);

  useEffect(() => {

    const fetchNASAImage = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=lC0EmNzLddgXDCc5scIGrRBoGf5KviM8fAIIXE2Q');

        if (!response.ok) {
          throw new Error('Failed to fetch data from NASA API');
        }

        const data = await response.json();
        setImageData(data);
      } 
      catch (error) {
        console.error('Error fetching NASA image:', error);
      }
    };

    const fetchEPIC = async () => {
      try{
        const response = await fetch('https://api.nasa.gov/EPIC/api/natural/images?api_key=lC0EmNzLddgXDCc5scIGrRBoGf5KviM8fAIIXE2Q');
        if(!response.ok){
          throw new Error('Failed to fetch EPIC API');
        }

        const data = await response.json();
        setEPICdata(data);
      }
      catch (error) {
        console.error('Error fetching NASA EPIC');
      }
    };

    fetchNASAImage();
    fetchEPIC();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {imageData && (
          <>
            <h1>{imageData.title}</h1>
            <img src={imageData.url} alt={imageData.title} />
            <p>{imageData.date}</p>
          </>
        )}

        {EPICdata && (
          <>
            <h1>{EPICdata.title}</h1>
            <img src={EPICdata.url} alt={EPICdata.title} />
            <p>dasa</p>
          </>
        )}
      </header>
    </div>
  );

}

export default App;
