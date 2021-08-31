import products from '../../data/products.json'

const initialState = products.map(product => {
    
    return product 
})

export default function (state = initialState, action) {
    switch (action.type) {
        case 'PRICE_FILTER':

            return action.payload.sort((a, b)=> a.price - b.price).map(product => {
                return product
            })
        
        case 'NAME_FILTER':

            return action.payload.sort((a, b) => {if (a.name > b.name) { return 1} if (a.name < b.name) { return -1 } else{ return 0 } } ).map(product => {
                return product
            })
        
        case 'SCORE_FILTER':

            return action.payload.sort((a, b)=> b.score - a.score).map(product => {
                return product
            })
            
            
        default:
            return state;
    }
}