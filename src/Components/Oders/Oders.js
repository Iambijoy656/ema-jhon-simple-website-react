import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Oders = () => {
    const { products, initialCart } = useLoaderData(); // { products: products, initialCart: initialCart };

    const [cart, setCart] = useState(initialCart)

    return (
        <div>
            <h2>This is Orders: {products.length} </h2>
            <p>Initial Cart : {cart.length} </p>
        </div>
    );
};

export default Oders;