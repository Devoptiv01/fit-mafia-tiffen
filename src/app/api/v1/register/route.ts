import { NextRequest, NextResponse } from "next/server";


export async function POST( req:NextRequest, res:NextResponse ){
    const body = await req.json()
    const { email, password } = body

    return NextResponse.json({ message: "User registered successfully"}, { status: 201 })

}