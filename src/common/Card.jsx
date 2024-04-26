import React from 'react'
import moment from 'moment-timezone';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faCloud, faSun, faTemperatureThreeQuarters, faWind } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons/faDroplet';
function Card({ weatherData}) {
  return (
    <>
      <div className='container pt-5'>
    <div className="card bcard">
  <div className="card-body">
  <div className="row row-cols-1 row-cols-md-2 g-3 ">
  <div className="col">
    <div className="card h-100 shadow">
      <div className="card-body">
      <p className='pt-5'><FontAwesomeIcon className='fonticon' icon={faCity}/> <span className='Heading'> CITY:</span> <span className='data'>{weatherData.name}</span></p>
      <p><FontAwesomeIcon className='fonticon' icon={faTemperatureThreeQuarters}/> <span className='Heading'>CURRENT TEMPERATURE:</span><span className='data'> {weatherData.main.temp}%</span></p>
      <p><FontAwesomeIcon className='fonticon' icon={faDroplet}/> <span className='Heading'> HUMIDITY:</span> <span className='data'>{weatherData.main.humidity}</span></p>
      <p><FontAwesomeIcon className='fonticon' icon={faSun}/><span className='Heading'> SUNRISE:</span> <span className='data'>{moment.unix(weatherData.sys.sunrise).local().format('h:mm A')}</span></p>
      <p><FontAwesomeIcon className='fonticon' icon={faSun}/><span className='Heading'> SUNSET:</span> <span className='data'>{moment.unix(weatherData.sys.sunset).local().format('h:mm A')}</span></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow">
      <div className="card-body">
      <p><img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} className='weatherimg' alt={weatherData.weather[0].description} /></p>
      <p><FontAwesomeIcon className='fonticon' icon={faCloud}/> <span className='Heading'>Weather :</span><span className='data'>{weatherData.weather[0].main}</span> </p>
      <p><FontAwesomeIcon className='fonticon' icon={faCloud}/><span className='Heading'>Weather Description: </span><span className='data'>{weatherData.weather[0].description}</span> </p>
      <p><FontAwesomeIcon className='fonticon'  icon={faWind}/><span className='Heading'> Wind Speed:</span><span className='data'> {weatherData.wind.speed}KM</span></p>
      <p><FontAwesomeIcon className='fonticon' icon={faWind}/> <span className='Heading'>Wind Deg:</span><span className='data'> {weatherData.wind.deg}%</span></p>
      <p><FontAwesomeIcon className='fonticon' icon={faWind}/> <span className='Heading'>Wind gust:</span><span className='data'>{weatherData.wind.gust}Mph</span> </p>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
</div>
    </>
   
  )
}

export default Card;