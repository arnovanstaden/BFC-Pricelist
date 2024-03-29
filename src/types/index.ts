export interface IProduct {
  brand: string
  created_at: string | null
  id: string
  name: string
  price: number
  range: string | null
  size: string | null
  description: string | null
}

export interface ITreatment {
  brand: string | null
  created_at: string | null
  description: string | null
  id: string
  name: string
  price: number
  range: string | null
  unit: string | null
  usage: string | null
}