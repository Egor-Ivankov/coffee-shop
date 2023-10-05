import React from 'react'
import ReactDOM from 'react-dom/client'
import './compontents//styles/index.scss';
import NavBar from './compontents/layout/navigation/navBar/navBar';
import CoffeeBagSection from './compontents/views/homePage/coffeeBagSection/CoffeeBagSection';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <CoffeeBagSection/>
  </React.StrictMode>,
)
