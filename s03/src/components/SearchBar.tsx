import type {Ref} from 'react'

type Props = {
    query: string
    onQueryChange: (value: string) => void
    onlyInStock: boolean
    onOnlyInStockChange: (value: boolean) => void
    found: number
    inputRef: Ref<HTMLInputElement>
}

export function SearchBar({
                              query,
                              onQueryChange,
                              onlyInStock,
                              onOnlyInStockChange,
                              found,
                              inputRef,
                          }: Props) {
    return (
        <div className="search-bar">
            <input
                ref={inputRef}
                type="search"
                placeholder="Поиск по названию..."
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => onOnlyInStockChange(e.target.checked)}
                />
                Только в наличии
            </label>
            <span className="found">Найдено: {found.toString()}</span>
        </div>
    )
}
