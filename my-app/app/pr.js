
// export default function Check(){

//   let [text, setText] = useState('off');

//   function controlText(){
//     if(text == "off"){
//       setText("on")
//     }else{
//       setText("off")
//     }
//   }
//   return <div>
//       <h1>{text}</h1>
//     <button onClick={controlText}>Toggle text</button>

//   </div>

// }

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   age: Number,
// });

// const User = mongoose.models.User || mongoose.model("User", userSchema);

// export default User;



// npm run build

// githubdesktop per git ko push karden

// .gitognore ko check krlen

// vercel per aakar github se coinnect hon aur apni repo ko import krlen
// aur deploy buutton per click



// "use client";

// import { useState } from "react"


// function UserRow({abc, deleteUser, i}) {

//   return <tr>
//             <td>{abc.name}</td>
//             <td>
//               <button type="button" onClick={
//                 function(){
//                  deleteUser(i);
//                 }
//               }>Delete</button>
//             </td>
//           </tr>

// }

// export default function Main(){

//   let [users, setUsers] = useState([
//     {
//       name:'ali'
//     },
//     {
//       name:'aqsa'
//     },
//     {
//       name:'yahya'
//     }
//   ]);

//   function deleteUser(index){
//     users.splice(index, 1); 
//     setUsers([...users]);
//     // alert(2390)
//   }

//   debugger;

//   return <div>

//     {/* <button onClick={function(){
//         alert(20);
//     }}>asdsd</button> */}

//     <table border={1}>

//       {
//         users.map(function(user, i){
//           return <UserRow key={i} i={i} deleteUser={deleteUser} abc={user}></UserRow>
//         })
//       }

//     </table>
 

//   </div>
 


// }

// "use client";

// import $ from 'jquery';
// import 'jquery-ui/ui/widgets/draggable';
// // import { useEffect, useState } from 'react';

// export default function Page(){

//   let [boxes, setBoxes] = useState([
//     {
//       name: "ali"
//     },
//     {
//       name: "aqsa"
//     }
//   ])
//   let addName=prompt("enter name");

//   useEffect(function(){
//     $('.myBox').draggable();
//   }, [boxes])

  
//   const addBox = () => {

//     boxes.push({name: addName});
//   setBoxes([...boxes])

//   }
  // function addBox(){

  // }


//   return <div>

//   <button onClick={addBox}>Add Box</button>

// {
//       boxes.map(box=>{

//         return <div key={box.name} className="myBox" style={
//           {
//             width:'100px',
//             height:'100px',
//             backgroundColor:'orange'
//           }
//         }>
//           </div>
//     })
// }

  

//   </div>

// }

// let dispatch = useDispatch();
    // let dispatch1 = useDispatch();


    // let someData = useSelector(function(store){
    //   return store.userReducer;
    // })

    // let producutsdData = useSelector(function(store){
    //   return store.productReducer;
    // })

    // // console.log(someData);
    // console.log(producutsdData);
{/* {
        someData.names.map((name, meraIndex)=>{
          return <div>
            {name} 
            <button onClick={function(){

              meraIndex

              dispatch( removeKardo(meraIndex) );

            }}>Delete</button>
          </div>
        })
      } */}

      {/* {
        producutsdData.products.map((item,myIndex)=>{
          return <div>{item}
           <button onClick={function(){

              myIndex

              dispatch1( removeProducts(myIndex) );

            }}>Delete</button>
          </div>
        })
      } */}

      // import {configureStore, combineReducers} from '@reduxjs/toolkit';
// // import { userReducer } from './reducers/user';
// import { productReducer } from './reducers/product';
// // dataSendKRna
// // dataPullKrna
// let baraReducer = combineReducers({
//     // userReducer: userReducer.reducer,
//     productReducer: productReducer.reducer
//     })
// export let meraStore = configureStore({
//     reducer:baraReducer
// });