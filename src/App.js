// import Top from './Top'

// import Router from './Router'
// import {NavLink} from 'react-router-dom'
// import React, {Component} from 'react'


// const Navigation = (props) => <nav className="navbar">
  
//   <p className="navbar-tag"><NavLink to='/'>Home</NavLink></p>
//   <p className="navbar-tag"><NavLink to='/Shop'>Shop</NavLink></p>
//   <p className="navbar-tag"><NavLink to='/cart'>Cart</NavLink></p>
  
// </nav>

// export default class App extends Component{


//   render(){
//     return (

//       <div className="App">
//      <Navigation />
//      <Router />
//       </div>
//     )
//   }
// }


import React from "react";
// import store from "./store";
// import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import { Route, Router} from "react-router"
import HomeScreen from "./screens/HomeScreen";
import OpenScreen from "./screens/OpenScreen"
// import CartScreen from "./screens/CartScreen"
import AdminScreen from "./screens/AdminScreen";
import Order from "./components/Orders"
// import CartApp from "./CartApp"
import history from "./history"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter history={history}>
          <div className="grid-container">
            <header>
              
            {/* <h2></h2> */}
            <Link to="/home"> Home</Link>
            {/* <h4></h4> */}

            {/* <h3 className="app-name">
              <Link to="/home"> A.T.S.</Link>
              </h3> */}

              {/* <h4></h4> */}
            
              <Link to="/">Shop</Link>
              
              {/* <h4></h4> */}
              
              {/* <Link to="/Cart"> Cart</Link> */}
              <Link to="/order">Order</Link>

              {/* <h3></h3><h3></h3> */}
              {/* <Link to="/admin">Admin</Link> */}
            </header>
            <main className="new-con">
              
              <Route exact path="/admin" component={AdminScreen} />
              <Route exact path="/home" component={OpenScreen} />
              {/* <Route path="/Cart" component={(props)=> <{...props}/>} /> */}
              <Route exact path="/order" component={(props)=> <Order {...props}/>} />
              <Route exact path="/" component={(props)=> <HomeScreen {...props}/>}/>
             
            </main>
            <footer>All The Smoke Copyright 2021</footer>
          </div>
          </BrowserRouter>
          
      
    );
  }
}

export default App;
