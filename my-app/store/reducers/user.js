
// import { createSlice } from "@reduxjs/toolkit";

// export let userReducer = createSlice({
//     name:"userKaData",
//     initialState:{
//         names:[
//             "ali",
//             "rameez",
//             "aqsa",
//             "yahya"
//         ]
//     },
//     reducers:{
//         addName(puranaData, newData){

//             puranaData.names.push(newData.payload)

//         },
//         removeKardo(puranaData, newData){
//             puranaData.names.splice(newData.payload, 1)
//         }
//     }
// })

// export let {addName, removeKardo} = userReducer.actions;


import { createSlice } from "@reduxjs/toolkit";

export let userReducer = createSlice({
    name:"userKaData",
    initialState:{
        status:'',
        currentUser:null,
    },
    reducers:{
        setLoading(oldData, newData){
            oldData.status = newData.payload
        },
        loginButton(oldData, newData){

        oldData.currentUser = newData.payload

        },
        logoutButton(oldData, newData){
            oldData.currentUser = null
            localStorage.removeItem('mytoken');
        }
    }
})

export let {loginButton, logoutButton,setLoading} = userReducer.actions;