"use client";

import React, {Suspense, useEffect, useState} from 'react';
import useCart from "@/hooks/useCart";
import CartContainer from "@/components/cart/CartContainer";
import Divider from "@/components/ui/Divider";
import Card from "@/components/ui/Card";
import CheckoutButton from "@/components/buttons/CheckoutButton";
import {Product} from "@/types/database.types";
import CartItemPrice from "@/components/cart/CartItemPrice";
import PageHeading from "@/components/ui/PageHeading";
import supabase from "@/lib/supabase";
import {formatPrice} from "@/lib/currency";

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();
    const [prices, setPrices] = useState<any[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setIsMounted(true);

        supabase.from('prices').select().then(({data: prices, error}) => {
            if (error) return console.log(error);
            if (!prices) return;
            setPrices(prices);

            for (const item of cart.items) {
                console.log(item.id)
                const price = prices.find(o => o.stripe_id === item.default_price_id)
                if (price) {
                    console.log('in')
                    setTotal(v => v + (price.unit_amount || 0));
                }
            }
        })
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <PageHeading>Shopping Cart</PageHeading>

            <main className="flex w-full gap-8">
                <section className="flex-grow">
                    <CartContainer items={cart?.items} prices={prices}/>
                </section>

                {/** Checkout section **/}
                <section className="w-2/6">
                    <Card>
                        <h2>Order summary</h2>

                        <div className="flex flex-col gap-1">
                            {cart?.items?.map((item: Product) => (
                                <CartItemPrice key={item.id} name={item.name}
                                               price={prices?.find(o => o.stripe_id === item.default_price_id)}/>
                            ))}
                        </div>

                        <Divider/>

                        <div className="flex">
                            <p>Order total</p>
                            <p className="font-semibold ml-auto">
                                {formatPrice(total, 'fr-FR', 'EUR')}
                            </p>
                        </div>

                        <CheckoutButton disabled={cart?.items?.length < 1}/>
                    </Card>
                </section>
            </main>
        </>
    );
};

export default CartPage;
