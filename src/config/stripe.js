import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config();

let stripeCliente;

export default function getStripe() {
    if (!stripeCliente) {
        if (!process.env.STRIPE_SECRET_KEY) {
            throw new Error('STRIPE_SECRET_KEY não configurada.');
        }
        stripeCliente = new Stripe (STRIPE_SECRET_KEY)
    }
    return stripeCliente
};