import { useState } from "react";

export default function Navbar({ total, cart }) {
  const [open, setOpen] = useState(false);

  function deleteItem(cart) {

  }

  return (
    <>
      <header className="bg-[#FFEBD8]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <h1 className="text-2xl font-bold tracking-wide text-[#3a2d21]">
            TOKO WIBU
          </h1>

          <ul className="hidden md:flex gap-8 font-semibold text-sm text-[#3a2d21]">
            <li className="cursor-pointer hover:text-orange-600">Home</li>
            <li className="cursor-pointer hover:text-orange-600">Menu</li>
            <li className="cursor-pointer hover:text-orange-600">About Us</li>
            <li className="cursor-pointer hover:text-orange-600">Contact Us</li>
          </ul>

          {/* 🔥 CART */}
          <div className="flex gap-4 text-lg items-center relative">
            <span className="cursor-pointer">👤</span>

            <div
              className="relative"
              onClick={() => setOpen(true)}
            //   onMouseEnter={() => setOpen(true)}
            //   onMouseLeave={() => setOpen(false)}
            >
              <button className="relative text-xl">
                🛒
                <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-2 rounded-full">
                  {cart.length}
                </span>
              </button>

              {/* DROPDOWN */}
              {open && (
                <div className="absolute right-0 mt-3 w-72 bg-white border rounded-lg shadow-lg p-4 z-50">
                  
                  <h2 className="font-bold mb-3">Keranjang</h2>

                  <div className="space-y-3 max-h-60 overflow-y-auto">

                    {cart.length === 0 ? (
                      <p className="text-sm text-gray-500">
                        Keranjang kosong
                      </p>
                    ) : (
                      cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between text-sm"
                        >
                          <span>{item.name}</span>
                          <button className="cursor-pointer">-</button>
                          <span>x{item.qty}</span>
                          <button cursor-pointer>+</button>
                        </div>
                      ))
                    )}

                  </div>

                  <div className="mt-4 border-t pt-3">
                    <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:opacity-90">
                      Checkout
                    </button>
                  </div>

                </div>
              )}
            </div>
          </div>

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