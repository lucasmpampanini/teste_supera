import products from '../../data/products.json'


export default function (state=false, action) {
    switch (action.type) {
        
        case 'SELECT_CART':

            const newProducts = []
            
            for (let count = 0; count < action.payload.length; count++) {
                const element = action.payload[count];
                newProducts.push(products.find(p => p.id === Number(element)))
            }


            return newProducts
    
        
    
        default:
            return state;
    }
}