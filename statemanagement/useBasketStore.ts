import { create } from "zustand";



export interface BasketItem {
    id: number
    url: number 
    name: string
    price: number
    quanity: number
    category: string
    description: string
}

type BasketStore = {
    items: BasketItem[]
    addItem: (item: BasketItem) => void
    removeItem: (id: number) => void 
    clearBasket: () => void
}


// Create our store

export const useBasketStore = create<BasketStore>((set) => ({
    items: [],
    addItem: (item) => 
        set((state) => {
            const existingItem = state.items.find((i) => i.id === item.id)
            if (existingItem) {
                return {
                    items: state.items.map((i) => 
                        i.id === item.id ? { ...item, quantity: i.quanity } :
                            i
                    )
                }
            }
            else {
                return {items: [...state.items, item]}
            }
        }), 
    
    removeItem: (id) => 
        set((state) => ({
            items: state.items.filter((item) => item.id !== id)
        })),
    clearBasket: () => set({items: []})
}))