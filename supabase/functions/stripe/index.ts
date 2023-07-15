// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import {serve} from 'https://deno.land/std@0.194.0/http/server.ts';

// Import via bare specifier thanks to the import_map.json file.
import Stripe from 'https://esm.sh/stripe@11.2.0?target=deno'

import {createClient} from "https://esm.sh/@supabase/supabase-js@2";

const stripe = new Stripe(Deno.env.get('STRIPE_API_KEY') as string, {
    // This is needed to use the Fetch API rather than relying on the Node http
    // package.
    apiVersion: '2022-11-15',
    httpClient: Stripe.createFetchHttpClient(),
})
// This is needed in order to use the Web Crypto API in Deno.
const cryptoProvider = Stripe.createSubtleCryptoProvider()

console.log('Hello from Stripe Webhook!')

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseKey = Deno.env.get('SUPABASE_SECRET_KEY')!;
const supabase = createClient(supabaseUrl, supabaseKey)

serve(async (request: any) => {
    const signature = request.headers.get('Stripe-Signature')

    // First step is to verify the event. The .text() method must be used as the
    // verification relies on the raw request body rather than the parsed JSON.
    const body = await request.text()
    let receivedEvent
    try {
        receivedEvent = await stripe.webhooks.constructEventAsync(
            body,
            signature!,
            Deno.env.get('STRIPE_WEBHOOK_SIGNING_SECRET')!,
            undefined,
            cryptoProvider
        )
    } catch (err: any) {
        return new Response(err.message, {status: 400})
    }

    console.log(`🔔 Event received: ${receivedEvent.type}`)

    const data = receivedEvent.data.object;

    console.log(data)

    /**
     * PRICES
     */

    if (receivedEvent.type === "price.created") {
        const {data: supabaseData, error: supabaseError} = await supabase
            .from('prices')
            .insert({
                stripe_id: data.id,
                unit_amount: data.unit_amount,
                currency: data.currency
            }).select()

        console.log(supabaseData, supabaseError)
    }

    if (receivedEvent.type === "price.updated") {
        const {data: supabaseData, error: supabaseError} = await supabase
            .from('prices')
            .update({
                stripe_id: data.id,
                unit_amount: data.unit_amount,
                currency: data.currency
            })
            .eq('stripe_id', data.id)
            .select()

        console.log(supabaseData, supabaseError)
    }

    if (receivedEvent.type === "price.deleted") {
        const {data: supabaseData, error: supabaseError} = await supabase
            .from('prices')
            .delete()
            .eq('stripe_id', data.id).select();

        console.log(supabaseData, supabaseError);
    }

    /**
     * PRODUCTS
     */

    if (receivedEvent.type === "product.created") {
        const {data: supabaseData, error: supabaseError} = await supabase
            .from('products')
            .insert({
                stripe_id: data.id,
                name: data.name,
                images: data.images,
                default_price_id: data.default_price
            }).select()

        console.log(supabaseData, supabaseError)
    }

    if (receivedEvent.type === "product.updated") {
        const {data: supabaseData, error: supabaseError} = await supabase
            .from('products')
            .update({
                name: data.name,
                images: data.images,
                default_price_id: data.default_price
            })
            .eq('stripe_id', data.id)
            .select()

        console.log(supabaseData, supabaseError)
    }

    if (receivedEvent.type === "product.deleted") {
        const {data: supabaseData, error: supabaseError} = await supabase
            .from('products')
            .delete()
            .eq('stripe_id', data.id).select();

        console.log(supabaseData, supabaseError);
    }

    return new Response(JSON.stringify({ok: true}), {status: 200})
})