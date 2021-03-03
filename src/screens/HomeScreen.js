import React, { Component } from "react";
// import Filter from "../components/Filter";

import Products from "../components/Products";
import Cart from "../components/Cart";

export default class HomeScreen extends Component {

  state={
    products: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(products => {
      this.setState({
        products: products
      })
    })
  }

  render() {
    
    return (
      <div>
        <div className="content">
          <div className="main">
            {/* <Filter></Filter> */}
            
            <Products products={this.state.products} key={this.state.products.id}/>

            {/* {
              this.state.products.map(p => <Products products={this.state.products} key={p.id} {...p} handleFunc={this.handleFunc} />)
            } */}
          </div>
          <div className="sidebar">
            <Cart history={this.props.history}/>
          </div>
        </div>
        
      </div>
    );
  }
}
