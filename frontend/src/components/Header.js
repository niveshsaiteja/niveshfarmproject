import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
const Header = () => {
   const [showMenu, setShowMenu] = React.useState(false);
   const userData = useSelector((state) => state.user)
console.log(userData) 
   const dispatch = useDispatch()

  const handleShowMenu = ()=>{
   setShowMenu(preve => !preve)
    }
  

    const handleLogout = ()=>{
      dispatch(logoutRedux())
      toast("Logout successfull")
    }
    console.log(process.env.REACT_APP_ADMIN_EMAIL)


    const cartItemNumber = useSelector((state)=>state.product.cardItem)
  return (
   
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/*desktop */}
      <div className="flex item-center h-full justify-between">  
        <Link to={""}>
          <div className="h-10">
            <img src={logo} className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base ma:text-lg hidden md:flex">
            <Link to={""}>Home</Link>
            <Link to={"menu/6450c7b076fd3a9f92fa9868"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
            <Link to={"newproduct"}>Farmer space</Link>
          </nav>
          <div className="text-2xl text-slate-600">
           <Link to={"cart"}><BsFillCartFill />
            <div className="absolute top-4 right-20 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
              {cartItemNumber.length}
            </div>
            </Link> 
          </div>
          <div className=" text-slate-600" onClick={handleShowMenu}  >

            <div className="text-3xl cursor-pointer w-10 h-10 rounded-full overflow-hidden drop-shadow" >
             { userData.image ? <img src={userData.image} className="h-full w-full"/> :  <BiUserCircle />  }
            </div>
            {showMenu && (  
            <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center ">
              {
                    userData.email === process.env.REACT_APP_ADMIN_EMAIL &&  <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer px-2">New Product</Link> 
              }
                {
                  userData.image ? (<p className="cursor-pointer text-white px-2 bg-red-500" onClick={handleLogout}> Logout ({userData.firstname}) </p>) : (<Link to={"login"} className="whitespace-nowrap px-2 m-2">Login</Link>)
                }

              <nav className=" text-base ma:text-lg flex flex-col md:hidden">
               <Link to={""} className="px-2 py-1 ">Home</Link>
               <Link to={"menu/6450c7b076fd3a9f92fa9868"} className="px-2 py-1 ">Menu</Link>
               <Link to={"about"} className="px-2 py-1 ">About</Link>
               <Link to={"contact"} className="px-2 py-1 ">Contact</Link>
             </nav>
              </div>
              
              
            )}
          </div>
        </div>
      </div>

      {/*mobile */}
    </header>
  );
};

export default Header;
