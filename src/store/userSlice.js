import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    data: null,
    loading: false,
    error: ''
};

export const getUsers = createAsyncThunk();

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const newUser = { id: '', name: action.payload, surname: '', eMail: '', phone: ''};
            state.push(newUser);
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
export const {addUser} = userSlice.actions;
