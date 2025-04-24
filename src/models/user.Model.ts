import { EnterDeliveryInstructionEnum } from "@/lib/types";
import mongoose, { model, models, Schema } from "mongoose";


const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    OTP: {
        type: String,
        default: null
    },
    otpExpire: {
        type: Date,
        default: null
    },
    isOtpVerified: {
        type: Boolean,
        default: false,
    },
    otpVerifiedAt: Date,
    isSubscribed: {
        type: Boolean,
        default: false
    },
    subscribedAt: {
        type: Date,
        default: null
    },
    paymentHistory: [{
        type: Schema.Types.ObjectId,
        ref: "PaymentHistory"
    }],
    isPaymentVerified: {
        type: Boolean,
        default: false
    },
    deliveryAddress: {
        firstName: String,
        lastName: String,
        street: String,
        addressLine2: String,
        city: String,
        province: String,
        postalCode: String,
        phoneNumber: String,
        enterDeliveryInstruction: {
            type: String,
            enum: Object.values(EnterDeliveryInstructionEnum)
        },
        customDeliveryInstruction: String
    },
    isBanned: {
        type: Boolean,
        default: false
    },
    currentSubscribedPlan: {
        mealsPerWeek: String,
        preferences: [String],
    },
    subscribePlans: [{
        type: Schema.Types.ObjectId,
        ref: "MealsPlan"
    }],
},
    {
        timestamps: true
    }
);

const User = models.User || model("User", UserSchema)

export default User;