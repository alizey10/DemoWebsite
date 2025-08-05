import { uploadFile } from "@/app/db/cloudinary";
import Product from "@/app/db/models/product";
import { NextResponse } from "next/server";


export async function DELETE(req){

    let id = req.nextUrl.searchParams.get("del")

    await Product.findByIdAndDelete(id);

    return NextResponse.json({success:true})
}

export async function POST(req){


let myData =  req.headers.get('content-type').includes('form-data') ? await req.formData() : await req.json(); 
if(myData.action == 'getProduct'){
    let products =  await Product.find({owner:myData.userId});
    return NextResponse.json({products, success:true});
}else{
    
let pData = myData;

    let owner = pData.get('owner');
    let name = pData.get('name');
    let price = pData.get('price');
    let description = pData.get('description');

    let logoFile = pData.get('logo');

    let resp = await uploadFile(logoFile)

    let nyaProduct = new Product({
        owner,
        name,
        price,
        description,
        src: resp.public_id,
        preview: resp.secure_url
    });
   await nyaProduct.save();

    
    
    return NextResponse.json({success:true});
}



}


export async function GET(req){
    let singleProduct = req.nextUrl.searchParams
    if(singleProduct.get("abc")){
        const id = singleProduct.get('abc');
        let product=await Product.findById(id);
          return NextResponse.json({product});
    }else if(singleProduct.get('search')){
        const userSearched=singleProduct.get('search')
        let reg= new RegExp(userSearched,'i')
let products =  await Product.find({description:reg});
        return NextResponse.json({products, success:true});
    }
  else{
    let products =  await Product.find();
    return NextResponse.json({products, success:true});
}

}



