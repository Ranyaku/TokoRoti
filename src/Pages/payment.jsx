import { useNavigate } from "react-router-dom"

export default function Payment({ totalHarga, cart, receipt, setReceipt, setCart }) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#ececec]">
      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#242424]">Payment</h1>

          <p className="text-gray-500 mt-2">Complete your payment using QRIS</p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-2 gap-8">
          {/* LEFT */}
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h1 className="text-2xl font-bold mb-6">Order Summary</h1>

            {/* ITEMS */}
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h1 className="font-bold text-lg">{item.name}</h1>

                    <p className="text-gray-500">Qty : {item.qty}</p>
                  </div>

                  <p className="font-bold">Rp {(item.price * item.qty).toLocaleString()}</p>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="mt-8 flex items-center justify-between">
              <h1 className="text-2xl font-bold">Total</h1>

              <h1 className="text-2xl font-bold text-[#242424]">Rp {totalHarga.toLocaleString()}</h1>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-[#242424] mb-2">Scan QRIS</h1>

            <p className="text-gray-500 mb-8">Scan this QR code to continue payment</p>

            {/* QR */}
            <div className="w-[280px] h-[280px] bg-[#242424] rounded-2xl flex items-center justify-center text-white text-2xl font-bold">QRIS</div>

            <button
              onClick={() => {
                navigate("/receipt")
                setReceipt(cart)
                setCart([])
              }}
              className="mt-10 w-full h-12 rounded-xl bg-[#242424] text-white font-bold hover:opacity-90 transition cursor-pointer"
            >
              I Have Paid
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
