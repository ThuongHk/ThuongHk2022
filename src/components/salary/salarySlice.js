import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

 const salarySlice = createSlice({
    name: 'salaryList',
    initialState: {
        status: 'idle',
        salary: []
    },
    reducers: {
        salaryFilter: (state, action)=>{
            state.salary = action.payload
        }
    },
    extraReducers: builder =>{
        builder 
        .addCase(getSalary.fulfilled, (state, action)=>{
            state.status = 'success'
            state.salary = action.payload
        })
    }
})

export const getSalary = createAsyncThunk('staff/getStaff', async ()=>{
    const res = await fetch('https://rjs101xbackend.herokuapp.com/staffsSalary')
    const data = res.json()
    return data
})
export default salarySlice;


