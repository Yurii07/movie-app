import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Landing from './components/home/Landing';
import Movie from './components/home/Movie';

import store from './store';
import {NotFound} from "./components/home/NotFound";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/movie/:id" component={Movie} />
                            <Route component={ NotFound } />
                        </Switch>

                        {/*<Footer />*/}
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;