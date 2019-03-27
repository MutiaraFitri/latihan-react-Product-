import React from 'react';
import './App.css';
import logo from './logo.svg';

class Product extends React.Component{
    render(){
        return (
            <div className="col-md-3 kotak">
            <div className="warna-kotak">
            <img src={logo} className="App-logo" alt="logo" />
            <h3 className="judul">{this.props.judul}</h3>
            <h4 className="harga">{this.props.harga}</h4>
            </div>
            </div>
            );
    }
}

export default Product;