import {memo} from 'react'
import type {Product} from '../data'
import {ProductCard} from './ProductCard'

type Props = {
    products: Product[]
    quantityById: Record<number, number>
    onAdd: (product: Product) => void
    onRemove: (id: number) => void
}

export const ProductList = memo(function ProductList({products, quantityById, onAdd, onRemove}: Props) {
    return (
        <div className="grid">
            {products.map((p) => (
                <ProductCard
                    key={p.id}
                    product={p}
                    quantity={quantityById[p.id] ?? 0}
                    onAdd={onAdd}
                    onRemove={onRemove}
                />
            ))}
        </div>
    )
})
