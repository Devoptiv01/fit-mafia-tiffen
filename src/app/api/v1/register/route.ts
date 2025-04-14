import { db } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST( req:NextRequest ){
    await db()
    const body = await req.json()
    const { email, password } = body

    return NextResponse.json({ message: "User registered successfully"}, { status: 201 })

};