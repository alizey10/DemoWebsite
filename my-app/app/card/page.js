'use client';
import Link from "next/link";
export default function Card({ product }) {
    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="card" style={{ width: '18rem' }}>
            <Link href={"/product-detail/"+product._id}>  
            <img src={product.preview} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div>Order Now</div>
               
            </div>
            </Link>
             
    
        </div>
    );
}
