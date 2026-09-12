export type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue }

export interface ProductRating { count: number; average: number }
export interface ProductReviews { count: number }

export interface Product {
  item_group_id: string
  title: string
  description: string
  availability: string
  condition: string
  brand: string
  link: string
  google_product_category: string
  product_type: string
  quantity_to_sell_on_facebook: number
  custom_label_0: string
  custom_label_1: string
  custom_label_2: string
  custom_label_3: string
  custom_label_4: string
  custom_label_5: string
  variant_color: JsonValue
  variant_size: JsonValue
  created_at: string
  updated_at: string
  main_features: JsonValue
  sub_features: JsonValue
  headline: string
  rating: ProductRating
  reviews: ProductReviews
}
