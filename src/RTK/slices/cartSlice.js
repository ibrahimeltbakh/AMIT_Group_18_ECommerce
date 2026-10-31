import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            let existedProduct = state.find((p) => p.id == action.payload.id)
            if (!existedProduct) {
                //first add
                let newProduct = { ...action.payload, quantity: 1 }
                state.push(newProduct)
            } else {
                // not the first add
                existedProduct.quantity++
            }
        },
    }
})

export let { addToCart } = cartSlice.actions
export default cartSlice.reducer
