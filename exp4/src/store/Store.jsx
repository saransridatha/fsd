import { createContext, useReducer } from 'react'
import { CounterReducer } from './CounterReducer.jsx'

// Simple context + useReducer based store to avoid external redux dependency
export const ReduxLikeContext = createContext(null)

export function StoreProvider({ children }) {
	const initialState = { count: 0 }
	const [state, dispatch] = useReducer(CounterReducer, initialState)

	return (
		<ReduxLikeContext.Provider value={{ state, dispatch }}>
			{children}
		</ReduxLikeContext.Provider>
	)
}

export default StoreProvider
