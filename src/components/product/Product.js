import React from "react";
import { useState } from "react";

export const Product = () => {

    const url = `http://localhost:5000/api/product`;

    const [product, setProduct] = useState({});


    const submitHandle = async (e) => {
        e.preventDefault();

        const post = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
                //'Content-Type': 'application/x-www-form-urlencoded' ,
            },
        });

        const res = await post.json();
    }

    const inputHandle = ({ target: { name, value } }) => {

        setProduct({
            ...product,
            [name]: value
        });

    }


    return (
        <form onSubmit={submitHandle}>

            <div className="form-group">
                <div className="row">
                    <div className="col">
                        <input onChange={inputHandle} type="text" className="form-control" id="nombre" name="nombre" placeholder="Nombre del producto" />
                    </div>
                    <div className="col">
                        <input onChange={inputHandle} type="text" className="form-control" id="descripcion" name="descripcion" placeholder="Descripción del producto" />
                    </div>
                </div>
            </div>

            <div className="form-group">
                <div className="row">
                    <div className="col">
                        <input onChange={inputHandle} type="text" className="form-control" id="codigo" name="codigo" placeholder="Código del producto" />
                    </div>
                    <div className="col">
                        <input onChange={inputHandle} type="text" className="form-control" id="foto" name="foto" placeholder="Url de la imagen producto" />
                    </div>
                </div>
            </div>

            <div className="form-group">
                <div className="row">
                    <div className="col">
                        <input onChange={inputHandle} type="text" className="form-control" id="precio" name="precio" placeholder="Precio del producto" />
                    </div>
                    <div className="col">
                        <input onChange={inputHandle} type="text" className="form-control" id="stock" name="stock" placeholder="Stock del producto" />
                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
    )

}