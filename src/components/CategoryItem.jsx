
import React, { useState } from 'react';

const CategoryItem = ({ product }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <div className='container' style={{}}>
            <div className='categoryItem' style={{ width: "400px", margin: "10px", border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}>
                <img src={product.img} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "5px" }} />
                <div className="info">
                    <h2 className='title'>{product.title}</h2>
                    <h3>{product.amount}+ bought last month</h3>
                    {isExpanded(
                        <>
                            <p className="description">{product.desc}</p>
                            <p className="price" style={{ fontSize: "30px" }}>Price: ${product.price}</p>
                        </>


                    )}


                </div>
            </div>

        </div>

    );
}

export default CategoryItem;

