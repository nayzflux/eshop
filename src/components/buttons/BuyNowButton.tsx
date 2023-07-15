"use client";

import React from 'react';
import Button from "@/components/buttons/Button";
import {CreditCardIcon} from "@heroicons/react/24/outline";
import stripePromise from "@/lib/stripe";

const BuyNowButton = ({priceId}: any) => {
    const handleClick = async (e: any) => {
        e.preventDefault();
        console.log("Buy now button pressed")

        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;

        if (!stripe) return;

        const {error} = await stripe.redirectToCheckout({
            lineItems: [{
                price: priceId, // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'payment',
            successUrl: 'https://example.com/success',
            cancelUrl: 'https://example.com/cancel',
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
    }

    return (
        <Button type="button" onClick={handleClick} label="Buy now" icon={CreditCardIcon} disabled={!priceId}/>
    );
};

export default BuyNowButton;
