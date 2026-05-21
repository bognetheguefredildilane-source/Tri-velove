import { carPhoto } from "@/utils/type"
import { create } from 'zustand'
import { StateStorage } from 'zustand/middleware'
import { createJSONStorage, persist } from 'zustand/middleware'

interface FavoriteState {
    favorites: carPhoto[]
    toggleFavorite: (carphoto: carPhoto) => void
    clearAll: () => void
}


const noopStorage: StateStorage = {
    getItem: () => null,
    setItem: () => { },
    removeItem: () => { },
}

const getSafeStorage = () => {
    if (typeof window === 'undefined') return noopStorage
    try {
        return window.localStorage
    } catch {
        return noopStorage
    }
}
export const useFavoriteStore = create<FavoriteState>()(
    persist((set, get) => ({
        favorites: [],
        toggleFavorite: (car) => {
            const favorites = get().favorites
            const exists = favorites.find((fav) => fav.id === car.id)
            set({
                favorites: exists ? favorites.filter(fav => fav.id !== car.id) : [...favorites, car]
            })
        },
        clearAll: () => set({ favorites: [] })
    }),
        {
            name: 'favorite-store',
            storage: createJSONStorage(getSafeStorage),
            version: 1,
            migrate: (persistedState: unknown) => {
                const state = persistedState as { favorites?: unknown[] }
                return {
                    ...state,
                    favorites: (state.favorites ?? []).filter(
                        (item): item is carPhoto => item !== null && typeof item === 'object'
                    ),
                }
            },
        })
)