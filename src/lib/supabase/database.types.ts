export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          brand: string
          created_at: string | null
          id: string
          name: string
          price: number
          range: string | null
          size: string | null
          usage: string | null
        }
        Insert: {
          brand: string
          created_at?: string | null
          id?: string
          name: string
          price: number
          range?: string | null
          size?: string | null
          usage?: string | null
        }
        Update: {
          brand?: string
          created_at?: string | null
          id?: string
          name?: string
          price?: number
          range?: string | null
          size?: string | null
          usage?: string | null
        }
      }
      treatments: {
        Row: {
          brand: string | null
          created_at: string | null
          description: string | null
          id?: string
          name: string
          price: number
          range: string | null
          unit: string | null
          usage: string | null
        }
        Insert: {
          brand?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          price: number
          range?: string | null
          unit?: string | null
          usage?: string | null
        }
        Update: {
          brand?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          price?: number
          range?: string | null
          unit?: string | null
          usage?: string | null
        }
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
