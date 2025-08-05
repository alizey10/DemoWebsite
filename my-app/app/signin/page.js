"use client";
import { myStore } from "@/store/store";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Provider } from "react-redux";


export default function Page() {

    return <Provider store={myStore}>
        <Signup></Signup>
    </Provider>

}
 function Signup() {
   const { register, handleSubmit, reset } = useForm();
const saveUser = (user) => {
    axios.post("/api/auth", user).then((resp) => {
      console.log("####");
      console.log(resp.data);});};
 return(
    <div>
      <form onSubmit={handleSubmit(saveUser)}>
        <input {...register("email")} placeholder="Email" /> <br />
        <input {...register("password")} placeholder="Password" /> <br />
        <button>Save User</button>
      </form>
    </div>);}
    