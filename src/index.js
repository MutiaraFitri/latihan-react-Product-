import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Product from './Product';
import * as serviceWorker from './serviceWorker';


// function getName(mahasiswa){
//     return 'Nama :' + mahasiswa.nama + 'NIM : ' + mahasiswa.nim;
// }

// function selamatDatang(mahasiswa){
//     if(mahasiswa.angkatan < 2019){
//         return "Selamat datang Maba " + mahasiswa.nama;
//     }else{
//         return ".........";
//     }
// }

// const mahasiswi = {
//     nama : 'Risang Hapsari' ,
//     nim  : '123456',
//     angkatan : 2018
// }

// const element = (<h1>
//     Mahasiswa {selamatDatang(mahasiswi)}
// </h1>);

// function tick(){
//     const element = (
//         <div>
//             <h1>Morning Cinta </h1>
//             <h2> It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );

// ReactDOM.render(
//     element,document.getElementById('root'));
// }

// setInterval(tick, 1000);

//ini bagian components and props

// function Product(props){
//     return (<div><h1>{props.judul}</h1><h3>{props.harga}</h3></div>)
// }

// class Product extends React.Component{
//     render(){
//         return (<div><h1>{this.props.judul}</h1><h3>Rp. {this.props.harga}</h3></div>);
//     }
// }

const element = <Product judul = "Powerbank" harga = "100.000"/>;

ReactDOM.render(<App/>,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
