import {useEffect, useMemo, useRef, useState} from 'react'
import {ProductList} from './components/ProductList'
import {SearchBar} from './components/SearchBar'
import {products} from './data'

function App() {
    const [query, setQuery] = useState('')
    const [onlyInStock, setOnlyInStock] = useState(false)

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

    return (
        <div className="page">
            <header className="header">
                <h1>Магазин</h1>
            </header>
            <SearchBar
                query={query}
                onQueryChange={setQuery}
                onlyInStock={onlyInStock}
                onOnlyInStockChange={setOnlyInStock}
                found={visible.length}
                inputRef={inputRef}
            />
            <ProductList products={visible}/>
        </div>
    )
}

export default App
