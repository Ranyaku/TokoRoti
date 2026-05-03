import Menu from "./Menu";

export default function ProductList({filter, setCart, cart}) {
    

return (
    <>
    <div className="flex-1">
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {filter.map((item) => (
            <button 
            key={item.id}
            className="cursor-pointer hover:text-orange-600" 
            onClick={() =>
            setCart([...cart , item])}>
            <div>
                <div className="h-40 bg-gray-300 rounded-md mb-3"></div>
                <h2 className="font-bold text-sm">{item.name}</h2>
                <p className="text-sm text-gray-600 mb-3">Rp. {item.price}</p>
            </div>
            </button>
        ))}
    </div>
    </div>
        </>
);
}