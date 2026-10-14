type Props = {
    totalCount: number
    totalPrice: number
    onClear: () => void
}

export function Header({totalCount, totalPrice, onClear}: Props) {
    return (
        <header className="header">
            <h1>Магазин</h1>
            <span className="cart-summary">
                Корзина: {totalCount} шт. · {totalPrice} ₽
            </span>
            <button type="button" onClick={onClear} disabled={totalCount === 0}>
                Очистить
            </button>
        </header>
    )
}
