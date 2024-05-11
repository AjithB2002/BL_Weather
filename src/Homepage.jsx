import moment from 'moment-timezone';
import React, { useState, useEffect } from 'react';
import './Homepage.css';
import Card from './common/Card';
import Loader from './common/Loader/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
function Homepage() {
  const [position, setPosition] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(moment().tz(moment.tz.guess()).format('h:mm:ss A'));


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().tz(moment.tz.guess()).format('h:mm:ss A'))
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
        setPosition({
          latitude: position.coords.latitude.toString().substring(0, 5),
          longitude: position.coords.longitude.toString().substring(0, 5),
        });
      },
      () => {
       alert("Please enable location access in your device settings and Refresh the page.");
      }
    );
  }, []);

  useEffect(() => {
    if (position) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&units=metric&appid=b6203bafd586c120a756bf7665ef753c`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
        .catch(error => console.log(error));
    }
  }, [position]);

  const handleSearch = (event) => {
    event.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&appid=b6203bafd586c120a756bf7665ef753c`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.log(error));
  };


  return (
    <>

      <div id='Homepage' className='pb-5'>
        <h1 className='text-center time'>{currentTime}</h1>
        <div className="container">
          <div className="row  d-flex justify-content-center align-items-center">
            <div className="col-md-8">
              <div className="search">
                <FontAwesomeIcon className='fa-search fontsearchicon' icon={faMagnifyingGlass} />
                <form onSubmit={handleSearch}>
                  <input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} className="form-control" placeholder="Enter the City..." />
                  <button className="btn">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {
          !weatherData ? (
            <div className="m-5 p-5 d-flex justify-content-center text-center">
              <Loader />
            </div>
          ) : (position && (
            <div>
              {weatherData && (
                <Card weatherData={weatherData} />
              )}
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Homepage;