import React, { useState } from 'react';
import Navbar from '../component/navbar/navbar';
import data from '../pages/json.json'
import Product from '../component/product';
import '../petaccessories.css'

export function Petaccessories() {
    const [products] = useState(data);
    return (
        <div>
            <Navbar />

            <div className="product">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )


}
//we have to get product list json