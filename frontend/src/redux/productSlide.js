import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";


const initialState = {
    productList : [],
    cardItem : []
}
export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers :{
        setDataProduct : (state,action)=>{
            console.log(action)
            state.productList = [...action.payload]
        },
        addCartItem : (state,action)=>{

            const check = state.cardItem.some((el)=> el._id === action.payload._id)
           
            if (check){
                toast("already item in the cart")
            }
            else{
                toast("Item added successfully")
                const total = action.payload.price
                state.cardItem = [...state.cardItem,{...action.payload,qty  :1,total : total},];
            }
            console.log(action.payload)
           
        },
        deleteCartItem : (state,action)=>{
            console.log(state.cardItem)
            console.log(action.payload)
            toast("one Item Deleted")
            const index = state.cardItem.findIndex((el)=>el._id === action.payload)
            state.cardItem.splice(index,1)
            console.log(index)

        },
        increaseQty : (state,action)=>{
            const index = state.cardItem.findIndex((el)=>el._id === action.payload);
            let qty =state.cardItem[index].qty
            const qtyInc = ++qty
            state.cardItem[index].qty = qtyInc

            const price = state.cardItem[index].price
            const total = price*qtyInc

            state.cardItem[index].total = total
        },
        decreaseQty :(state,action)=>{
            const index = state.cardItem.findIndex((el)=>el._id === action.payload)
            let qty =state.cardItem[index].qty
            const qtyDec = --qty
            if(qty > 0){
                
                state.cardItem[index].qty = qtyDec
            }
            const price = state.cardItem[index].price
            const total = price*qtyDec

            state.cardItem[index].total = total

        }
    }
})

export const {setDataProduct , addCartItem,deleteCartItem,increaseQty,decreaseQty} = productSlice.actions

export default productSlice.reducer  