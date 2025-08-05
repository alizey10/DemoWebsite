
"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { Provider, useSelector } from "react-redux";
import Private from "../privateroute/privateroute";
import { myStore } from "@/store/store";
export default function Page() {

    return <Provider store={myStore}>       
        <Private>
            <Product></Product>
        </Private> 
    </Provider>

}




function Product() {

    let user=useSelector((store)=>{return store.userReducer.currentUser;})
    const { register, handleSubmit, reset } = useForm();

    const saveUser = (product) => {

        let nyaForm = new FormData();

        nyaForm.append('name', product.name);
        nyaForm.append('owner', user._id);

        nyaForm.append('price', product.price);
        nyaForm.append('description', product.description);
        nyaForm.append('logo', product.logo[0]);

        axios.post('/api/products', nyaForm).then((resp)=>{   
            toast.success("Product created");
            console.log(resp.data)
        })
       
        
    }


    


    return <div>
        <form onSubmit={handleSubmit(saveUser)}>
            <input {...register('name')} placeholder="Name" /> <br />
            <input {...register('price')} placeholder="price" /> <br />        
            <input {...register('description')} placeholder="description" /> <br />        
            <input {...register('logo')} placeholder="description" type="file" /> <br />        
            <button>Save User</button>
        </form>
    </div>

}