
"use client"; 

import { loginButton } from '@/store/reducers/user';
import { myStore } from '@/store/store';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Provider, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
// export default function Home() {
//  return <div>
//   <Provider store={meraStore}>
//     <Login></Login>
//   </Provider>
//  </div>
// }
// function showToast(message, type) {
//   const options = {

//     className:
//       type === "success"
//         ? "custom-toast-success"
//         : type === "error"
//         ? "custom-toast-error"
//         : "custom-toast-default",
//   };

//   if (type === "success") {
//     toast.success(message, options);
//   } else if (type === "error") {
//     toast.error(message, options);
//   } else {
//     toast(message, options);
//   }
// }

//  function Login(){
// let dispatch = useDispatch();

//     const {register, handleSubmit, formState:{errors}} = useForm();
//       const loginForm=(meraData)=>{
//         console.log(meraData)
//         meraData.action = "loading"
//          axios.post('/api/auth', meraData).then((resp)=>{
//         if(resp.data){
//           dispatch(loginButton(resp.data))
//         }else{
//           toast.error("Invalid credentials")
//         }
//         console.log(resp.data)
//         })
//       }
     

//     function onSave(meraData){
//       console.log(meraData);
//          showToast("Login successful!", "success");
//    }
//    function onError(errorList) {
//     console.log("Validation errors:", errorList);
//     showToast("Login failed! Please fix the errors.", "error");
//   }
  
 

//    let cities = ['faisalabad' , 'rawalpindi', 'lahore','gujranwala','multan','Bahawalpur','sargodha','sialkot','Sheikhupura','jhang','karachi','peshawar','quetta','hyderabad','islamabad','mardan','buner','bannu','swabi','murree','gallat','hangu','bajaur','khyber','sindh','punjab','balochistan','sindh','punjab','balochistan'];

//     return ( <> <ToastContainer  
    
//         position="top-center"
//     autoClose= {3000}
//     hideProgressBar= {false}
//     closeOnClick= {true}
//     pauseOnHover= {true}
//     draggable= {true}
//     progress={undefined}
    
    
//     /><form onSubmit={handleSubmit(onSave,onError,loginForm)} className='centered'>
//   <div data-mdb-input-init className="form-outline mb-4">
//     <input placeholder='Email'{...register('emailBox', {required:true, validate:function(myValue){

//       if(myValue.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
//         return true
//       }else{
//         return false;
//       }

//     }})} type="text" id="emailBox" className="form-control" />
//     {errors.emailBox && errors.emailBox.type == "required" ? <label className="text-danger">This field is required</label> : null}
//     {errors.emailBox && errors.emailBox.type == "validate" ? <label className="text-danger">Please enter a valid email</label> : null}
//   </div>


//   <div data-mdb-input-init className="form-outline mb-4">
//     <input placeholder='Password'{...register('passwordBox', {required:true, minLength:7, maxLength:9})} type="password" id="passwordBox" className="form-control" />
//       {errors.passwordBox && errors.passwordBox.type == "required"  ? <label className="text-danger">This field is required</label> : null}
//       {errors.passwordBox && errors.passwordBox.type == "minLength" ? <label className="text-danger">Please enter atleast 7 characters</label> : null}
//       {errors.passwordBox && errors.passwordBox.type == "maxLength" ? <label className="text-danger">Please enter max 9 characters</label> : null}
//   </div>

//     <div data-mdb-input-init className="form-outline mb-4">
//     <input {...register('cityBox', {required:true, validate:function(value){
      
//       if(cities.includes(value.toLowerCase())){
//         return true;
//       }else{
//         return false
//       }

//     }})} type="text" placeholder='Enter city' id="cityBox" className="form-control" />
//       {errors.cityBox && errors.cityBox.type == "required"  ? <label className="text-danger">This field is required</label> : null}
//       {errors.cityBox && errors.cityBox.type == "validate" ? <label className="text-danger">This city is not available</label> : null}
//   </div>

//     <div data-mdb-input-init className="form-outline mb-4">
//     <select {...register('gender', {validate:function(value){

//         if(value == 'Select Gender'){
//           return false;
//         }else{
//           return true;
//         }

//     }})}>
//       <option>Select Gender</option>
//       <option>male</option>
//       <option>female</option>
//     </select>
//     {errors.gender ? <label class="text-danger">Please select gender</label> : null}
//   </div>

//   <div className="row mb-4">
//     <div className="col d-flex justify-content-center">
//       <div className="form-check">
//         <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
//         <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
//       </div>
//     </div>

//     <div className="col">
//       <a href="#!">Forgot password?</a>
//     </div>
//   </div>

//   <button  type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

//   <div className="text-center">
//     <p>Not a member? <a href="#!">Register</a></p>
//     <p>or sign up with:</p>
//     <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
//       <i className="fab fa-facebook-f"></i>
//     </button>

//     <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
//       <i className="fab fa-google"></i>
//     </button>

//     <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
//       <i className="fab fa-twitter"></i>
//     </button>

//     <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
//       <i className="fab fa-github"></i>
//     </button>
//   </div>
  
// </form>
// </>
// );

// };


export default function Page(){


    return <div>        
        
        <Provider store={myStore}>            
            <Login></Login>
        </Provider>

    </div>

}


 function Login() {
let router=useRouter();

    let dispatch = useDispatch();

    let {register, handleSubmit, formState:{errors}} =  useForm();

    const loginForm = (meraData)=>{
        console.log(meraData)
        meraData.action = "loading"

        axios.post('/api/auth', meraData).then((resp)=>{
            

            if(resp.data){
                dispatch( loginButton(resp.data) );
                localStorage.setItem('mytoken', resp.data.token);
                router.push('/dashboard');
            }else{
                toast.error("Invalid credentials");
            }

           
            console.log(resp.data)
        })

    }

    return <div>
        <form onSubmit={handleSubmit(loginForm)}>
            <input placeholder="Email" {...register('email')} /> <br />
            <input placeholder="Password" {...register('password')}/> <br />
            <button>login</button>
        </form>
    </div>

}