

export const initialState = {
    modalProduct: null,
    cart: []
}

//Add initial state
//Add to cart
//controlled form needs case for each input 
//to delete from cart

export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {...state, cart: [...state.cart, action.product]}
        case "Whatever":
                return {...state, modalProduct: action.product}
        case "REMOVE_FROM_CART":
            
            return {...state, cart: state.cart.filter(product => product.id !== action.product.id) }

        default:
            return state 
    }
    
}