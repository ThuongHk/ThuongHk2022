import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { STAFFS } from './staffs';
import dateFormat from 'dateformat';
import './Staff.css';
import { useDispatch, useSelector } from 'react-redux';
import {staffSelector} from '../../redux/selector';
import EditStaff from './EditStaff';
import {getDepartment} from '../department/departmentSlice';
import {departmentSelector} from '../../redux/selector';

const DetailStaff = () => {
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(getDepartment())
    },[])
    const params = useParams();
    const staffPullSelector = useSelector(staffSelector);
    const deptPullSelec = useSelector(departmentSelector);
    console.log(deptPullSelec);
    const detailStaff = staffPullSelector.find(staff => staff.id.toString() === params.id);
   
    console.log(detailStaff);
    return (
        <div className="container-fluid detail">
            <div className="row">
                <div className="col-md-3 col-sm-4 col-xs-6">
                    <img className="card-img-top" src={detailStaff?.image} alt={detailStaff?.name} />
                </div>
                <div className="col-6">
                    <h6 className="card-title">{detailStaff?.name}</h6>
                    <p> Hệ số lương: {detailStaff?.salaryScale}</p>
                    <p> Ngày sinh: {dateFormat(detailStaff?.doB, 'dd/mm/yyyy')}</p>
                    <p> Ngày vào công ty: {dateFormat(detailStaff?.startDate, 'dd/mm/yyyy')}</p>
                    <p>Phòng ban: {deptPullSelec.map(dep=> {if(dep.id === detailStaff?.departmentId){return <b key={dep.id}> {dep.name}</b>}})}</p>
                    <p>Số ngày làm thêm: {detailStaff?.overTime}</p>
                    <p>Số ngày nghỉ còn lại: {detailStaff?.overTime}</p>
                </div>
            </div>
           <div className="row mt-1 mb-1">
           <EditStaff  edit={detailStaff}/>
           </div>
        </div>
    );
};

export default DetailStaff;