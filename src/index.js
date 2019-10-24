import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { HashRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.scss';

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={App} />
    </HashRouter>,
    document.getElementById('root')
);
