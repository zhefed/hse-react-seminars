import type {Product} from '../data'

type Props = {
    product: Product
    quantity: number
    onAdd: (product: Product) => void
    onRemove: (id: number) => void
}

export function ProductCard({product, quantity, onAdd, onRemove}: Props) {
    return (
        <div className="card">
            <div className="card-title">{product.title}</div>
            <div className="card-price">{product.price} ₽</div>
            <div className={product.inStock ? 'stock in' : 'stock out'}>
                {product.inStock ? 'В наличии' : 'Нет в наличии'}
            </div>
            <div className="card-actions">
                {quantity > 0 ? (
                    <>
                        <button type="button" className="added" onClick={() => onAdd(product)}>
                            В корзине: {quantity}
                        </button>
                        <button type="button" className="remove" onClick={() => onRemove(product.id)}>
                            Убрать
                        </button>
                    </>
                ) : (
                    <button
                        type="button"
                        className="add"
                        disabled={!product.inStock}
                        onClick={() => onAdd(product)}
                    >
                        В корзину
                    </button>
                )}
            </div>
        </div>
    )
}
