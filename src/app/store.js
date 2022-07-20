import { configureStore } from '@reduxjs/toolkit'
import gadgets from '../features/Gadgets/GadgetSlice'

const store = configureStore({
    reducer: {
        gadgetReducer: gadgets
    }
})
export default store;