import Menu from "./Menu";

export default function ProductList({filter}) {
    

return (
    <>
    <div className="flex-1">
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {filter.map((item) => (
            <div key={item.id}>
                <div className="h-40 bg-gray-300 rounded-md mb-3"></div>
                <h2 font-bold text-sm>{item.name}</h2>
                <p text-sm text-gray-600 mb-3>Rp. {item.price}</p>
            </div>
        ))}
    </div>
    </div>
        </>
);
}