import React from "react";
import {useSelector, useDispatch} from 'react-redux'

import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

// import { connect } from "react-redux";
// import { fetchProducts } from "../actions/productActions";
// import { addToCart } from "../actions/cartActions";

// import { ADD_TO_CART} from '../types'

// dispatch to send actions to store
const Products= ({products})=>{

  const dispatch = useDispatch()

  const modalProduct = useSelector( (state) => state.modalProduct )
  
 const addToCart = (product) => {
    console.log("clicked", product)
    
    dispatch({
      type: "ADD_TO_CART",
      product: product
    })

    // const cartItems = getState().cart.cartItems.slice();
    // let alreadyExists = false;
    // cartItems.forEach((x) => {
    //   if (x._id === product._id) {
    //     alreadyExists = true;
    //     x.count++;
    //   }
    // });
    // if (!alreadyExists) {
    //   cartItems.push({ ...product, count: 1 });
    // }
    // dispatch({
    //   type: ADD_TO_CART,
    //   payload: { cartItems },
    // });
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
  };

  // const  newFunc = () => {
  //   console.log("clicked")
  // }

  const openModal = (product) => {
    // setState({ product });
    dispatch({
      type: "Whatever",
      product: product
    })
  };
  const closeModal = () => {
    // setState({ product: null });
    dispatch({
      type: "Whatever",
      product: null
    })
  };
    
    return (

<div>
        <Fade bottom cascade>
          {!products ? (
            <div>Load</div>
          ) : 
          
          (
            <ul className="products">
              {products.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <a
                      href={"#" + product._id}
                      onClick={() => openModal(product)}
                    >
                      <img src={product.first_effect} alt={product.name} height="300" width="300"></img>
                      <p>{product.name}</p>
                      <p>By: {product.brand}</p>
                      <p>THC: {product.thc}%</p>
                      <p>Weght: {product.third_effect}</p>
                    </a>
                    <div className="product-price">
                      <div>{formatCurrency(product.price)}</div>
                      {/* <button
                        onClick={() => {
                          addToCart(modalProduct);
                        }}
                        className="button primary"
                      >
                        Add To Cart
                      </button> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Fade>
        {modalProduct && (
          <Modal isOpen={true} onRequestClose={closeModal}>
            <Zoom>
              <button className="close-modal" onClick={closeModal}>
                x
              </button>
              <div className="product-details">
                <img src={modalProduct.first_effect} alt={modalProduct.name} height="300" width="300"></img>
                <div className="product-details-description">
                  <p>
                    <strong>{modalProduct.category}</strong>
                    <br></br>
                    <strong>THC: {modalProduct.thc}%</strong>
                    <br></br>
                    <strong>Weight: {modalProduct.third_effect}</strong>
                  </p>
                  <p>{modalProduct.description}</p>
                  <div className="product-price">
                    <div>{formatCurrency(modalProduct.price)}</div>
                    <button
                      className="button primary"
                      onClick={() => {
                        addToCart(modalProduct);
                        closeModal()
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );

  }



export default Products

// export default connect(
//   (state) => ({ products: state.products.filteredItems }),
//   {
//     fetchProducts,
//     addToCart,
//   }
// )(Products)

// render(){
 
//     return (
    

//   <div className={`column ${props.products.category}`} id={props.products.id}>
//   <div className="card h-100">
//       <a href="www.google.com"><img className="card-img-top" src="some"
//       // {process.env.PUBLIC_URL + first_effect} 
//       alt="Nameeee" height="250" width="250"></img></a>
//       {/* {renderImage()} */}
// <div className="card-body">
//    <h4 className="card-title">
//       <a href="www.google.com">{props.productsInfo.name}</a></h4>
//       <h4>{props.productsInfo.brand}</h4>
//      <h5>{props.productsInfo.category}</h5>

//    <h5>${props.productsInfo.price}</h5>
//    <h6>Thc: {props.productsInfo.thc}%</h6>
//    {/* <h5>{props.productsInfo.third_effect}</h5> */}
   

//    <p className="card-text">{props.productsInfo.description}</p>
//        </div>
//        <div className="card-footer">
//            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
//            </div>
//            <button>Add to Cart</button>
//       </div>
//   </div>

//     )
// }
// }

// export default connect(
//   (state) => ({ products: state.products.filteredItems }),
//   {
//     fetchProducts,
//     addToCart,
//   }
// )(Products)


// import React, {Component} from 'react';
// import Page from '../Page';

// export default class Products extends Component {

//     showPage =() => {
//         return props.products.map(product => {
//             return <Page key={product.id} productsInfo={product}/>
//         })
//     }

//   render(){
//       return (
//           <div className="row">
//               {showPage()}
             
//           </div>
//       )
//   }
// }
