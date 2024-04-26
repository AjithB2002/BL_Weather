import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavigationBar from './components/NavBar'
import Homepage from './Homepage';
function App() {

  return (
    <>
      <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/BL_weather_app" element={<Homepage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
