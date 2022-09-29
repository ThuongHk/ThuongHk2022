import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import NavbarTop from './components/navbar/NavbarTop';
import { getStaff } from './components/staff/staffSlice';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStaff())
  }, [])
  
  
  return (
    <div className="App">
      <NavbarTop/>
      <Outlet/>
      <Footer/>
    
    </div>
  );
}

export default App;
