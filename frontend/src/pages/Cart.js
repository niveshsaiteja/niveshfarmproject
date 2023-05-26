import React from 'react'

import { useSelector } from 'react-redux'
import CartProduct from '../components/cartProduct'
import { Route } from 'react-router-dom'
import  emptyCartImage  from "../assets/emptycart.gif"



const Cart = () => {

  const productCartItem = useSelector((state)=>state.product.cardItem)
console.log(productCartItem)

const totalPrice = productCartItem.reduce((acc,curr)=> acc + parseInt(curr.total),0)
const totalQty = productCartItem.reduce((acc,curr)=> acc + parseInt(curr.qty),0)
  return (
    <>
    <div className='p-2 md:p-4 '>
      <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your Cart Item</h2>
      { productCartItem[0] ?
      <div className='my-4 flex flex-wrap gap-3'>
        {/*display cart items */}
        <div className='w-full max-w-3xl '>
        {
            productCartItem.map(el =>{
              return (
                <CartProduct
                key={el._id}
                id = {el._id}
                name={el.name}
                image={el.image}
                category={el.category}
                qty ={el.qty}
                total={el.total}
                price={el.price}
            />
              )
            })
          }
        </div>

        {/* total cart items */}
        <div className='w-full max-w-md ml-auto mr-auto'>
          <h2 className='bg-yellow-300 text-white p-2 text-lg'>Summary</h2>
          <div className='flex w-full py-2 text-lg border-b'>
            <p>Total Quantity :</p>
            <p className='ml-auto w-32 font-bold'>{totalQty}</p>
          </div>
          <div className='flex w-full py-2 text-lg border-b'>
          <p>Total Price :</p>
            <p className='ml-auto w-32 font-bold'><span className='text-red-500'>₹</span>{totalPrice}</p>
          </div>
          <button className='bg-red-400 w-full text-lg font-bold py-2 text-white rounded-full'>Payment</button>
        </div>
      </div>
      :
      <>
       <div className='flex w-full justify-center items-center flex-col'>
        <img src={emptyCartImage} className='w-full max-w-sm'/>
        <p className='text-slate-500 text-3xl font-bold '>Empty Cart</p>
       </div>
      </>
     }
      
    </div>
    </>
  )
}

export default Cart