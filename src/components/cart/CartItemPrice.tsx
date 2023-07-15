import React from 'react';
import {formatPrice} from "@/lib/currency";
import {getLocale} from "@/lib/locale";

const CartItemPrice = ({name, price}: any) => {
    return (
        <div className={"flex flex-row text-sm"}>
            <p>{name}</p>
            <p className="ml-auto">{formatPrice(price?.unit_amount || 0, getLocale(), price?.currency || 'USD')}</p>
        </div>
    );
};

export default CartItemPrice;
