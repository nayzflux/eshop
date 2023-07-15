import React from 'react';
import {Product} from "@/types/database.types";
import Image from "next/image";
import CloseButton from "@/components/buttons/CloseButton";
import useCart from "@/hooks/useCart";
import Divider from "@/components/ui/Divider";
import {formatPrice} from "@/lib/currency";
import {getLocale} from "@/lib/locale";

const CartItem = ({id, name, images, stripe_id, default_price_id, price}: any) => {
    const cart = useCart();

    const handleRemove = (e: any) => {
        e.preventDefault();
        cart.removeItem(id);
    }

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row gap-4 w-full relative group">
                <Image className="rounded-lg" width={200} height={200} src={images?.[0] || ''} alt="Product's Image"/>

                <div className="gap-1 flex flex-col">
                    <p>{name}</p>
                    <p className="font-semibold">{formatPrice(price?.unit_amount || 0, getLocale(), price?.currency || 'USD')}</p>
                </div>

                <div className="ml-auto hidden group-hover:inline">
                    <CloseButton onClick={handleRemove}/>
                </div>
            </div>

            <Divider/>
        </div>
    );
};

export default CartItem;
