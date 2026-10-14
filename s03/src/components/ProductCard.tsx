import type {Product} from '../data'

type Props = {
    product: Product
}

export function ProductCard({product}: Props) {
    return (
        <div className="card">
            <div className="card-title">{product.title}</div>
            <div className="card-price">{product.price} ₽</div>
            <div className={product.inStock ? 'stock in' : 'stock out'}>
                {product.inStock ? 'В наличии' : 'Нет в наличии'}
            </div>
            <div className="card-actions">
                <button type="button" disabled={!product.inStock}>
                    В корзину
                </button>
            </div>
        </div>
    )
}
