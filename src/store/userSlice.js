import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    sectors: [
        {color: "#f82", label: "Sürpriz"},
        {color: "#0bf", label: "1 GB"},
        {color: "#fb0", label: "Sürpriz"},
        {color: "#0fb", label: "2 GB"},
        {color: "#b0f", label: "100 DK"},
        {color: "#f0b", label: "3 GB"},
        {color: "#bf0", label: "200 DK"},
        {color: "#f0b", label: "300 DK"},
        {color: "#bf0", label: "5 GB"}
    ],
    rotateData: true,
    condData: true,
    loading: false,
    error: ''
};

export const getUsers = createAsyncThunk();

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setRotate: (state, action) => {
            state.rotateData = action.payload;
        },
        setCond: (state, action) => {
            state.contData = action.payload;
        },
        setSectors: (state, action) => {
            state.sectors = action.payload;
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
export const {setRotate, setCond, setSectors} = userSlice.actions;
