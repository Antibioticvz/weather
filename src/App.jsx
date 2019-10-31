import React, { useState, useEffect } from 'react'
import Dropdown from 'react-dropdown'
import axios from 'axios'

import { Widget } from './Widget'

import logo from './weather_logo.png'
import 'react-dropdown/style.css'
import './App.css'

const options = ['London', 'Tokyo', 'Moscow', 'Istanbul', 'Tbilisi']

const App = () => {
  const [city, setCity] = useState('London')
  const [temp, setTemp] = useState(0)

  useEffect(() => {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_WEATHER_API}`

    axios
      .get(url)
      .then(response => setTemp(parseInt(response.data.main.temp - 273.15, 10)))
      .catch(error => console.log(error))
  }, [city])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dropdown options={options} onChange={option => setCity(option.value)} value={city} />
        <Widget city={city} currentTemp={temp} />
      </main>
    </div>
  )
}

export default App
