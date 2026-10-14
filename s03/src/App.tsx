import {useEffect, useMemo, useReducer, useRef, useState} from 'react'
import {ProductList} from './components/ProductList'
import {SearchBar} from './components/SearchBar'
import {products} from './data'
import {cartReducer, initialCart} from './cart'
import {Header} from './components/Header'

function App() {
    const [query, setQuery] = useState('')
    const [onlyInStock, setOnlyInStock] = useState(false)
    const [cart, dispatch] = useReducer(cartReducer, initialCart)

    // список пересчитывается только при смене фильтров
    const visible = useMemo(() => {
        const q = query.trim().toLowerCase()

        return products.filter(
            (p) =>
                (!onlyInStock || p.inStock) && p.title.toLowerCase().includes(q),
        )
    }, [query, onlyInStock])

    // автофокус: ref на <input> + эффект с []
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const totalCount = cart.items.reduce((sum, item) => sum + item.qty, 0)
    const totalPrice = cart.items.reduce((sum, item) => sum + item.price * item.qty, 0)

    return (
        <div className="page">
            <Header
                totalCount={totalCount}
                totalPrice={totalPrice}
                onClear={() => dispatch({type: 'clear'})}
            />
            <SearchBar
                query={query}
                onQueryChange={setQuery}
                onlyInStock={onlyInStock}
                onOnlyInStockChange={setOnlyInStock}
                found={visible.length}
                inputRef={inputRef}
            />
            <ProductList
                products={visible}
                cartItems={cart.items}
                onAdd={(product) => dispatch({type: 'add', product})}
                onRemove={(id) => dispatch({type: 'remove', id})}
            />
        </div>
    )
}

export default App
