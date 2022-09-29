import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { salarySelector } from '../../redux/selector';
import { getSalary } from './salarySlice';

const Salary = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getSalary())
    },[])
    const salaryPullSel = useSelector(salarySelector) 
    function salary(a, b) {
        const sumSalary = a * 3000000 + b * 200000
        return sumSalary
    }
    const salaryList = salaryPullSel.map(sal => {
        return (
            <div className="col-md-4 col-sm-4 col-xs-12 mb-3" key={sal.id}>
                <div className="card">
                    <div className="card-body">
                        <h4 classNane="card-title">Họ tên: {sal.name}</h4>
                        <p classNane="card-text">Lương:{salary(sal.salaryScale, sal.overTime)} </p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="container-fluid">
            <div className="row">{salaryList}</div>

        </div>
    );
};

export default Salary;