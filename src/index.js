import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import reportWebVitals from './reportWebVitals';






// import { loadStripe } from '@stripe/stripe-js'

// const stripePromise = loadStripe("pk_test_51IMwk0AYaXiySqGxq7i0k4CeGEnZ83nWqC46fRvrUqM0tmMhW7mnMho258BhACsXC0r6rnW5bS5wUUZ5q1Srr7P200KjBBVQXp")

// import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store' 

// const cors = require('cors')
// const express = require('express')
// const stripe = require('stripe')
// ('sk_test_51IMwk0AYaXiySqGxCnvn9y2DfLh15M7MBhv642GMBicowYhiV2gdgYu9stItjoENEOqAvddhNnSgnGipht7o2ziY00gRXMNn41')

// const dap = express();

// dap.use(express.json());
// dap.use(cors());

// function App(){
//     return (
//         <button role="link">
//             Checkout
//         </button>
//     )
// }


const app = <Provider store={store}>

<App />

</Provider>



ReactDOM.render(app, document.getElementById('root'))

// ReactDOM.render(
//   <React.StrictMode>
//       <Provider store={store}>
//     <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// const express = require('express');
// const app = express();
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'T-shirt',
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'https://example.com/success',
//     cancel_url: 'https://example.com/cancel',
//   });

//   res.json({ id: session.id });
// });

// app.listen(4242, () => console.log(`Listening on port ${4242}!`));
