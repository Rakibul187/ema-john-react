import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


/* 
1. count : done
2. perpage (size):10
3. page: count/perpage
4. currentpage (page)


*/
const Shop = () => {
    // const { products, count } = useLoaderData();
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        const url = (`http://localhost:5000/products?page=${page}&size=${size}`)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setCount(data.count)
            })
    }, [page, size])


    const pages = Math.ceil(count / size);


    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        const ids = Object.keys(storedCart);
        console.log(ids);

        fetch('http://localhost:5000/productsById', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(data => {
                for (const id in storedCart) {
                    const addedProduct = data.find(product => product._id === id)
                    if (addedProduct) {
                        const quantity = storedCart[id];
                        addedProduct.quantity = quantity
                        savedCart.push(addedProduct)
                    }
                }
                setCart(savedCart)
            })



    }, [products])

    const handleAddToCart = (selectedProduct) => {
        const exists = cart.find(product => product._id === selectedProduct._id)
        let newCart;
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct._id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {products.map(product => <Product handleAddToCart={handleAddToCart} key={product._id} product={product}></Product>)}
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/orders'><button>Review Items</button></Link>
                </Cart>
            </div>
            <div className='pagination'>
                <h3>Curreent Page {page} & Size {size}</h3>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        onClick={() => setPage(number)}
                        className={page === number && 'selected'}
                    >
                        {number + 1}
                    </button>)
                }
                <select onChange={event => setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;
