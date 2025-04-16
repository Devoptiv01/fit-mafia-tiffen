import { model, Schema } from "mongoose";


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
    isSubscribed: {
        type: Boolean,
        default: false
    },
    subscribedAt: {
        type: Date,
        default: null
    },
    paymentHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "PaymentHistory"
        }
    ],
    deliveryAddress:{
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
            enum: ['Leave at front door', 'Leave at back door', 'Other']
        },
        customDeliveryInstruction: String
    },
    isBanned:{
        type: Boolean,
        default: false
    },
    subscribePlans: [{
        type: Schema.Types.ObjectId,
        ref: "MealsPlan"
    }]
},
{
    timestamps: true
}
);

const User = model("User", UserSchema)

export default User