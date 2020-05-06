import React from 'react'
import './App.css'
import Instances from "./Instances";

class MainPage extends React.Component {
    render() {
        return (
            <div className="">
                <div className='mt7 mh4'>
                    <h1 id="Introduction" className='neon'>Introduction</h1>
                    <p className='flex-row f4 w-100 w-50-l'>
                        Born in 1997...<br/>
                        I've loved coding since I was a teenager.I started coding in 2011 with C++; I've always been a kin to learn new languages and technologies to accommodate myself to the world...
                        So I learned what I wrote on a few lines down.<br/>
                        I began to develop on internet since 2018; actually became a full stack developer!
                    </p>
                </div>
                <div className='mt7 mh4'>
                    <h1 id="Skills" className='neon'>Skills</h1>
                    <div className='flex flex-wrap justify-between w-100 w-50-l w-50-ns'>
                        <p className='el2'>Front-end</p>
                        <p className='el2'>Back-end</p>
                        <p className='el2'>Database</p>
                    </div>
                </div>
                <div className='mt7 mh4'>
                    <h1 id="Technology" className='neon'>Technology</h1>
                    <div className='flex flex-wrap justify-between w-70'>
                        <p className='el2 ma2'>Reactjs</p>
                        <p className='el2 ma2'>Redux</p>
                        <p className='el2 ma2'>Tachyons</p>
                        <p className='el2 ma2'>Bootstrap</p>
                        <p className='el2 ma2'>Nodejs</p>
                        <p className='el2 ma2'>Docker</p>
                        <p className='el2 ma2'>MongoDB</p>
                        <p className='el2 ma2'>PostgreSQL</p>
                        <p className='el2 ma2'>Redis</p>
                        <p className='el2 ma2'>Parcel</p>
                        <p className='el2 ma2'>Webpack</p>
                        <p className='el2 ma2'>Serverless</p>
                        <p className='el2 ma2'>Nginx</p>
                        <p className='el2 ma2'>Wordpress</p>
                        <p className='el2 ma2'>SEO</p>
                    </div>
                </div>
                <div className='mt7 mh4'>
                    <h1 id="Instances" className='neon'>Instances</h1>
                    <Instances />
                </div>
                <div className='mt7 mh4 mb5'>
                    <h1 id="Contact_me" className='neon'>Contact Me</h1>
                    <div className='w-50 flex flex-column justify-between'>
                        <p className='el2'>4rsh4vir4z4rf4r@gmail.com</p>
                        <a className='el2' href='https://t.me/itsArsha'>Telegram</a>
                        <a className='el2' href="https://github.com/Arshazar">Github</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage