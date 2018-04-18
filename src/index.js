import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes'
import './stylesheets/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

window.React = React

ReactDOM.render(<Routes />, document.getElementById('root'));
