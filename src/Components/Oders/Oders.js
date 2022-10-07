import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Oders = () => {
    const { products, initialCart } = useLoaderData(); // { products: products, initialCart: initialCart };
    const [cart, setCart] = useState(initialCart)

    const handleRemoveItem = (id) => {
        // console.log(id)
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)

    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='oders-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }

                {
                    cart.length === 0 && <h2>No Item For Review. Please <Link to='/'> Shop More </Link></h2>
                }
            </div>


            <div className='cart-container'>
                <Cart cart={cart} clearCart={clearCart} >

                </Cart>

            </div>
        </div>
    );
};

export default Oders;