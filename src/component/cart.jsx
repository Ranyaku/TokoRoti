import { useState } from "react";

export default function CartDrop({cart, setCart, total, incItem, deleteItem}) {
    const [open, setOpen] = useState(false);


return (
    <>
    <div className="flex gap-4 text-lg items-center relative">
            <span className="cursor-pointer">👤</span>

        <div className="relative"
        onMouseEnter={() => setOpen(true)}
        >
            <button className="relative text-xl"
            onClick={() => setOpen(!open)}
            >
                🛒
                <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs px-2 rounded-full">
                {cart.length}
                </span>
            </button>

              {/* DROPDOWN */}
            {open && (
                <div 
                onMouseLeave={() => setOpen(false)}
                className="absolute right-0 mt-3 w-72 bg-white border rounded-lg shadow-lg p-4 z-50">
                
                <h2 className="font-bold mb-3">Keranjang</h2>

                <div className="space-y-3 max-h-60 overflow-y-auto">

                    {cart.length === 0 ? (
                    <p className="text-sm text-gray-500">
                        Keranjang kosong
                    </p>
                    ) : (cart.map((item) => (
                        <div
                        key={item.id}
                        className="flex justify-between text-sm items-center gap-2" 
                        >
                        <span>{item.name}</span>
                        
                        <button 
                        onClick={(e) => {
                        e.stopPropagation
                        deleteItem(item)}
                        }
                        className="cursor-pointer w-6 h-6 flex items-center justify-center border rounded hover:bg-gray-100"
                        >-</button>

                        <span className="w-5 text-center">x{item.qty}</span>

                        <button 
                        onClick={(e) => {
                        e.stopPropagation
                            incItem(item)}
                        }
                        className="cursor-pointer w-6 h-6 flex items-center justify-center border rounded hover:bg-gray-100">+</button>
                        </div>
                    ))
                    )}

                    <p>Total Rp. {total}</p>

                </div>

                <div className="mt-4 border-t pt-3">
                    <button 
                    // onClick={()}
                    className="w-full bg-orange-500 text-white py-2 rounded-md hover:opacity-90">
                    Checkout
                    </button>
                </div>

                </div>
            )}
            </div>
        </div>
    </>
)

}