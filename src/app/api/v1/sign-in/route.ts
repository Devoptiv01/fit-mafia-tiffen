import { db } from "@/config/db";
import { ApiResponse } from "@/lib/ApiResponse";
import { NextRequest, NextResponse } from "next/server";


export async function POST( req:NextRequest, res:NextResponse ){
   try {
     await db()
     const body = await req.json()
     const { email, password } = body
 
     return NextResponse.json( new ApiResponse(201, "hello"), { status: 201 })
   } catch (error) {
     console.log("Error in sign-in route", error)
     return NextResponse.json( new ApiResponse(500, "Internal Server Error"), { status: 500 })
   }

};