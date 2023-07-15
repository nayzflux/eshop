"use client";

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {ShoppingBagIcon} from "@heroicons/react/24/outline";
import useCart from "@/hooks/useCart";

const CartButton = () => {
    const cart = useCart();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <Link href="/cart"
              className="gap-1 flex items-center text-white bg-black hover:opacity-80 rounded-full p-1 px-6 transition-all duration-500 ease-out">
            <ShoppingBagIcon className="w-6"/>
            {cart?.items?.length >= 1 ? <p>{cart.items.length}</p> : null}
        </Link>
    );
};

export default CartButton;
