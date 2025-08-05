'use client';

import { useDispatch, useSelector } from "react-redux";
import React from "react"
import Link from 'next/link'
import { FaHome, FaTachometerAlt, FaBoxOpen, FaUsers } from 'react-icons/fa';
import { IoLogoOctocat } from 'react-icons/io';
import { FaBorderAll } from "react-icons/fa6";
import { BiCommentDetail } from "react-icons/bi";
import { logoutButton } from "@/store/reducers/user";
import { CiLogout } from "react-icons/ci";
import { useRef } from "react";
import { useRouter } from "next/navigation";



export default function Header() {
const inputTag= useRef();
const router=useRouter();

    // const cartItems = useSelector((state) =>{ 
      
      // return state.cart.items});
  const dispatch = useDispatch();
  let user = useSelector((store)=>{
    return store.userReducer.currentUser;
  })

    
  return (
    <>
    
    <header>
       <div className="px-3 py-2 bg-dark text-white">
       <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
             <div id="header" > <Link href="/" className="nav-link text-white" ><b><IoLogoOctocat size={94} />
            <div></div></b></Link>
            
        </div>
           
         <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
         </a>
    <nav className="bg-dark text-white py-3">
      <ul className="nav justify-content-around">
{/*         
      <li className="nav-item text-center position-relative">
          <Link href="/cart" className="nav-link text-white">
            <FaShoppingCart size={24} />
             <span
      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      style={{ fontSize: '0.7rem' }}
    >
      {cartItems.length}
    </span>
            <div>Cart</div>
          </Link>
        </li> */}

        <li>
          {user?.email}
        </li>
        { user && <li className="nav-item">
          <Link onClick={()=>{

        dispatch( logoutButton() );

          }} className="nav-link text-white" aria-current="page" href="/login">
            <CiLogout  size={24}/>
            <div>
               Logout
            </div>
           
          </Link>

        </li>}
        
        <li className="nav-item text-center">
          <Link href="/" className="nav-link text-white">
            <FaHome size={24} />
            <div>Home</div>
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link href="/dashboard" className="nav-link text-white">
            <FaTachometerAlt size={24} />
            <div>Dashboard</div>
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link href="/my-products" className="nav-link text-white">
            <FaBorderAll  size={24} />
            <div>Orders</div>
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link href="/product" className="nav-link text-white">
            <FaBoxOpen size={24} />
            <div>Products</div>
          </Link>
        </li>
        <li className="nav-item text-center">
          <Link href="/customers" className="nav-link text-white">
            <FaUsers size={24} />
            <div>Customers</div>
          </Link>
        </li>
         <li className="nav-item text-center">
          <Link href="/user" className="nav-link text-white">
            <BiCommentDetail size={24} />
            <div>Details</div>
          </Link>
        </li>
        
        
       
      </ul>
      
       <form onSubmit={(evt)=>{

        evt.preventDefault();

        alert(inputTag.current.value);

  

        router.push('/search-Result?search='+inputTag.current.value);
        window.location.href ='/search-Result?search='+inputTag.current.value;

      }} className="d-flex" role="search">
        <input
          ref={inputTag}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </nav>
     
          </div>
    </div>
    </div>
<div className="text-end">

           <button type="button" className="btn btn-light text-dark me-2" ><Link  href="/login">Login</Link></button>
          
           <button type="button" className="btn btn-primary"><Link  href="/signin" style={{color:"white"}}>Sign-up</Link></button>
         </div>
          
</header>
</>
  );
}
 