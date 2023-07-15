import Image from 'next/image'
import ProductContainer from "@/components/ProductContainer";
import {Suspense} from "react";

export const revalidate = 60;


export default async function Home() {
    return (
        <main className="">
            <Suspense fallback={<p>Loading products...</p>}>
                <ProductContainer/>
            </Suspense>
        </main>
    )
}
