import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPopulation = createAsyncThunk('fetchPopulation', async()=>{
    const response = await fetch('http://127.0.0.1:8000/population')
    return response.json()
})

const populationSlice = createSlice({
    name: 'population',
    initialState:{
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPopulation.pending, (state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchPopulation.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchPopulation.rejected, (state, action)=>{
            console.log('!!!ERROR!!!',action.payload);
            state.isError = true;
        })
    }
});

export default populationSlice.reducer;