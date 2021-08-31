import { createStore, combineReducers } from 'redux'

import products from '../reducers/Products'
import selectCart from '../reducers/SelectCart'

const rootReducer = combineReducers({
    products: products,
    selectCart: selectCart,
})

const store = createStore(rootReducer)

export  default store