'use client'
import { addProduct } from "@/store/reducers/product";
import { addName } from "@/store/reducers/user";
import { useDispatch } from "react-redux"
export default function Footer() {
  //  let dispatch = useDispatch();

  //   function sendData(){

  //       let name =  prompt("enter name");

  //       dispatch( addName(name) );


  //   }
  //   let dispatch1 = useDispatch();

  //   function sendProduct(){

  //       let product =  prompt("enter product name");

  //       dispatch1( addProduct(product) );


  //   }
   return(
<div className="container">
  <div className="row">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top text-white bg-dark">
        <div className="col mb-3">
          <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none" aria-label="Bootstrap">
            <svg className="bi me-2" width="40" height="32" aria-hidden="true"><use href="#bootstrap" /></svg>
          </a>
          <p className="text-white">© 2025</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
          </ul>
        </div>
        {/* <button onClick={sendData}>send data</button> */}
        {/* <button onClick={sendProduct}>send product</button> */}
        


      </footer>
      </div>
    </div>

  );
};

