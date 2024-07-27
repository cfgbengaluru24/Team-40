import express from "express"
import Stripe from "stripe"
import dotenv from "dotenv"

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
    const products = [
        {
            "name": "Product 1",
            "price": 500,
            "quantity": 1
        },
    ];

    const lineItems = products.map(product => ({
        price_data: {
            currency: 'inr',
            product_data: {
                name: product.name,
            },
            unit_amount: product.price * 100,
        },
        quantity: product.quantity,
    }));


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: 'http://localhost:5173/success',
        cancel_url: "http://localhost:5173/cancel"
    })

    res.json({ id: session.id });
})

export default router