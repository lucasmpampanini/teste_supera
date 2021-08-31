export function selectCart(productsId) {
    return {
        type: 'SELECT_CART',
        payload: productsId
    }
}