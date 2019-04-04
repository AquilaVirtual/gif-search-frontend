import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { history } from './../store/configureStore';

import Header from '../containers/Header';
import Home from '../containers/Home';
import SignupForm from '../containers/SignupForm';
import LoginForm from '../containers/LoginForm';
import Favorites from '../containers/Favorites';

export default class App extends React.Component {
    render() {
        return (

                <div>
                    <Header />
                    <div className="container">
                        <Route exact path="/" component={ Home }/>
                        <Route path="/signup" component={ SignupForm } />
                        <Route path="/login" component={ LoginForm } />
                        <Route path="/favorites" component={ Favorites } />
                    </div>
                </div>
            
        );
    }
}