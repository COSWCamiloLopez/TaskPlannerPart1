import React, {Component} from 'react';
import Login from './Login';
import './App.css';
import {AppBarPage} from './AppBar';
import TaskPlanner from "./TaskPlanner";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
    render() {

        const loginView = () => (
            <div>
                <AppBarPage/>
                <Login/>
            </div>
        );

        const taskPlannerView = () => (
            <div>
                <TaskPlanner/>
            </div>
        );

        return (
            <Router>
                <div className="App">
                    <Route
                        exact
                        path='/'
                        component={localStorage.getItem("isLoggedIn") === "true" ? taskPlannerView : loginView}
                    />
                </div>
            </Router>
        );
    }
}

export default App;
