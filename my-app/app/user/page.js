
'use client';
import {useEffect} from "react";
import axios from "axios";
import { useState } from "react";
 export default function User(){

  
    let[users,setUsers]=useState([]);
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        axios.get('/api/auth').then((resp)=>{
            setUsers(resp.data);
        })
    },[])
    useEffect(() => {
    axios.get('/api/card').then((res) => {
      setCards(res.data);
    });
  }, []);
return(
    <div>
          <p>{process.env.NEXT_PUBLIC_YEH_FRONT_WALA}</p>
        <table border="1">
            {
                users.map((user,i)=>{
                    return <tr key={i} >
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                            <button onClick={function(){
                            
                
                                axios.delete('/api/auth?abc='+user._id)
                            }}>DELETE</button>
                        </td>
                         <td>
                 <button onClick={function(){  
                    user.email =  prompt("Enter new name");    
                    axios.put('/api/auth', user)
                        
                   }}>UPdate</button>
                    </td>
                    
                    </tr>
                })
            }
        </table>
        <hr style={{ margin: "40px 0" }} />

      <h2>Saved Cards (From Dashboard)</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {cards.map((card, i) => (
          <div key={i} style={{ width: "120px", textAlign: "center", border: "1px solid gray", padding: "8px" }}>
            <img src={card.display} style={{ width: "100%", height: "100px", objectFit: "cover" }} />
            <div>{card.title}</div>
<button onClick={function(){
                                axios.delete('/api/card?def='+card._id)
                            }}>DELETE</button>
          </div>
        ))}
      </div>
                  
    </div>
) 
}