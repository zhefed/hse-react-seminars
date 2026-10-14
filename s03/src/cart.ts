import type {Product} from './data'

export type CartItem = {
    id: number
    title: string
    price: number
    qty: number
}

export type CartState = {
    items: CartItem[]
}

export type CartAction =
    | { type: 'add'; product: Product }
    | { type: 'remove'; id: number }
    | { type: 'clear' }

export const initialCart: CartState = {items: []}

export function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'add': {
            const {product} = action
            const exists = state.items.some((item) => item.id === product.id)

            if (exists) {
                return {
                    items: state.items.map((item) =>
                        item.id === product.id ? {...item, qty: item.qty + 1} : item,
                    ),
                }
            }

            return {
                items: [
                    ...state.items,
                    {id: product.id, title: product.title, price: product.price, qty: 1},
                ],
            }
        }
        case 'remove':
            return {items: state.items.filter((item) => item.id !== action.id)}
        case 'clear':
            return initialCart
        default:
            return state
    }
}
