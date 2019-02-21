import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dummyData from './dummy-data';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <App data={dummyData}/>
    </Router>,
    document.getElementById('root')
 );

