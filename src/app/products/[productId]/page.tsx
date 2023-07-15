import React, {Suspense} from 'react';
import Product from "@/components/Product";

export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic'

const ProductPage = ({params}: any) => {
    return (
        <main>
            <Suspense fallback={<p>Loading product...</p>}>
                <Product id={params.productId}/>
            </Suspense>
        </main>
    );
};

export default ProductPage;
