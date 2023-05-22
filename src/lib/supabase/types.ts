export interface Product {
  brand: string
  created_at: string | null
  id: number
  name: string
  price: number
  range: string | null
  size: string | null
  usage: string | null
}

export interface Treatment {
  brand: string | null
  created_at: string | null
  description: string | null
  id: number
  name: string
  price: number
  range: string | null
  unit: string | null
  usage: string | null
}