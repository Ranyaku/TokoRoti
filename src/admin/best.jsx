export default function BestSeller() {
  const bestSeller = [
    { name: "Croissant", sold: 12, price: 12000 },
    { name: "Roti Kacang", category: "roti", price: 7000, desc: "", sold: 5 },
  ]

  return (
    <div
      className="
    bg-[#242424]
    rounded-2xl
    p-5
    text-white"
    >
      <h2 className="text-lg font-bold mb-4">BEST SELLER</h2>

      <div className="space-y-3">
        {bestSeller.map((item, index) => (
          <div
            key={index}
            className="
          flex
          items-center
          justify-between
          bg-[#1a1a1a]
          rounded-xl
          px-4
          py-3
        "
          >
            <div className="flex items-center gap-3">
              <span
                className="
              w-8
              h-8
              flex
              items-center
              justify-center
              rounded-full
              bg-white
              text-black
              font-bold
            "
              >
                {index + 1}
              </span>

              <p className="font-semibold">{item.name}</p>
            </div>

            <p className="font-bold">{item.sold} sold</p>
          </div>
        ))}
      </div>
    </div>
  )
}
