import CartDrop from "./cart";
import { Navigate, useNavigate } from "react-router-dom";

export default function Navbar({ total, cart, setCart, incItem, totalHarga, deleteItem}) {
  const navigate = useNavigate()

  return (
    <>
      <header className="bg-[#FFEBD8]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <h1 className="text-2xl font-bold tracking-wide text-[#3a2d21]">
            TOKO WIBU
          </h1>

          <ul className="hidden md:flex gap-8 font-semibold text-sm text-[#3a2d21]">
            <button 
            onClick={() => navigate("/")}
            >       
            <li className="cursor-pointer hover:text-orange-600">Menu</li>
            </button>
          </ul>

          {/* 🔥 CART */}
          
        <CartDrop incItem={incItem} deleteItem={deleteItem} total={totalHarga} cart={cart} navigate={navigate} />
        </div>
      </header>

      {/* BAR BAWAH */}
      <div className="bg-[#FFF4E9]">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-sm font-medium">
          
          <p>{total} Produk Ditemukan</p>

          <div className="flex items-center gap-2">
            <span>Urutkan</span>
            <select className="text-left border px-7 text-sm rounded-md">
              <option>Terlama</option>
              <option>Terbaru</option>
              <option>Murah</option>
              <option>Mahal</option>
            </select>
          </div>

        </div>
      </div>
    </>
  );
}