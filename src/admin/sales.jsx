export default function Sales() {
  const todaySales = [
    { name: "Croissant", sold: 12, price: 12000 },
    { name: "Roti Kacang", category: "roti", price: 7000, desc: "", sold: 5 },
  ]

  return (
    <div
      className="bg-[#242424] rounded-2xl p-5 text-white
  "
    >
      <h2 className="text-lg font-bold mb-4">PENJUALAN HARIAN</h2>

      <div className="space-y-3">
        {todaySales.map((item, index) => (
          <div
            key={index}
            className=" flex items-center justify-between bg-[#1a1a1a] rounded-xl px-4 py-3"
          >
            <div>
              <p className="font-semibold">{item.name}</p>

              <p className="text-sm text-gray-400">{item.sold} terjual</p>
            </div>

            <p className="font-bold">Rp {(item.sold * item.price).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
