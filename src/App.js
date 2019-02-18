import React, {Component} from 'react';
import Login from './Login';
import './App.css';
import {AppBarPage} from './AppBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppBarPage/>
                <Login/>
            </div>
        );
    }
}

export default App;
