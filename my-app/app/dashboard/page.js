
'use client';
import { useState,useEffect } from "react";
import axios from "axios";
import { Provider, useSelector } from "react-redux";
import Private from "../privateroute/privateroute";
import { myStore } from "@/store/store";
// import { useDispatch } from 'react-redux';
// import { addToCart } from "@/store/reducers/cart";
// export default function Dashboard() {

    

//      let[cards,setCards]=useState([]);
//         useEffect(()=>{
//             axios.get('/api/card').then((resp)=>{
//                 setCards(resp.data);
//             })
//         },[])
//   const dispatch = useDispatch();

//   const handleAddToCart = (item) => {
//     dispatch(addToCart(item));
//   };
//    const handleSaveCard = async (card) => {
//     try {
//       const res = await axios.post('/api/card', card);
//       alert("Card saved successfully!");
//     } catch (err) {
//       console.error("Save failed", err);
//       alert("Failed to save card.");
//     }
//   };

    
// //   const saveCard = (card) => {

// //         axios.post('/api/auth', card).then((resp)=>{
// //             console.log("####");
// //             console.log(resp.data)
// //         })
       
        
// //     }

//     let Data=[
//         {display : "https://m.media-amazon.com/images/I/91CnBmI3G8L._AC_UL480_FMwebp_QL65_.jpg",
//         title : "Gaming"},
//         {display : "https://m.media-amazon.com/images/I/81rNYUkBrhL._AC_UL480_FMwebp_QL65_.jpg",
//         title : "Toys"},
//         {display : "https://m.media-amazon.com/images/I/817NZ3rrbIL._AC_UL480_FMwebp_QL65_.jpg",
//         title : "Appliances"},
//         {display : "https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_UL480_FMwebp_QL65_.jpg",
//         title : "Jackets"},
//     ]
//     let data2=[
//         {display : "https://m.media-amazon.com/images/I/61+Jg1fJSsL._AC_UL480_FMwebp_QL65_.jpg",
//         title : "Dishes"},
//         {display : "https://m.media-amazon.com/images/I/61ZtqtvoD2L._AC_UL480_FMwebp_QL65_.jpg",
//         title : "Fitness "},
//         {display : "https://m.media-amazon.com/images/I/91fvrTEW2pL._AC_UL480_FMwebp_QL65_.jpg",
//         title : "Wall Art"},
//         {display : "https://m.media-amazon.com/images/I/81r6qkuqctL._AC_UL480_FMwebp_QL65_.jpg",
//         title : "Health "},

//     ]
//     return <div>
//     <div>
//         <div className="Box">
//         {Data.map((data1)=>(
//             <div key={data1.title} className="picture">
//                <div>
//                 <img src={data1.display} />
//                 <div className="title">{data1.title}
                  
//                 </div>
//                  <button onClick={() => handleAddToCart(data1)}>Add to Cart</button>
//                          <button onClick={() => handleSaveCard(data1)}>Save Card</button>
//                </div>
   

//             </div>
//         ))}
//         </div>
//     </div>
//     <div>
//         <div className="Box1">
//         {data2.map((datas)=>(
//             <div key={datas.title} className="picture1">
//                <div>
//                 <img src={datas.display} />
//                 <div className="title">{datas.title}</div>
//                  <button onClick={() => handleAddToCart(datas)}>Add to Cart</button>
//                                          <button onClick={() => handleSaveCard(datas)}>Save Card</button>


//                </div>
        

//             </div>
//         ))}
//         </div>
//     </div>
//     </div>

// }
export default function Page(){
  return <Provider store={myStore}>
    <Private>
      <Dashboard></Dashboard>
    </Private>
  </Provider>
}


 function Dashboard(){

  let[products,setProducts]=useState([]);
  let user= useSelector((store)=>{
    return store.userReducer.currentUser;
  });
  useEffect(()=>{
    axios.post('/api/products',{
      action : "getProduct",
      userId:user._id

    }).then((resp)=>{
      setProducts(resp.data.products);
    
    })
  },[]);
    return  <div>
            <h2>Products</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {products.map((products, i) => (
                        
                            <tr key={i}>
                            <td>{products.name}</td>
                            <td>{products.price}</td>
                            <td>{products.description}</td>
                            </tr>
                               
                        
                    ))}
                </tbody>
            </table>
        </div>
  
}


