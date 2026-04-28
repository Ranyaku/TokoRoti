import product from "../data/produck";

export default function Navbar() {
return (
    <>
    <header className="bg-[#FFEBD8] ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide text-[#3a2d21]">
            TOKO WIBU
        </h1>

        <ul className="hidden md:flex gap-8 font-semibold text-sm text-[#3a2d21]">
            <li className="cursor-pointer hover:text-orange-600">Home</li>
            <li className="cursor-pointer hover:text-orange-600">Menu</li>
            <li className="cursor-pointer hover:text-orange-600">About Us</li>
            <li className="cursor-pointer hover:text-orange-600">Contact Us</li>
        </ul>

        <div className="flex gap-4 text-lg">
            <span className="cursor-pointer">👤</span>
            <span className="cursor-pointer">🛒</span>
        </div>
        </div>
    </header>

    <div className="bg-[#FFF4E9]">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-sm font-medium">
        <p>{product.length} Produk Ditemukan</p>

        <div className="flex items-center gap-2">
            <span>Urutkan</span>
            <select className="text-left border px-7 text-sm rounded-md">
            <option>Terlama</option>
            <option>Terbaru</option>
            <option>Murah</option>
            <option>Mahal</option>
            </select>
        </div>
        </div>
    </div>
    </>
);
}