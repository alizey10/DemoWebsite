"use client"

import Card from "@/app/card/page";
import axios from "axios"
import { useEffect, useState } from "react";
import './product.css';


export default function Products(){

    const [products, setProducts] = useState([])

    useEffect(()=>{

        axios.get('/api/products').then((resp)=>{
            setProducts(resp.data.products);
        })

    }, [])

    return <div className="product-container">

        {<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
          {products.map((product, i) => (
          <div key={i}  >
             <Card  product={product}  />

  <button onClick={function(){
                      axios.delete('/api/products?del='+product._id)
                                            }}>DELETE</button>
          </div>
        ))}
           </div>  
        }

    </div>

}

