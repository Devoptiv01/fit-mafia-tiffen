import { db } from "@/config/db";
import { ApiResponse } from "@/lib/ApiResponse";
import User from "@/models/user.Model";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


export async function POST( req:NextRequest ){
    try {
        await db()
        const body = await req.json()
        const { email, password } = body
    
        const existUser = await User.findOne({email})
        if(existUser) {
            return NextResponse.json( new ApiResponse(400, 'User already exist') ,{status:400})
        };
        const hashPW = await bcrypt.hash(password, 10)
    
        const newUser = await User.create({
            email,
            password: hashPW
        });
        if(!newUser) {
            return NextResponse.json( new ApiResponse(500, 'Internal Server Error') ,{status:500})
        };
        return NextResponse.json({ message: "User registered successfully"}, { status: 201 });

    } catch (error) {
        console.log(error)
        return NextResponse.json( new ApiResponse(500, 'Internal Server Error') ,{status:500})
    }

};