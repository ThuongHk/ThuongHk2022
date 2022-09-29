import { createSelector } from '@reduxjs/toolkit';
export const staffSelector = state => state.staffList?.allStaff;
export const searchSelector = state => state.staffList?.search;
export const departmentSelector = state => state.departmentList?.department;
export const salarySelector = state => state.salaryList?.salary;

export const searchAndStaff = createSelector(staffSelector, searchSelector, (dataStaff, dataSearch)=>{
return dataStaff.filter(staff => {return staff.name?.toUpperCase().includes(dataSearch.toUpperCase())})
})