import React, { Component } from 'react';
import Cookies from 'js-cookie';

export default class Logout extends Component {

    componentDidMount() {
        
        Cookies.remove('user', { path: '/' });
    }

    render() {
        return (
            <div>
                <h3>Hope to see you soon! Drive safe!</h3>
            </div>
        )
    }
}
