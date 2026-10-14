import {type ChangeEvent, useEffect, useMemo, useRef, useState, useTransition} from 'react'
import {ProductList} from './components/ProductList'
import {SearchBar} from './components/SearchBar'
import {products} from './data'
import {Header} from './components/Header'
import {useCart} from './useCart'

function App() {
    const [query, setQuery] = useState('') // поле ввода
    const [filter, setFilter] = useState('') // для списка
    const [onlyInStock, setOnlyInStock] = useState(false)
    const [isPending, startTransition] = useTransition()
    const {items, totalCount, totalPrice, add, remove, clear} = useCart()

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setQuery(value)
        startTransition(() => setFilter(value))
    }

    // список пересчитывается только при смене фильтров
    const visible = useMemo(() => {
        const q = filter.trim().toLowerCase()

        return products.filter(
            (p) =>
                (!onlyInStock || p.inStock) && p.title.toLowerCase().includes(q),
        )
    }, [filter, onlyInStock])

    // автофокус: ref на <input> + эффект с []
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const quantityById = useMemo(() => {
        const map: Record<number, number> = {}
        for (const item of items) map[item.id] = item.qty
        return map
    }, [items])

    return (
        <div className="page">
            <Header
                totalCount={totalCount}
                totalPrice={totalPrice}
                onClear={clear}
            />
            <SearchBar
                query={query}
                onQueryChange={handleSearch}
                onlyInStock={onlyInStock}
                onOnlyInStockChange={setOnlyInStock}
                found={visible.length}
                inputRef={inputRef}
            />
            <div className="pending">{isPending && 'Обновляем список…'}</div>
            <ProductList
                products={visible}
                quantityById={quantityById}
                onAdd={add}
                onRemove={remove}
            />
        </div>
    )
}

export default App
