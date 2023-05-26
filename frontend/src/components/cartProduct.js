import React from 'react'
import {HiPlus} from "react-icons/hi"
import {HiOutlineMinus} from "react-icons/hi"
import {MdDelete} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { deleteCartItem ,increaseQty,decreaseQty} from '../redux/productSlide'

const CartProduct = ({id,image,category,qty,total,price,name}) => {


    const dispatch = useDispatch()

  return (
    <div className='bg-slate-200 p-2 flex gap-4 m-2 rounded border border-slate-300'>
        <div className='p-3 bg-white rounded overflow-hidden'>
            <img src={image} className='h-28 w-40 object-cover'/>
        </div>
        <div className='flex flex-col gap-1 w-full'>
            <div className='flex justify-between'>
        <h3 className='font-semibold text-slate-600  capitalize text-lg md:text-2xl'>{name}</h3>
        <div className='cursor-pointer text-slate-700 hover:text-red-500' onClick={()=>dispatch(deleteCartItem(id))}>
        <MdDelete/>
        </div>
        </div>
        <p className='text-slate-500 font-medium text-base'>{category}</p>
        <p className='font-bold  md:text-2xl'><span className='text-red-500'>₹</span><span>{price}</span></p>
        
        <div className='flex justify-between '>
        <div className='flex gap-3 items-center'>
        <button onClick={()=> dispatch(decreaseQty(id))}  className='bg-yellow-300 hover:bg-yellow-400 py-1 my-1 p-1 rounded'><HiOutlineMinus/></button>
        <p className='bg-semibold p-1'>{qty}</p>
        <button onClick={()=> dispatch(increaseQty(id))} className='bg-yellow-300 hover:bg-yellow-400 py-1 my-1 p-1 rounded'><HiPlus/></button>
        </div>
        <div className='flex items-center gap-2 font-bold'>
            <p>Total :</p>
            <p><span className='text-red-500'>₹</span>{total}</p>
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default CartProduct