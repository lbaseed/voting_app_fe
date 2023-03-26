import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     count : 0
}

export const votingSlice = createSlice({
    name: 'votingSlice',
    initialState,
    reducer: {
        addVoting: (state) => {
            state.count += 1
        }
    }
})