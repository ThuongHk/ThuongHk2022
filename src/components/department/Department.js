import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { departmentSelector } from '../../redux/selector';
import { STAFFS } from '../staff/staffs';
import { getDepartment } from './departmentSlice';

const Department = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDepartment())
    }, [])
    const departmentPullSel = useSelector(departmentSelector)
    const department = departmentPullSel.map(dep => {
        return (
            <div className="col-md-4 col-sm-4 col-xs-12 mb-3" key={dep.id}>
                <Link to={`/department/${dep.id}`} style={{textDecoration: 'none'}}>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Phòng ban: {dep.name}</h4>
                            <p className="card-text">Số lượng nhân viên: {dep.numberOfStaff} </p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <div className="container-fluid">
            <div className="row mt-2 mb-3">{department}</div>
        </div>
    );
};

export default Department;