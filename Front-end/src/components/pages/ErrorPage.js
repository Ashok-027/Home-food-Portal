import React, { Component } from 'react';
import Navbar from '../Navbar';
import './Cards.css';
class ErrorPage extends Component {
    render() {
        
        return (
            <>
            <Navbar />

            <div className='error'>

                <h1>404</h1>
                <h1>Error Page Not Found</h1>
            </div>
            </>
        );
    }
}

export default ErrorPage;