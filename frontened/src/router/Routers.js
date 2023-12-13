import React from 'react'
import {Routes,Route,Link} from 'react-router-dom';
import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResult from './../pages/SearchResult';
import ThankYou from '../pages/ThankYou';


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Link to='/'home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/tours/search' element={<SearchResult/>}/>
    </Routes>
  )
}

export default Routers