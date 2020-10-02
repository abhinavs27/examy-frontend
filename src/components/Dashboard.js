import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Navbar from './Navbar'

class Dashboard extends React.Component {
    render() {
        return (
            <div >
                <Navbar />
                <div className="text-center mt-5">
                    <Link to="#" className="btn btn-primary btn-lg mr-3" >
                        Create Quiz
                 </Link>

                    <Link to="#" className="btn btn-outline-primary btn-lg" >
                        Student Requests
                 </Link>
                </div>
            </div>
        );
    }
}

export default connect(null)(Dashboard);