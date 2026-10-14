import type {CartItem} from '../cart'
import type {Product} from '../data'
import {ProductCard} from './ProductCard'

type Props = {
    products: Product[]
    cartItems: CartItem[]
    onAdd: (product: Product) => void
    onRemove: (id: number) => void
}

export function ProductList({products, cartItems, onAdd, onRemove}: Props) {
    return (
        <div className="grid">
            {products.map((p) => (
                <ProductCard
                    key={p.id}
                    product={p}
                    quantity={cartItems.find((item) => item.id === p.id)?.qty ?? 0}
                    onAdd={onAdd}
                    onRemove={onRemove}
                />
            ))}
        </div>
    )
}
