import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import News from '../Components/News';
export default class Newsapp extends Component {
    render() {
        return (
            <>
                <Navbar />
                <News pagesize="6" />
            </>
        )
    }
}
