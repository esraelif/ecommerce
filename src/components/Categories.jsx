import React, { useState } from 'react';
import CategoryItem from './CategoryItem';

const Categories = () => {
    const [products, setProducts] = useState([]);
    const [showProducts, setShowProducts] = useState(false);

    const fetchProducts = () => {
        fetch('https://65f7f893b4f842e80886848f.mockapi.io/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log('Error fetching data'));
    }

    const handleKeepShopping = () => {
        setShowProducts(true);
        fetchProducts();
    }

    return (
        <div className='container' style={{ display: "flex", flexDirection: "column", padding: "20px", justifyContent: "space-between", background: "lightblue" }}>
            <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>PRODUCTS</h1>
            <div className="buton" style={{ display: "flex", justifyContent: "center", margin: "20px 30px" }}>
                <button style={{ height: "80px", width: "150px", marginRight: "20px", background: "teal" }} onClick={handleKeepShopping}>KEEP SHOPPING</button>
                <button style={{ height: "80px", width: "150px", background: "lightyellow" }} >ADD NEW PRODUCT</button>
            </div>

            {showProducts && (
                <div className="productList" style={{ display: "flex", justifyContent: "center" }}>
                    {products.map(product => (
                        <CategoryItem key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Categories;
