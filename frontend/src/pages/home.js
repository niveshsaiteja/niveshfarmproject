import React, {  useRef } from 'react'
import { useSelector } from 'react-redux'
import HomeCard from '../components/HomeCard'
import CardFeature from '../components/CardFeature'
import {GrNext,GrPrevious} from "react-icons/gr"
//import FilterProduct from '../components/FilterProduct'
import AllProduct from '../components/AllProduct'
import Menu from '../components/Menu'
import { menuItemsData } from '../components/Menu/data';


const Home = () => {
  const productData = useSelector((state) =>state.product.productList)
  console.log(productData)
  const homeProductCartList = productData.slice(0,4)
  const homeProductCartListVegetables = productData.filter(el => el.category === "vegetable",[])
  const homeProductCartListFruits= productData.filter(el => el.category === "fruits",[])
  console.log(homeProductCartListVegetables)

  const loadArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(10).fill(null)


  const slideProductRef = useRef()
  const nextProduct = ()=>{
    slideProductRef.current.scrollLeft +=200
  }
  const preveProduct = ()=>{
    slideProductRef.current.scrollLeft -=200
  }
  const menuRef = useRef();
  

  

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>
        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img src='https://cdn-icons-png.flaticon.com/512/738/738000.png?w=740&t=st=1683041396~exp=1683041996~hmac=6b6ab7c9ec170f27a083b16926c26d93f6c30c68e33a6d0358e72a4719e40634' alt='..loading' className='h-7'/>
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-3'>The Fastest Delivery to <span className='text-red-500 '>Your Home</span></h2>
          <p className='py-3 text-base '>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, ad praesentium perspiciatis nisi dolorum ex voluptatem veniam doloremque nam quod, repudiandae architecto quas reprehenderit molestiae corrupti perferendis nobis obcaecati repellat?</p>
          <button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded'>Order Now</button>
        </div>
        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
          {
           homeProductCartList[0] ? 
           homeProductCartList.map(el =>{
            return(
              <HomeCard
              key = {el._id}
              id = {el._id}
                 image = {el.image}
                 name = {el.name}
                 price = {el.price}
                 category = {el.category}
              />
            )
            })
            :
            loadArray.map((el,index)=>{
              return(
                <HomeCard
                  key={index}
                  loading={"loading..."}
                />
              )
            })
          }
        </div>
      </div>
     
      <div className='py-4'>
        
        <Menu list={menuItemsData} ref={menuRef}/>

      </div>
      
      <div className='py-4'>
       <div className='flex w-full items-center'>
       <h2 className='font-bold text-2xl text-slate-800 mb-4'>Fresh Vegetables</h2>
       <div className='ml-auto flex gap-4'>
        <button onClick={preveProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrPrevious/></button>
        <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrNext/></button>
       </div>
       </div>
        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>

          {
             homeProductCartListVegetables[0] ? homeProductCartListVegetables.map(el =>{
              return(
                <CardFeature
                  key = {el._id}
                  id = {el._id}
                  name = {el.name}
                  category = {el.category}
                  price ={el.price}
                  image = {el.image}
                />
              )
            })
            :
            loadingArrayFeature.map((el,index) =>( 
            <CardFeature
              loading = "loading..."  key={index}
            />))
          }
        </div>
      </div>

      <div className='py-4'>
       <div className='flex w-full items-center'>
       <h2 className='font-bold text-2xl text-slate-800 mb-4'>Fresh Fruits</h2>
       <div className='ml-auto flex gap-4'>
        <button onClick={preveProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrPrevious/></button>
        <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrNext/></button>
       </div>
       </div>
        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>

          {
             homeProductCartListFruits[0] ? homeProductCartListFruits.map(el =>{
              return(
                <CardFeature
                  key = {el._id}
                  id = {el._id}
                  name = {el.name}
                  category = {el.category}
                  price ={el.price}
                  image = {el.image}
                />
              )
            })
            :
            loadingArrayFeature.map((el,index) =>( 
            <CardFeature
              loading = "loading..."  key={index}
            />))
          }
        </div>
      </div>

      <AllProduct heading={"Your Product"}/>
    
    </div>
  )
}

export default Home