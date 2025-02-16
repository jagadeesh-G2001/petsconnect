import React from 'react'
import Navbar from '../component/navbar/navbar'
import { Link } from 'react-router-dom'
import './home.css'
export function Home() {

    return (

        <div>
             <Navbar />
         <div className='ad1'>
                    <Link to="/petaccessories"><img src='/images/a.jpg' alt="Dog" className='imagead1' /></Link>
                </div>
                <div className='ad1'>
                    <Link to="/pet"><img src='/images/c.jpg' alt="Dog" className='imagead1' /></Link>
                </div>

        </div>





    )


}