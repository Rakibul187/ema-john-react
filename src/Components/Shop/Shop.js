import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        const exists = cart.find(product => product.id === selectedProduct.id)
        let newCart;
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {products.map(product => <Product handleAddToCart={handleAddToCart} key={product.id} product={product}></Product>)}
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;


/* useEffect(() => {
    console.log('local storage first line', products)
    const storedCart = getStoredCart();
    const savedCart = []
    for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    setCart(savedCart)
}, [products]) */