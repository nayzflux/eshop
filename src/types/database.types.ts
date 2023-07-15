export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            customers: {
                Row: {
                    created_at: string | null
                    id: number
                }
                Insert: {
                    created_at?: string | null
                    id?: number
                }
                Update: {
                    created_at?: string | null
                    id?: number
                }
                Relationships: []
            }
            prices: {
                Row: {
                    created_at: string | null
                    currency: string | null
                    id: number
                    stripe_id: string | null
                    stripe_product_id: string | null
                    unit_amount: number | null
                }
                Insert: {
                    created_at?: string | null
                    currency?: string | null
                    id?: number
                    stripe_id?: string | null
                    stripe_product_id?: string | null
                    unit_amount?: number | null
                }
                Update: {
                    created_at?: string | null
                    currency?: string | null
                    id?: number
                    stripe_id?: string | null
                    stripe_product_id?: string | null
                    unit_amount?: number | null
                }
                Relationships: []
            }
            products: {
                Row: {
                    created_at: string | null
                    default_price_id: string | null
                    id: number
                    images: string[] | null
                    name: string | null
                    stripe_id: string | null
                }
                Insert: {
                    created_at?: string | null
                    default_price_id?: string | null
                    id?: number
                    images?: string[] | null
                    name?: string | null
                    stripe_id?: string | null
                }
                Update: {
                    created_at?: string | null
                    default_price_id?: string | null
                    id?: number
                    images?: string[] | null
                    name?: string | null
                    stripe_id?: string | null
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}


export type Product = {
    created_at: string | null
    default_price_id: string | null
    id: number
    images: string[] | null
    name: string | null
    stripe_id: string | null
}