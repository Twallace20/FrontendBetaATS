import React, {  useEffect } from "react";
import Fade from "react-reveal/Fade";
import StripeCheckout from 'react-stripe-checkout'
// import { toast } from 'react-toastify'
import { useSelector, useDispatch} from 'react-redux'

// import { createOrder, clearOrder } from "../actions/orderActions";

// toast.configure()

//pubkey pk_test_51IMwk0AYaXiySqGxq7i0k4CeGEnZ83nWqC46fRvrUqM0tmMhW7mnMho258BhACsXC0r6rnW5bS5wUUZ5q1Srr7P200KjBBVQXp


//secret sk_test_51IMwk0AYaXiySqGxCnvn9y2DfLh15M7MBhv642GMBicowYhiV2gdgYu9stItjoENEOqAvddhNnSgnGipht7o2ziY00gRXMNn41


function handleToken(token, addresses){
  console.log({token, addresses})
}

const Cart = ({ order, history }) => {
  const dispatch = useDispatch()
  const cartItems= useSelector((state)=> state.cart)
  let total;

  useEffect( () => { 
    cartItems.forEach(item => total = total + item.price)
  })
const getTotal = () => {
  let sum = cartItems.reduce((a, b) => {
  return a + b.price
}, 0)
 return sum 
}

const removeFromCart = (product) => { 
  dispatch({
    type: "REMOVE_FROM_CART",
    product: product
  })
}
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart{" "}
          </div>
        )}
        <div>
          <div className="cart">
            <Fade left cascade>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <div>
                      <img src={item.first_effect} alt={item.name}></img>
                    </div>
                    <div>
                      <div>{item.name}</div>
                      <div className="right">
                        ${(item.price)} x {1}{"   "}
                        <button
                          className="button-remove"
                          onClick={() => removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>
                    Total: ${getTotal()}
                  </div>
                  <StripeCheckout 
                  stripeKey="pk_test_51IMwk0AYaXiySqGxq7i0k4CeGEnZ83nWqC46fRvrUqM0tmMhW7mnMho258BhACsXC0r6rnW5bS5wUUZ5q1Srr7P200KjBBVQXp"
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  amount={getTotal() * 100}/>

                  {/* <button
                    onClick={()=> history.push("/order")
                      // setState({ showCheckout: true });
                      
                      // submitOrder();
                    }
                    className="button primary"
                  >
                    Proceed
                  </button> */}

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }


export default Cart


