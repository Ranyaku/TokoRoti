import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import product from "../data/produck"
import { useState } from "react"

export default function Deskripsi({ cart, setCart, total, totalHarga, deleteItem }) {
  const [qty, setQty] = useState(1)
  const { id } = useParams()
  const navigate = useNavigate()
  const item = product.find((item) => item.id === Number(id))

  function addToCart(product) {
    const exist = cart.find((item) => item.id === product.id)

    if (exist) {
      const update = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, qty: item.qty + product.qty }
        }
        return item
      })
      setCart(update)
    } else {
      setCart([...cart, product])
    }
  }

  function incItem() {
    setQty((prev) => prev + 1)
  }

  function decItem() {
    if (qty <= 1) {
      return
    } else {
      setQty((prev) => prev - 1)
    }
  }

  const subTotal = qty * item.price

  return (
    <>
      <Navbar cart={cart} setCart={setCart} incItem={incItem} deleteItem={deleteItem} totalHarga={totalHarga} />

      <div className="min-h-screen bg-[#f5f5f5] text-[#242424]">
        {/* CONTENT */}

        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr_300px] gap-10 items-start">
            {/* IMAGE */}
            <div className="w-full h-[420px] bg-gray-300 rounded-2xl overflow-hidden shadow-sm">
              <img src={item.img} className="w-full h-full object-cover" />
            </div>

            {/* DETAIL */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="bg-[#C27C3D] text-white text-xs px-3 py-1 rounded-full font-semibold">Best Seller</span>

                <span className="text-sm text-gray-500">Fresh Today</span>
              </div>

              <h1 className="text-5xl font-black leading-tight mb-4">{item.name}</h1>

              <p className="text-3xl font-bold text-[#C27C3D] mb-6">Rp. {item.price.toLocaleString()}</p>

              <div className="flex items-center gap-3 mb-8 text-sm text-gray-500">
                <span>⭐ 4.9 Rating</span>
                <span>•</span>
                <span>120+ Terjual</span>
              </div>

              <p className="leading-8 text-gray-700 text-[15px] mb-8 max-w-xl"></p>
            </div>

            {/* BUY BOX */}
            <div className="bg-white border rounded-3xl p-6 sticky top-6 shadow-sm">
              <h2 className="text-2xl font-black mb-6">Atur Jumlah</h2>

              {/* QTY */}
              <div className="flex items-center justify-between border rounded-xl px-4 py-3 mb-6">
                <button className="w-8 h-8 rounded-lg border hover:bg-gray-100 cursor-pointer text-lg font-bold" onClick={decItem}>
                  -
                </button>

                <span className="font-bold text-lg">{qty}</span>

                <button className="w-8 h-8 rounded-lg border hover:bg-gray-100 cursor-pointer text-lg font-bold" onClick={incItem}>
                  +
                </button>
              </div>

              {/* SUBTOTAL */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-gray-500 font-medium">Subtotal</span>

                <span className="text-2xl font-black text-[#C27C3D]">{subTotal}</span>
              </div>

              {/* BUTTON */}
              <div className="space-y-3">
                <button
                  className="w-full bg-[#C27C3D] hover:opacity-90 transition text-white py-3 rounded-xl font-bold cursor-pointer"
                  onClick={() => {
                    addToCart({ ...item, qty })
                    navigate("/checkout")
                  }}
                >
                  Beli Sekarang
                </button>

                <button
                  className="w-full border-2 border-[#C27C3D] text-[#C27C3D] py-3 rounded-xl font-bold hover:bg-[#C27C3D] hover:text-white transition cursor-pointer"
                  onClick={() => addToCart({ ...item, qty })}
                >
                  + Keranjang
                </button>
              </div>

              {/* EXTRA */}
              <div className="border-t mt-8 pt-5 space-y-3 text-sm text-gray-500">
                <p>🔥 dipanggang hari ini</p>
                <p>🚚 a aaaa a a a a a</p>
                <p>🧈 Menggunakan butter mentega</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
