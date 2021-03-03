import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { fetchOrders } from "../actions/orderActions";
// import formatCurrency from "../util";
import { useSelector} from 'react-redux'

const Orders = ()=> {
  // componentDidMount() {
  //   this.props.fetchOrders();
  // }
  // render() {
    // const { orders } = this.props;
    // const dispatch = useDispatch();


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

    const orders = useSelector(state => state.cart)
    return !orders ? (
      <div>Orders</div>
    ) : (
      <div className="orders">
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Strain</th>
              <th>Category</th>
              <th>Price</th>
              <th>Name</th>
              <th>Weight</th>
              <th>Brand</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order.strain}</td>
                <td>{order.category}</td>
                <td> {order.price}</td>
                <td>{order.name}</td>
                <td>{order.third_effect}</td>
                <td>{order.brand}</td>
                
                  {/* {order.map((item) => (
                    <div>
                      {item.count} {" x "} {item.title}
                    </div>
                  ))} */}
                
              </tr>
            ))}
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
              <td>${getTotal()}</td>
              </tr>
            
          </tbody>
          <h1>Your order is being processed</h1>
        </table>
      </div>
    );
  }

export default Orders
// export default connect(
//   (state) => ({
//     orders: state.order.orders,
//   }),
//   {
//     fetchOrders,
//   }
// )(Orders);
