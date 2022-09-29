import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';


const NavbarTop = () => {
    const [activer1, setActiver1] = useState('light');
    const [activer2, setActiver2] = useState('light');
    const [activer3, setActiver3] = useState('light');
    const handleActiver1 = ()=>{
        setActiver1('light')
        setActiver2('dark')
        setActiver3('dark')
    }
    const handleActiver2 = ()=>{
        setActiver1('dark')
        setActiver2('light')
        setActiver3('dark')
    }
    const handleActiver3 = ()=>{
        setActiver1('dark')
        setActiver2('dark')
        setActiver3('light')
    }
    return (
        <div className='container-fluid navbar'>
            <ul className="nav justify-content-start bg-info" style={{width: '100%'}}>
            <i className="fab fa-windows ml-3"></i>
                <li className='nav-item ml-5' >
                    <Link className={activer1} style={{textDecoration: 'none'}} onClick={handleActiver1} to="/staff"><i class="fas fa-clipboard-user"></i> Nhân Viên</Link>
                </li>
                <li className='nav-item ml-5' >
                    <Link className={activer2} style={{textDecoration: 'none'}} onClick={handleActiver2} to="/department"><i class="fas fa-building"></i> Phòng Ban</Link>
                </li>
                <li className='nav-item ml-5' >
                    <Link className={activer3} style={{textDecoration: 'none'}} onClick={handleActiver3} to="/salary"><i class="fas fa-usd-circle"></i> Bảng Lương</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavbarTop;