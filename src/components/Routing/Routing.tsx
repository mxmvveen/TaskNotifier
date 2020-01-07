import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import Welcome from 'components/Welcome/Welcome';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

const Routing = () => {
    return(
        <div className="App">
            <Router>
                <div className="app-wrapper">
                <Header />
                <Switch>
                    <Route path="/" exact component={Welcome} />
                </Switch>
                <Footer />
                </div>
            </Router>
        </div>
    );    
}
export default Routing;