import { House } from "lucide-react"
import { Navigate, useNavigate } from "react-router-dom"

export default function Receipt({ cart, setCart, receipt }) {
  const navigate = useNavigate()
  const totalHarga = receipt.reduce((total, item) => {

    return total + (item.price * item.qty)
}, 0)

  return (
    <div className="min-h-screen bg-[#ececec] flex items-center justify-center p-6">
      {receipt.process === true ? (

        <div className="w-[700px] bg-white rounded-2xl shadow-md p-8">
        {/* HEADER */}
        <div className="flex flex-col text-center border-b pb-6">
          <button className="cursor-pointer hover:opacity-70" onClick={() => navigate("/")}>
            <House />
          </button>
          <h1 className="text-4xl font-bold text-[#242424]">Payment Success</h1>

          <p className="text-gray-500 mt-2">Thank you for your purchase</p>
        </div>

        {/* ORDER */}
        <div className="mt-8">
          <h1 className="text-2xl font-bold mb-6">Order Details</h1>

          <div className="flex flex-col gap-5">
            {receipt.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <h1 className="font-bold text-lg">{item.name}</h1>

                  <p className="text-gray-500">Qty : {item.qty}</p>
                </div>

                <p className="font-bold">Rp {(item.price * item.qty).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TOTAL */}
        <div className="mt-8 flex items-center justify-between border-b pb-6">
          <h1 className="text-2xl font-bold">Total Paid</h1>

          <h1 className="text-2xl font-bold text-[#242424]">Rp {totalHarga.toLocaleString()}</h1>
        </div>

        {/* ORDER NUMBER */}
        <div className="mt-8 text-center">
          <h1 className="text-xl font-bold text-[#242424]">Order Number</h1>

          <div className="mt-4 w-full h-24 rounded-2xl bg-[#242424] text-white flex items-center justify-center text-4xl font-bold">A-102</div>

          <p className="mt-4 text-gray-500">Please show this number to the cashier</p>
        </div>
      </div>

      // Roti Bungkusan
  ) : (

    <div className="mt-8 text-center">

  <div className="w-24 h-24 rounded-full bg-[#242424] text-white flex items-center justify-center text-5xl mx-auto">
    ✓
  </div>

  <h1 className="text-4xl font-bold text-[#242424] mt-6">
    Payment Successful
  </h1>

  <p className="text-gray-500 mt-3 text-lg">
    Your order has been completed successfully
  </p>

  <div className="mt-8 bg-[#242424] rounded-2xl p-6 text-white">

    <h1 className="text-2xl font-bold">
      Pesanan Siap
    </h1>

    <p className="mt-3 text-gray-300">
      Pesanan Kamu Sudah Diambil
    </p>

    <p className="mt-2 text-gray-300">
      Terimakasih Telah Memilih Kami.
    </p>

  </div>

  <button
    onClick={() => navigate("/")}
    className="mt-8 w-full h-12 rounded-xl bg-[#242424] text-white font-bold hover:opacity-90 transition cursor-pointer"
  >
    
Kembali  </button>

</div>
  )}

    </div>
  )
}
