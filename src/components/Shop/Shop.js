import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart , setCart] = useState([])

    const handleAddToCart = (product) =>{
        const newCart = [...cart,product]
        setCart(newCart);
    }

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
  return (
    <div className='shop-container'>

        <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
        </div>
        <div className="order-summery">
                <h2>Order Summery</h2>
                <p>Selected Items: {cart.length}</p>
        </div>
        
    </div>
  )
}

export default Shop