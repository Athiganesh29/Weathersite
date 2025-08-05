import searchIcon from '../assets/searchicon.jpeg'
import './Weather.css'
import img from '../assets/sun.png'

const Weather = () => {
  return (
    <div className="weather-container">
      <div className="weather-card">
        {/* Search Bar */}
        <div className="search-section">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button className="search-button">
              <img src={searchIcon} alt="search" />
            </button>
          </div>
        </div>

        {/* Weather Icon */}
        <div className="weather-icon">
          <div className="sun-icon">☀️</div>
        </div>

        {/* Temperature */}
        <div className="temperature">16°C</div>

        {/* Location */}
        <div className="location">London</div>

        {/* Weather Details */}
        <div className="weather-details">
          <div className="detail-item">
            <div className="detail-icon">💧</div>
            <div className="detail-value">91%</div>
            <div className="detail-label">Humidity</div>
          </div>
          <div className="detail-item">
            <div className="detail-icon">💨</div>
            <div className="detail-value">3.6 Km/h</div>
            <div className="detail-label">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather