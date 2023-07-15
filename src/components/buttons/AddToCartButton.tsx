"use client";

import React from 'react';
import Button from "@/components/buttons/Button";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";
import {Product} from "@/types/database.types";
import useCart from "@/hooks/useCart";

const AddToCartButton = (product: Product) => {
    const cart = useCart();

    const handleClick = async (e: any) => {
        e.preventDefault();
        console.log("Add to cart button pressed", product.id);
        cart.addItem(product);
    }

    return (
        <Button type="button" onClick={handleClick} label="Add To Cart" icon={ShoppingCartIcon}
                className="bg-white text-black"/>
    );
};

export default AddToCartButton;
