import React from 'react'
import './App.css'
import robot from './robot.jpg'
import smart from './smart.jpg'

class Instances extends React.Component {
    onLink = (http) => {
        window.open(http, '_blank')
    }

    render() {
        return (
            <div className='w-100'>
                <div className="flex flex-wrap mh4 tc w-100">
                    <div className="flex-column br3 bg-white-90 w-70 w-30-l w-40-ns grow ba pa2 ma3 pointer" onClick={() => this.onLink('https://Arshazar.github.io/robofriendz')}>
                        <img className='pic' src={robot} alt="robot" />
                        <h3 className='black'>Robofriendz</h3>
                    </div>
                    <div className="flex-column br3 bg-white-90 w-70 w-30-l w-40-ns grow ba pa2 ma3 pointer" onClick={() => this.onLink('https://Arshazar.github.io/facerecognitionapp')}>
                        <img className='pic' src={smart} alt="smart" />
                        <h3 className='black'>Facerecognition app</h3>
                    </div>
                </div>
            </div>
        );
    }

}

export default Instances