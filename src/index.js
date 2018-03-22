import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import Login from './page/login'
import Blog from './page/blog'
import Signup from './page/signup'

const App = () => (
    <Router>
        <Route path='/' component={ Blog } />
    </Router>
);

ReactDOM.render(
        <App />,
    document.getElementById('root')
);