import CartDrop from "./cart";
import { Navigate, useNavigate } from "react-router-dom";
import headerImg from "../data/Img/header-bg.jpeg"

export default function Navbar({ total, cart, setCart, incItem, totalHarga, deleteItem, role}) {
  const navigate = useNavigate()

  return (
    <>
      <header className="">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <h1 className="text-2xl font-bold tracking-wide ml-[10%]">
            TOKO WIBU
          </h1>
          
        <CartDrop incItem={incItem} deleteItem={deleteItem} total={totalHarga} cart={cart} navigate={navigate} role={role} />
        </div>

        <div className="w-full h-[300px] overflow-hidden relative text-white">
          <img
          src={headerImg}
          className="w-full h-full object-cover"
          />
          <img/>
          <ul className="absolute top-10 left-1/2 flex gap-8 font-semibold text-xl ">  
          <button
          onClick={() => navigate("/")}
          >
          <li className="cursor-pointer hover:text-orange-100">Menu</li>
          </button>
          </ul>
        </div>

      </header>
    </>
  );
}