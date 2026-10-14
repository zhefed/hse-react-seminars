import type {Product} from '../data'
import {ProductCard} from './ProductCard'

type Props = {
    products: Product[]
}

export function ProductList({products}: Props) {
    return (
        <div className="grid">
            {products.map((p) => (
                <ProductCard key={p.id} product={p}/>
            ))}
        </div>
    )
}
