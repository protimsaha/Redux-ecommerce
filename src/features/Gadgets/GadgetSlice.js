
const { createSlice } = require("@reduxjs/toolkit")

const initialgadgets = {
    gadgets: []
}
export const gadgetSlice = createSlice({
    name: 'gadgets',
    initialState: initialgadgets,
    reducers: {
        showGadgets: (state) => state,
        addGadget: (state, action) => {
            state.gadgets.push(action.payload)
        },
        deleteGadget: (state, action) => {
            const id = action.payload;
            state.gadgets = state.gadgets.filter(gadget => gadget.id !== id)
        }
    },
})
export const { showGadgets, addGadget, deleteGadget } = gadgetSlice.actions
export default gadgetSlice.reducer