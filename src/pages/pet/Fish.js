import React, { useEffect, useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import './petpage.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../component/navbar/navbar';

export default function Fish() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://petsconnectapi.onrender.com/Fishes");
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    const navigate = useNavigate();

    return (
        <div>
        <Navbar/>
          <div className="header">Fishes &Aquarim</div>
            <div className='maincontent'>
                {data.map((item, index) => (
                    <div key={index} className='maincontainer'>
                        <div className='product-card'>
                            <div className='product-image'>
                                {item.image && <img src={item.image} alt="Product" />}
                            </div>
                            <div className='product-details'>
                                {item.price && <p>Price:₹{item.price}</p>}
                                {item.description && <p>Description: {item.description}</p>}
                                {item.address && <p>Location: {item.address}</p>}
                                {item.username && <p>Name: {item.username}</p>}
                                {item.phone && <p>Contact No: {item.phone}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='content'></div>
            <div className='addicon'>
                <Link className='link' to="/fishadform"><IoMdAddCircleOutline className='icon' /></Link> 
                <div>
                    Sell
                </div>
            </div>
        </div>
    );
}
