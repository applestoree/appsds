# app-products — Frontend API Documentation

## 1. Base URL

```text
https://jhpbtooefyzdndstlzva.supabase.co/functions/v1/app-products
```

Edge Function digunakan untuk mengambil data dari tabel `public.app_products`.

---

## 2. Endpoint

### GET — List Products

```http
GET /functions/v1/app-products
```

Full URL:

```text
https://jhpbtooefyzdndstlzva.supabase.co/functions/v1/app-products
```

### Response

```json
{
  "success": true,
  "count": 41,
  "data": [
    {
      "item_group_id": "iphone-17",
      "title": "iPhone 17",
      "description": "...",
      "availability": "in stock",
      "condition": "new",
      "brand": "Apple",
      "link": "...",
      "google_product_category": "...",
      "product_type": "iPhone",
      "quantity_to_sell_on_facebook": 0,
      "custom_label_0": "",
      "custom_label_1": "",
      "custom_label_2": "",
      "custom_label_3": "",
      "custom_label_4": "",
      "custom_label_5": "",
      "variant_color": [],
      "variant_size": [],
      "created_at": "...",
      "updated_at": "...",
      "main_features": [],
      "sub_features": [],
      "headline": "...",
      "rating": {
        "count": 0,
        "average": 0
      },
      "reviews": {
        "count": 0
      }
    }
  ]
}
```

---

## 3. GET — Product Detail

```http
GET /functions/v1/app-products/{item_group_id}
```

Contoh:

```text
https://jhpbtooefyzdndstlzva.supabase.co/functions/v1/app-products/iphone-17
```

`item_group_id` adalah primary key produk.

### Success Response

```json
{
  "success": true,
  "data": {
    "item_group_id": "iphone-17",
    "title": "iPhone 17",
    "description": "...",
    "availability": "in stock",
    "condition": "new",
    "brand": "Apple",
    "link": "...",
    "google_product_category": "...",
    "product_type": "iPhone",
    "quantity_to_sell_on_facebook": 0,
    "custom_label_0": "",
    "custom_label_1": "",
    "custom_label_2": "",
    "custom_label_3": "",
    "custom_label_4": "",
    "custom_label_5": "",
    "variant_color": [],
    "variant_size": [],
    "created_at": "...",
    "updated_at": "...",
    "main_features": [],
    "sub_features": [],
    "headline": "...",
    "rating": {
      "count": 0,
      "average": 0
    },
    "reviews": {
      "count": 0
    }
  }
}
```

### Product Not Found

HTTP status:

```text
404
```

Response:

```json
{
  "success": false,
  "error": "Product not found"
}
```

---

# 4. Frontend Fetch — Product List

```ts
const API_URL =
  "https://jhpbtooefyzdndstlzva.supabase.co/functions/v1/app-products";

const response = await fetch(API_URL);

const result = await response.json();

if (!result.success) {
  throw new Error("Failed to fetch products");
}

const products = result.data;
```

---

# 5. Frontend Fetch — Product Detail

```ts
const API_URL =
  "https://jhpbtooefyzdndstlzva.supabase.co/functions/v1/app-products";

const itemGroupId = "iphone-17";

const response = await fetch(
  `${API_URL}/${encodeURIComponent(itemGroupId)}`
);

const result = await response.json();

if (!result.success) {
  throw new Error(result.error || "Failed to fetch product");
}

const product = result.data;
```

---

# 6. Recommended API Service

Frontend dapat membuat satu service:

```text
src/
└── services/
    └── appProducts.ts
```

Contoh:

```ts
const API_URL =
  "https://jhpbtooefyzdndstlzva.supabase.co/functions/v1/app-products";

export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || "Failed to fetch products");
  }

  return result.data;
}

export async function getProduct(itemGroupId: string) {
  const response = await fetch(
    `${API_URL}/${encodeURIComponent(itemGroupId)}`
  );

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || "Failed to fetch product");
  }

  return result.data;
}
```

---

# 7. Penggunaan di React

### Product List

```tsx
import { useEffect, useState } from "react";
import { getProducts } from "../services/appProducts";

export default function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      {products.map((product) => (
        <div key={product.item_group_id}>
          {product.title}
        </div>
      ))}
    </div>
  );
}
```

---

# 8. Product Detail Page

Route frontend:

```text
/product/:id
```

API:

```text
GET /functions/v1/app-products/:id
```

Contoh:

```tsx
const product = await getProduct(itemGroupId);
```

Mapping:

```text
ProductDetailPage
        │
        ▼
getProduct(item_group_id)
        │
        ▼
GET /functions/v1/app-products/{item_group_id}
        │
        ▼
app_products
        │
        ▼
Product Detail
```

---

# 9. Product Data Mapping

| Field | Type | Frontend Usage |
| --- | --- | --- |
| `item_group_id` | string | Product ID / route |
| `title` | string | Product name |
| `description` | string | Description |
| `availability` | string | Stock status |
| `condition` | string | Product condition |
| `brand` | string | Brand |
| `link` | string | Product/image source |
| `google_product_category` | string | Google category |
| `product_type` | string | Catalog category/filter |
| `quantity_to_sell_on_facebook` | number | Facebook quantity |
| `custom_label_0` | string | Custom metadata |
| `custom_label_1` | string | Custom metadata |
| `custom_label_2` | string | Custom metadata |
| `custom_label_3` | string | Custom metadata |
| `custom_label_4` | string | Custom metadata |
| `custom_label_5` | string | Custom metadata |
| `variant_color` | JSON | Product colors |
| `variant_size` | JSON | Product variants/prices |
| `created_at` | timestamp | Creation date |
| `updated_at` | timestamp | Last update |
| `main_features` | JSON | Main features |
| `sub_features` | JSON | Additional features |
| `headline` | string | Product headline |
| `rating` | JSON | Rating information |
| `reviews` | JSON | Review information |

---

# 10. Endpoint Summary

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/functions/v1/app-products` | Get all products |
| `GET` | `/functions/v1/app-products/{item_group_id}` | Get one product |

---

# 11. Frontend Architecture

```text
App
│
├── HomePage
│   └── Product API
│       └── GET /app-products
│
├── CatalogPage
│   └── Product API
│       └── GET /app-products
│
└── ProductDetailPage
    └── Product API
        └── GET /app-products/{item_group_id}
```

API flow:

```text
React Frontend
      │
      ▼
appProducts.ts
      │
      ▼
Supabase Edge Function
app-products
      │
      ▼
public.app_products
      │
      ▼
JSON Response
      │
      ▼
React UI
```

## 12. Important Frontend Rules

- Frontend hanya menggunakan endpoint `app-products`.
- Jangan melakukan direct query ke `app_products` jika arsitektur aplikasi menggunakan Edge Function ini sebagai API.
- Gunakan `item_group_id` sebagai identifier produk.
- Gunakan `encodeURIComponent()` ketika memasukkan `item_group_id` ke URL.
- Jangan mengubah nama field response.
- Jangan mengasumsikan struktur JSON `variant_color`, `variant_size`, `main_features`, atau `sub_features` tanpa memeriksa data aktual.
- Jangan menaruh `service_role` atau secret key di frontend.
