import { db } from "@/config/db";
import { ApiResponse } from "@/lib/ApiResponse";
import { NextRequest, NextResponse } from "next/server";



export async function POST( req:NextRequest ){
    try {
        await db()
        const body = await req.json()
        const { recipes, countPerWeek, promoCode, deliveryAddress } = body
        const { firstName, lastName, street, addressLine2, city, province, postalCode, phoneNumber, enterDeliveryInstruction } = deliveryAddress
        if(![recipes, countPerWeek, promoCode, enterDeliveryInstruction].some((e) => e.length > 0)) {
            return NextResponse.json( new ApiResponse(400, "hello"), {status: 400} )
        };
        if(![firstName, lastName, street, addressLine2, city, province, postalCode, phoneNumber].some((e) => e.length > 0)) {
            return NextResponse.json( new ApiResponse(400, "hello"), {status: 400} )
        };
        console.log("planId")
        return new Response(JSON.stringify({ message: "Subscription successful" }), { status: 200 })
    } catch (error) {
        console.log("Error in subscribe-plan route", error)
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 })
    };
};