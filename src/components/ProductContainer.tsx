import supabase from "@/lib/supabase";
import React from "react";
import Link from "next/link";

const getProducts = async () => {
    const {data: products, error} = await supabase.from('products').select();
    console.log(products?.map(item => item.name));
    return products;
}

const ProductContainer = async () => {
    const products = await getProducts()

    return (
        <div className="grid grid-cols-4">
            {products?.map((item: any) => (
                <Link key={item.id} href={`/products/${item.id}`}>
                    <div className="flex flex-col p-3 rounded-lg bg-neutral-300/20 w-64">
                        <img className="rounded-lg aspect-square" src={item.images[0]} alt="Product's image"/>
                        <p>{item.name}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductContainer