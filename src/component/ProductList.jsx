import { use } from "react"
import { Navigate, useNavigate } from "react-router-dom"


export default function ProductList({filter, setCart, cart}) {

    const navigate = useNavigate()
    
    function addToCart(product){
        const exist = cart.find(item => item.id === product.id)

        if (exist){
            const update = cart.map(item => {
                if (item.id === product.id){
                    return {...item, qty: item.qty + 1}
                }
                return item
            })
            setCart(update)
        }else {
            setCart([...cart , {...product, qty: 1}])
        }
    }

return (
    <>
    <div className="flex-1">
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {filter.map((item) => (
            <div 
            key={item.id}
            className="h-40 bg-gray-300 rounded-md mb-3">
            
            <button 
            className="cursor-pointer hover:text-orange-600" 
            onClick={() => (
                navigate("/deskripsi")
            )}>
            <h2 className="font-bold text-sm">{item.name}</h2>
            <p className="text-sm text-gray-600 mb-3">
            Rp. {item.price}
            </p>
            </button>

            </div>
        ))}
    </div>
    </div>
        </>
);
}