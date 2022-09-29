import { configureStore } from "@reduxjs/toolkit";
import departmentSlice from "../components/department/departmentSlice";
import salarySlice from "../components/salary/salarySlice";
import staffSlice from "../components/staff/staffSlice";

const store = configureStore({
    reducer: {
        staffList: staffSlice.reducer,
        departmentList: departmentSlice.reducer,
        salaryList: salarySlice.reducer
    }
})

export default store;