export function priceFilter(products) {
    return {
        type: 'PRICE_FILTER',
        payload: products
    }
}

export function nameFilter(products) {
    return {
        type: 'NAME_FILTER',
        payload: products
    }
}

export function scoreFilter(products) {
    return {
        type: 'SCORE_FILTER',
        payload: products
    }
}

export function cart(products) {
    return {
        type: 'CART',
        payload: products
    }
}