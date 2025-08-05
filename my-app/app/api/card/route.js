
import { NextResponse } from "next/server";
import Card from "@/app/db/models/card";


export async function DELETE(req){

    let id = req.nextUrl.searchParams.get("def")

    await Card.findByIdAndDelete(id);

    return NextResponse.json({success:true})
}
export async function GET(req) {
    let cards = await Card.find({});
    return NextResponse.json(cards);
}


export async function POST(req) {
    let data = await req.json();
    let newCard = new Card(data);
    await newCard.save();
    return NextResponse.json({ success: true });
}
