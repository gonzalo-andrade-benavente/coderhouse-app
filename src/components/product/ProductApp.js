import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

export const ProductApp = () => {

    const url = `http://localhost:5000/api/product`;

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const get = await fetch(url);
        const res = await get.json();
        setProducts([...res.data]);
    }
    
    useEffect(async () => {
        await getProducts();
    }, []);

    return(
        <div>
            <Link to="/product">New Product</Link>            
            {
                products.map(product => {
                return (
                    <div key={product._id} className="card">
                    <div className="card-body">
                        <h5 className="card-title"> {product.nombre} </h5>
                        <h6 className="card-subtitle mb-2 text-muted"> {product.codigo} </h6>
                        <p className="card-text">{product.descripcion}</p>
                        <a href="#" className="card-link">$ {product.precio} </a>
                        <a href="#" className="card-link">{product.stock}</a>
                    </div>
                    </div>
                );
                })
            }
        </div>
    )
}