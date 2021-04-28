import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, DetailPage } from '../pages'
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/detail" component={DetailPage} />
            </Switch>
        </Router>
    )
}

export default Routes
