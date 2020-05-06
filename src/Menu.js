import React from 'react'
import './App.css'

class Menu extends React.Component {
    constructor() {
        super()
        this.state = {
            menu: false
        };
        this.onMenu = this.onMenu.bind(this);
    }

    onMenu() {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            !this.state.menu ?
                <div>
                    <p onClick={this.onMenu} className="el2 link pa3 dn-l pointer">
                       <br /> ☰
                    </p>
                    <div className='dn db-l'>
                        <nav className='flex dib f3 mh2 mt4 justify-around'>
                            <a className='el link' href='#Introduction'>Introduction</a>
                            <a className='el link' href='#Skills'>Skills</a>
                            <a className='el link' href='#Technology'>Technology</a>
                            <a className='el link' href='#Instances'>Instances</a>
                            <a className='el link' href='#Contact_me'>Contact me</a>
                        </nav>
                    </div>
                </div>
                :
                <div>
                    <div className='dn-l'>
                        <p onClick={this.onMenu} className="el2 link pa3 pointer">
                            <br /> X
                        </p>
                        <div>
                            <nav className='flex flex-column f3 ml5 mt4'>
                                <a className='el link' href='#Introduction'>Introduction</a>
                                <a className='el link' href='#Skills'>Skills</a>
                                <a className='el link' href='#Technology'>Technology</a>
                                <a className='el link' href='#Instances'>Instances</a>
                                <a className='el link' href='#Contact_me'>Contact me</a>
                            </nav>
                        </div>
                    </div>
                    <div className='dn di-l'>
                        <nav className='flex dib f3 mh2 mt4 justify-around'>
                            <a className='el link' href='#Introduction'>Introduction</a>
                            <a className='el link' href='#Skills'>Skills</a>
                            <a className='el link' href='#Technology'>Technology</a>
                            <a className='el link' href='#Instances'>Instances</a>
                            <a className='el link' href='#Contact_me'>Contact me</a>
                        </nav>
                    </div>
                </div>

        )
    }
}

export default Menu