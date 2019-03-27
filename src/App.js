import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

import Banner from './Banner/Banner';
import Layanan from './Banner/Layanan';

class App extends Component {

  //26maret setelah quiz pertama
  constructor(){
    super();
    this.state = {
      products : [
        {
          judul : 'Powerbank 1',
          harga : '100.000'
        },
        {
          judul : 'Powerbank 2',
          harga : '150.000'
        },
        {
          judul : 'Kabel Data',
          harga : '20.000'
        }
      ]
    }
  }

componentDidMount(){
  fetch('https://my-json-server.typicode.com/MutiaraFitri/product_api/products')
  .then(response => response.json())
  .then((data)=>{
    this.setState({products :data})
  })
}

  render() {
    return (

      <div className="container">
          <div className="row">
                  {
                    
                    this.state.products.map((data,key) =>
                        <Product className="columns" judul={data.judul} harga = {data.harga}/>
                    
                    )
                  }
          </div>
      </div>
    );
  }
}

export default App;
