import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    data: true,
    loading: false,
    error: ''
};

export const getUsers = createAsyncThunk();

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setRotate: (state, action) => {
            state.data = action.payload;
        },
        setCont: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.loading = true;
            state.error = ''
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.data = action.payload.map(data => data);
            state.loading = false;
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Errora düştü user data'
        })
    }
});

export default userSlice.reducer;
export const {setRotate} = userSlice.actions;
