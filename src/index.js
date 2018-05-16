import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import Login from './page/login'
import Blog from './page/blog'
import Signup from './page/signup'


// class Test extends React.Component {
//     state = {
//         response: 'check'
//     }
//
//     all() {
//         const response = fetch('/api/all')
//         return response
//     }
//
//     componentDidMount() {
//         this.all()
//             .then( response => response.json() )
//             .then( response => {
//                 console.log('check response', response)
//                 this.setState({response: response.test} )
//             } )
//             .catch( err => console.log(err))
//     }
//
//     render() {
//         console.log('response', this.state.response)
//         return (
//             <div>
//                 <span>{this.state.response}</span>
//             </div>
//         )
//     }
// }

const App = () => (
        <div>
            <Blog />
        </div>

)

ReactDOM.render(
        <App />,
    document.getElementById('root')
);
