import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Private({children}){
    let router = useRouter()
    let user= useSelector((store)=>{
        return store.userReducer.currentUser;
    });
    let loadingState=useSelector((store)=>{
return store.userReducer.status;
    })
    useEffect(()=>{
        if(loadingState=='loadingEnd'&& !user){
            router.push('/login');
        }
    },[loadingState,user]);
    return <div>
        {user?children:null }
    </div>


}