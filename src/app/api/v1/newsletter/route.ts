import { db } from "@/config/db";
import { ApiResponse } from "@/lib/ApiResponse";
import Subscriber from "@/models/subscriberModel";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest,) {
        try {
            await db()
            const body = await req.json();
            console.log('body----', body)
            const { email } = body

            if (!email) {
                return NextResponse.json(new ApiResponse(400, "Email is required."), { status: 400 });
            };
            const existEmail = await Subscriber.findOne({email: email})
            
            if (existEmail || (existEmail as [])?.length === 0 ) {
                console.log('-=-=-=-==-=--==',existEmail)
                return NextResponse.json(new ApiResponse(400, "Email already subscribed."), { status: 400 }); 
            };
            const newSubscriber = await Subscriber.create({
                email: email
            });
            
            if (!newSubscriber) {
                return NextResponse.json(new ApiResponse(500, "Failed to subscribe."), { status: 500 }); 
            };
            return NextResponse.json(new ApiResponse(200, "Thanks for subscribing!"), { status: 200 });
        } catch (error) {
            console.error("Subscription error:", error);
            return NextResponse.json(new ApiResponse(500, "Something went wrong."), { status: 500 });            
        }

}