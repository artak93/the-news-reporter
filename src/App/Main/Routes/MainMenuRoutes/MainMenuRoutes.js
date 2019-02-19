import React from 'react'
import { Route } from 'react-router-dom'
import Favourites from './../../../Header/MainMenu/Favourites/Favourites'
import AboutUs from './../../../Header/MainMenu/AboutUs/AboutUs'
import ContactUs from './../../../Header/MainMenu/ContactUs/ContactUs'
import Subscribe from './../../../Header/MainMenu/Subscribe/Subscribe'

export default () => (
    <div>
        <Route path='/favourites' component={Favourites}/>
        <Route path='/about-us' component={AboutUs}/>
        <Route path='/contact-us' component={ContactUs}/>
        <Route path='/subscribe' component={Subscribe}/>
    </div>
)