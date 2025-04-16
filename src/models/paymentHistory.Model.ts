import { model, Schema } from "mongoose";


const PaymentHistorySchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    subscribePlans: {
        type: Schema.Types.ObjectId,
        ref: "MealsPlan"
    },
    promoCodeApplied: {
        type: String,
        default: null
    },
    paymentMethod: {
        type: String,
        enum: ['online', 'cash'],
        default: 'online',
    },
    transactionId: {
        type: String,
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ['success', 'failed'],
        default: 'success',
    },
},
{
    timestamps: true
}
);

const PaymentHistory = model("PaymentHistory", PaymentHistorySchema)

export default PaymentHistory