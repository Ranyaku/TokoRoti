export default function Stock() {
    const lowStock = [
  { name: "Croissant", stock: 12, price: 12000},
  {name:"Roti Kacang", category:"roti", price:7000, desc:"", stock:5}
]
return (
    <div
  className="
    bg-[#242424]
    rounded-2xl
    p-5
    text-white
  "
>
  <h2 className="text-lg font-bold mb-4">
    LOW STOCK
  </h2>

  <div className="space-y-3">
    {lowStock.map((item, index) => (
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
        <p className="font-semibold">
          {item.name}
        </p>

        <span
          className="
            bg-red-500
            text-white
            text-sm
            px-3
            py-1
            rounded-md
          "
        >
          {item.stock} left
        </span>
      </div>
    ))}
  </div>
</div>
)}