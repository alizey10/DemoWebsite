import User from   "@/app/db/models/user";
import { createSecretKey } from "crypto";
import { jwtVerify, SignJWT } from "jose";
import { NextResponse } from "next/server";

let tokenSecret= createSecretKey(process.env.TOKEN_SECRET, 'utf-8');
// server

export async function PUT(req){

    let meraData = await req.json();

    await User.findByIdAndUpdate(meraData._id, meraData);

    return NextResponse.json({success:true})
}

export async function DELETE(req){

    let id = req.nextUrl.searchParams.get("abc")

    await User.findByIdAndDelete(id);

    return NextResponse.json({success:true})
}

export async function GET(req){

    let users = await User.find({});

    return NextResponse.json(users)
}

export async function POST(req){

    let meraData = await req.json();
    if(meraData.action == 'loading'){
        let user = await User.findOne({
            email : meraData.email,
            password : meraData.password
        }) ;
        if(user){

            let token = await new SignJWT({abc:user._id.toString()}).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('24h').sign(tokenSecret);

            return NextResponse.json({token,user})
        }
        return NextResponse.json(null)
    }else if(meraData.action == 'checkSession'){
    const token = meraData.token;

    if (!token || typeof token !== 'string') {
        return NextResponse.json({ error: 'Invalid or missing token' }, { status: 400 });
    }

    try {
        let data = await jwtVerify(token, tokenSecret, { algorithms: ['HS256'] });
        let user = await User.findById(data.payload.abc);

        return NextResponse.json(user);
    } catch (err) {
        console.error("JWT verify error:", err);
        return NextResponse.json({ error: 'Token verification failed' }, { status: 401 });
    }
}


    else{
         console.log(meraData)

    let nyaUser = new User(meraData);
    await nyaUser.save();

    
    }       

   
    
    return NextResponse.json({cat:'mioon'})


}


