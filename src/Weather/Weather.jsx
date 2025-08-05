import searchIcon from '../assets/searchicon.jpeg'
import './Weather.css'
import { useEffect, useState, useRef } from 'react'
import React from 'react'

const Weather = () => {
  const inputref=useRef()
  const [weatherData, setWeatherData] = useState(false);
  const allicon={
    "01d": "☀️",
    "02d": "⛅",
    "03d": "☁️",
    "04d": "☁",
    "09d": "🌧️",
    "10d": "🌧️",
    "11d": "🌩️",
    "13d": "❄️",
    "50d": "🌫️",
  }

 const search= async(city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&appid=${import.meta.env.VITE_APP_ID}&units=metric`;
;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const icon=allicon[data.weather[0].icon] || "☀️";
    setWeatherData({
      temp:  Math.floor(data.main.temp),
      city:data.name,
      humidity:data.main.humidity,
      windSpeed:data.wind.speed,
      icon:icon,
    }) 
  } catch (error) {
    alert('Please enter a valid city name');
  }

 }
 useEffect(() => {
  search('chennai');}, []);


  return (
    <div className="weather-container">
      <div className="weather-card">
        <div className="search-section">
          <div className="search-bar">
            <input ref={inputref} type="text" placeholder="Search" />
            <button  onClick={() => search(inputref.current.value)} className="search-button">
              <img src={searchIcon} alt="search" />
            </button>
          </div>
        </div>
        <div className="weather-icon">
          <div className="sun-icon">{weatherData.icon}</div>
        </div>

        <div className="temperature">{weatherData.temp}°C</div>

   
        <div className="location">{weatherData.city}</div>

        <div className="weather-details">
          <div className="detail-item">
            <div className="detail-icon">💧</div>
            <div className="detail-value">{weatherData.humidity}%</div>
            <div className="detail-label">Humidity</div>
          </div>
          <div className="detail-item">
            <div className="detail-icon">💨</div>
            <div className="detail-value">{weatherData.windSpeed} Km/h</div>
            <div className="detail-label">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather