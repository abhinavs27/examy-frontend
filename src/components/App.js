import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import "./main.css";
import Dashboard from './Dashboard'
import CreateQuiz from './CreateQuiz'


class App extends React.Component {
    render() {
        return (
            <div className="">
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={() => <div>Landing Page</div>} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/create-quiz" component={CreateQuiz} />



                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null)(App);