import { db } from "@/config/db";
import { ApiResponse } from "@/lib/ApiResponse";
import User from "@/models/user.Model";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
    try {
        await db()
        const body = await req.json();
        const { preferences, countPerWeek, promoCode, deliveryAddress, email } = body

        const { firstName, lastName, street, addressLine2, city, province, postalCode, phoneNumber, enterDeliveryInstruction, customDeliveryInstruction } = deliveryAddress
        
        if(!email) return NextResponse.json(new ApiResponse(400, "Email is required"), { status: 400 });

        if (![preferences, countPerWeek, enterDeliveryInstruction].some((e) => e.length > 0)) {
            return NextResponse.json(new ApiResponse(400, "Please select Plan"), { status: 400 });
        };

        if (![firstName, lastName, street, city, province, postalCode, phoneNumber, customDeliveryInstruction].some((e) => e.length > 0)) {
            return NextResponse.json(new ApiResponse(400, "Delivery Address is required"), { status: 400 });
        };

        // if (!promoCode && promoCode.length < 5) {
        //     return NextResponse.json(new ApiResponse(400, "Promo code is invalid"), { status: 400 });
        // };

        const existUser = await User.findOne({email})
        if (!existUser) return NextResponse.json(new ApiResponse(404, "User not found"), { status: 404 });

        if (existUser.isSubscribed) return NextResponse.json(new ApiResponse(400, "Already subscribed"), { status: 400 });

        if (existUser.isBanned) return NextResponse.json(new ApiResponse(400, "You are banned"), { status: 400 });

        const subscribePlan = {
            mealsPerWeek: countPerWeek,
            preferences: preferences,
        };
        const deliveryAddressObj = {
            firstName,
            lastName,
            street,
            addressLine2: addressLine2 || null,
            city,
            province,
            postalCode,
            phoneNumber,
            enterDeliveryInstruction
        };
        existUser.currentSubscribedPlan = subscribePlan;
        existUser.deliveryAddress = deliveryAddressObj;
        // existUser.isSubscribed = true; 
        // existUser.subscribedAt = new Date();
        existUser.subscribePlans.push(subscribePlan);
        await existUser.save();
        
        return new Response(JSON.stringify({ message: "Subscription successful" }), { status: 200 })
    } catch (error) {
        console.log("Error in subscribe-plan route", error)
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 })
    };
};