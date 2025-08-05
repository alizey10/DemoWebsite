"use client";
import Card from "../card/page";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Products(){
    const [products,setProducts]=useState([]);
    let params= useSearchParams();
    let [load ,setLoad]=useState("");
    let userSearch=params.get('search');

    useEffect(()=>{
        setLoad("loading")
        axios.get('/api/products?search='+ userSearch ).then((resp)=>{
            setProducts(resp.data.products);
            setLoad('loaded')
        })
    },[])
    
     return  <div className="product-container">

        {<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
          {products.map((product, i) => (
          <div key={i}  >
             <Card  product={product}  />

  {
            load =="loaded" && !products.length && <div class="text-center text-danger">
                No search results found
            </div>
            }
          </div>
        ))}
           </div>  
        }

    </div>

           
       
}