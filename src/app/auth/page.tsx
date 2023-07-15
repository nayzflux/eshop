"use client";

import {createClient} from '@supabase/supabase-js'
import {Auth} from '@supabase/auth-ui-react'
import {ThemeSupa} from "@supabase/auth-ui-shared";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '')

const AuthPage = () => {
    return (
        <main className="flex justify-center items-center h-screen text-white">
            <div className="p-10 w-1/3 border border-neutral-300/40 rounded-lg">
                <Auth
                    supabaseClient={supabase}
                    magicLink={true}
                    appearance={{
                        theme: ThemeSupa,
                        variables: {
                            default: {
                                colors: {
                                    brand: '#404040',
                                    brandAccent: '#22c55e'
                                }
                            }
                        }
                    }}
                    theme="dark"
                    providers={['google', 'facebook', 'twitter']}
                    redirectTo="/api/auth/callback"
                />
            </div>
        </main>
    )
}

export default AuthPage;