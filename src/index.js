import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faBan, faTrashAlt, faEdit, faSave, faAngleDoubleLeft, faPlusCircle
  } from '@fortawesome/free-solid-svg-icons'
import App from './App/App';
import './index.css';

library.add(faTrashAlt, faEdit, faBan, faSave, faAngleDoubleLeft, faPlusCircle)

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter> ,
    document.getElementById('root')
    );