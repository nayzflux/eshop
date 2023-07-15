import React from 'react';

import supabase from "@/lib/supabase";
import AddToCartButton from "@/components/buttons/AddToCartButton";
import BuyNowButton from "@/components/buttons/BuyNowButton";
import {formatPrice} from "@/lib/currency";
import {getLocale} from "@/lib/locale";

export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic';

const getProduct = async (productId: number) => {
    const {data: product, error} = await supabase.from('products')
        .select()
        .eq('id', productId)
        .single();
    console.log(product)
    return product;
}

const getPrice = async (priceId: string) => {
    const {data: price, error} = await supabase
        .from('prices')
        .select()
        .eq('stripe_id', priceId)
        .single();
    console.log(price)
    return price;
}

const Product = async ({id}: any) => {
    console.log(id)
    const product = await getProduct(id);
    const price = await getPrice(product?.default_price_id || '');

    if (!product) {
        return (
            <p>This product doesnt exists!</p>
        )
    }

    return (
        <div className="grid grid-cols-2 gap-8 p-10">
            <div className="flex flex-col gap-4">
                <img src={product?.images?.[0] || ''} alt="Product's Image" className="rounded-lg w-[600px]"/>

                <div className="grid grid-rows-1 gap-4">
                    {
                        product?.images?.map((url, i) => (
                            <img key={i} src={url} alt="Product's Image" className="rounded-lg w-[100px]"/>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-8 justify-center">
                <div className="gap-1">
                    <h2 className="text-xl">{product.name}</h2>
                    <p className="text-xs ">{product.stripe_id}</p>
                </div>

                <div>
                    <p className="uppercase text-xl">{price && formatPrice(price.unit_amount || 0, getLocale(), price?.currency || 'USD')}</p>
                </div>

                <div className="flex flex-col gap-4">
                    {
                        /**
                         <button
                         className="px-6 py-3 bg-white text-black flex gap-4 items-center justify-center rounded-lg">
                         <ShoppingCartIcon className="w-6"/>
                         <p>Add to Cart</p>
                         </button>

                         <Link className="px-6 py-3 border border-neutral-300 flex gap-4 items-center justify-center rounded-lg" href={""}>
                         <CreditCardIcon className="w-6"/>
                         <p>Buy now</p>
                         </Link>
                         **/
                    }

                    <AddToCartButton {...product}/>
                    <BuyNowButton priceId={product.default_price_id}/>
                </div>
            </div>
        </div>
    );
};

export default Product;
