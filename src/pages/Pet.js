import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/navbar/navbar';
import './pethomepage.css'
export function Pet() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='petcontainer'>
                <div className='dog'>
                    <Link to="/dog"><img src='/pet/dog.png' alt="Dog" /></Link>
                </div>
                <div className='cat'>
                    <Link to="/cat"><img src='/pet/cat.png' alt="Cat" /></Link>
                </div>
                <div className='bird'>
                    <Link to="/bird"><img src='/pet/parrot.png' alt="Parrot" /></Link>
                </div>
                <div className='fish'>
                    <Link to="/fish"><img src='/pet/fish.png' alt="Fish" /></Link>
                </div>
                <div className='hamsters'>
                    <Link to="/hamsters"><img src='/pet/hamsters.png' alt="Hamsters" /></Link>
                </div>
                <div className='others'>
                    <Link to="/otherpets"><img src='/pet/other.jpg' alt="Other" /></Link>
                </div>
            </div>
        </>
    );
}
