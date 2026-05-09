import { use } from "react"
import { Navigate, useNavigate } from "react-router-dom"


export default function ProductList({filter, setCart, cart, total}) {

    const navigate = useNavigate()

return (
    <>
    <div className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-sm font-medium">
        {/* <p>{total} Produk Ditemukan</p>

        <div className="flex items-center gap-2">
            <span>Urutkan</span>
            <select className="text-left border px-7 text-sm rounded-md">
            <option>Terlama</option>
            <option>Terbaru</option>
            <option>Murah</option>
            <option>Mahal</option>
            </select>
        </div> */}

        </div>
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {filter.map((item) => (
            <button 
            className="cursor-pointer hover:text-orange-600" 
            key={item.id}
            onClick={() => (
                navigate(`/product/${item.id}`)
            )}>
            
            <div className="h-40 bg rounded-md mb-3">
            <img src={item.img} alt="" />
            <h2 className="font-bold text-sm">{item.name}</h2>
            <p className="text-sm text-gray-600 mb-3">
            Rp. {item.price}
            </p>
            </div>

            </button>
        ))}
    </div>
    </div>
        </>
);
}