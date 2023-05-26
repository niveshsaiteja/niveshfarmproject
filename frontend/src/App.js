import { Outlet } from 'react-router-dom';
import './App.css';
import Header from "./components/Header.js";
import  { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlide';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
 
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`)
      const resData =await res.json()
      console.log(resData)
      dispatch(setDataProduct(resData))
    })()
  },[])
  console.log(productData)
  return (
    <>
    <Toaster />
    <div className='bg-500'>
      <Header/>
      <main className='pt-16 bg-slate-100 min-w-[calc(100vw)]'>
        <Outlet/>
      </main>
    </div>
    </>
  );
}

export default App;
