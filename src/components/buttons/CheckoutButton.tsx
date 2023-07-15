"use client";

import React from 'react';
import Button from "@/components/buttons/Button";
import {ShoppingBagIcon} from "@heroicons/react/24/outline";

const CheckoutButton = ({disabled}: any) => {
    const handleClick = async (e: any) => {
        e.preventDefault();
        console.log("Checkout button pressed")
    }

    return (
        <Button type="button" onClick={handleClick} label="Checkout" icon={ShoppingBagIcon} disabled={disabled}
                className="text-white bg-black border-none"/>
    );
};

export default CheckoutButton;
