import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const ProductApp = () => {

    const url = `http://localhost:5000/api/product`;

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const get = await fetch(url);
        const res = await get.json();
        setProducts([...res.data]);
    }
    
    useEffect(async () => {
        await getProducts();
    }, []);

    const deleteProduct = async (id) => {
    
        const del = await fetch(url + `/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                //'Content-Type': 'application/x-www-form-urlencoded' ,
            },
        });

        const res = await del.json();

        await getProducts();
       
    }


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
                        <input type="button" value="Borrar" onClick={() => deleteProduct(product._id)}/>
                    </div>
                    </div>
                );
                })
            }
        </div>
    )
}