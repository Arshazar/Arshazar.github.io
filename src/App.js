import React, { Component } from 'react'
import Menu from './Menu'
import MainPage from './MainPage'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Menu />
                <MainPage />
            </div>
        );
    }
}

export default App