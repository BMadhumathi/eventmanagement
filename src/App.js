import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { Switch } from '@mui/material';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import ListEventComponent from './components/ListEventComponent';
import CreateEventComponent from './components/CreateEventComponent';
import ViewEventComponent from './components/ViewEventComponent';
import UpdateEventComponent from './components/UpdateEventComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                  <Routes>
                 <Route path = "/"  element = {<ListEventComponent/>}></Route>
                  <Route path = "/events" element =  {<ListEventComponent/>}></Route>
                  <Route path = "/add_event" element =  {<CreateEventComponent/>}></Route>
                  <Route path = "/updateee" element = {<UpdateEventComponent/>}></Route> 
                  <Route path = "/view-event/:bookingId" element = {<ViewEventComponent/>}></Route>
                  </Routes>
                   
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;

