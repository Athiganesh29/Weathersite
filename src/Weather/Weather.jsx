import searchIcon from '../assets/searchicon.jpeg'
import './Weather.css'
import img from '../assets/sun.png'
import { useEffect, useState, useRef } from 'react'

const Weather = () => {
  const inputref = useRef()
  const [weatherData, setWeatherData] = useState({
    temp: 0,
    city: '',
    humidity: 0,
    windSpeed: 0,
    icon: '☀️'
  })

  const allicon = {
    "01d": "☀️",
    "02d": "⛅",
    "03d": "☁️",
    "04d": "☁️",
    "09d": "🌧️",
    "10d": "🌧️",
    "11d": "🌩️",
    "13d": "❄️",
    "50d": "🌫️",
  }

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`
      console.log(url)
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      const icon = allicon[data.weather[0].icon] || "☀️"
      setWeatherData({
        temp: Math.floor(data.main.temp),
        city: data.name,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: icon,
      })
    } catch (error) {
      alert('Please enter a valid city name')
    }
  }

  useEffect(() => {
    search('chennai')
  }, [])

  return (
    <div className="weather-container">
      <div className="weather-card">
        {/* Search Bar */}
        <div className="search-section">
          <div className="search-bar">
            <input
              ref={inputref}
              type="text"
              placeholder="Search for a city..."
            />
            <button
              className="search-button"
              onClick={() => search(inputref.current.value)}
            >
              <img src={searchIcon} alt="search" />
            </button>
          </div>
        </div>

        {/* Weather Icon */}
        <div className="weather-icon">
          <div className="sun-icon">{weatherData.icon}</div>
        </div>

        {/* Temperature */}
        <div className="temperature">{weatherData.temp}°C</div>

        {/* Location */}
        <div className="location">{weatherData.city}</div>

        {/* Weather Details */}
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
