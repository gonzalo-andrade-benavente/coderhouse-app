import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const url = `http://localhost:5000/api/product`;

  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({});

  const getProducts = async () => {
    const get = await fetch(url);
    const res = await get.json();
    setProducts([...res.data]);
  }


  useEffect(async () => {
    await getProducts();
  }, []);

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

    if (res.data._id != undefined) {
      await getProducts();
    }

  }

  const inputHandle = ({ target: { name, value } }) => {

    setProduct({
      ...product,
      [name]: value
    });

  }

  return (
    <div className="App">

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
  );
}

export default App;
