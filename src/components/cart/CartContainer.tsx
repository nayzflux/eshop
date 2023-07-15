import React from 'react';
import {Product} from "@/types/database.types";
import CartItem from "@/components/cart/CartItem";
import Divider from "@/components/ui/Divider";

const CartContainer = ({items, prices}: { items: Product[], prices: any[] }) => {
    if (!(items?.length >= 1)) {
        return (
            <div className="flex">
                <p>You've nothing in your cart</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full items-center gap-4">
            {items.map((item: Product) => (
                <CartItem key={item.id} {...item} price={prices?.find(o => o.stripe_id === item.default_price_id)}/>
            ))}
        </div>
    );
};

export default CartContainer;
