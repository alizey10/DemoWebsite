
'use client';

import { useParams } from "next/navigation";

export default function City(){
    let myparams = useParams();
    return (<div>
        <h3>City</h3>
        <h1>{myparams.city}</h1>
    </div>)
}