import React, { useContext } from 'react';
import { Context } from '../Root/Root';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const {cart} = useContext(Context)

    return (
        <div>
            <h1>Items: {cart.length}</h1>
            <div className='my-4'>
                <div className='flex flex-col gap-4'> 
                    {
                        cart.map((item, idx)=> <CartItem key={idx} item={item}></CartItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;