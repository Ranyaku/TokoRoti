import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import { Navigate, useNavigate } from "react-router-dom"

export default function Checkout({cart, setCart, deleteItem, incItem, totalHarga,filtered, category, setCategory}) {

    const navigate = useNavigate()

return (
    <>
    <Navbar total={filtered.length} cart={cart} setCart={setCart} incItem={incItem} deleteItem={deleteItem} totalHarga={totalHarga} navigate={navigate}/>
    <div className="min-h-[70vh] flex items-center justify-center px-4">

    {cart.length === 0 ? (

    // EMPTY CART
    <div className="text-center">
    <h1 className="text-4xl font-black text-[#1f1f1f] mb-6">
        Blom Ada Barang
    </h1>

    <button className="text-[#C27C3D] font-bold hover:underline cursor-pointer"
    onClick={() => navigate("/")}
    >
        Beli rotinya dulu yuk {">"}
    </button>
    </div>

) : (

    // CART BOX
    <div className="w-full max-w-md bg-white border rounded-2xl p-8 shadow-sm">

    <h1 className="text-3xl font-black text-center mb-8">
        Keranjang
    </h1>

      {/* ITEM LIST */}
    <div className="space-y-4 min-h-[180px]">

        {cart.map((item) => (
        <div
            key={item.id}
            className="flex items-center justify-between"
        >

            {/* LEFT */}
            <div>
            <h2 className="font-bold text-lg">
                {item.name}
            </h2>

            <p className="text-sm text-gray-500">
                x{item.qty}
            </p>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

        <span className="font-bold">
                Rp. {(item.price * item.qty).toLocaleString()}
        </span>

        <div className="flex flex-col gap-1">

        <button
        onClick={() => (
            incItem(item)
        )}
                className="w-6 h-6 border rounded hover:bg-gray-100 cursor-pointer"
                >
                +
        </button>

        <button
        onClick={() => (
            deleteItem(item)
        )}
                className="w-6 h-6 border rounded hover:bg-gray-100 cursor-pointer"
            >
                -
            </button>

            </div>

        </div>

        </div>
        ))}

    </div>

      {/* TOTAL */}
    <div className="border-t mt-8 pt-6 flex items-center justify-between">

        <h2 className="text-2xl font-black">
        Total Harga
        </h2>

        <span className="text-xl font-black text-[#C27C3D]">
        Rp. {totalHarga.toLocaleString()}
        </span>

    </div>

      {/* BUTTON */}
    <button className="w-full mt-6 bg-[#C27C3D] hover:opacity-90 text-white py-3 rounded-xl font-bold transition cursor-pointer">
        Bayar Sekarang
    </button>

    </div>

)}

</div>
        <Footer />
        </>
    )
}

