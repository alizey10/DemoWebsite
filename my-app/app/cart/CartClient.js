// 'use client'
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, addToCart } from '@/store/reducers/cart';
// import { useEffect } from 'react';
// export default function CartClient() {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();
//   function saveData() {
//     localStorage.setItem('data', JSON.stringify(cartItems));
//   }
//   function loadData() {
//     const mitems = JSON.parse(localStorage.getItem('data')) || [];
//     return mitems;
//   }
//   useEffect(() => {
//   const loadedItems = loadData();
//   if (cartItems.length === 0 && loadedItems.length > 0) {
//     loadedItems.forEach(item => dispatch(addToCart(item)));
//   }
// }, []);
//   useEffect(() => {
//     saveData();
//   }, [cartItems]);
//   return (
//     <div className="container">
//       <h2 className="my-cart">🛒 Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Cart is empty</p>
//       ) : (
//         cartItems.map((item,index) => (
//           <div key={index} className="mb-3 p-3 border rounded d-flex align-items-center">
//             <img src={item.display} width={80} className="me-3" />
//             <div style={{ flexGrow: 1 }}>
//               <h5>{item.title}</h5>
//             </div>
//             <button
//               onClick={() => dispatch(removeFromCart(index))}
//               className="btn btn-danger"
//             >
//               Remove
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }