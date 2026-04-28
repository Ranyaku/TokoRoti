// component/Sidebar.jsx
export default function Sidebar() {
return (
    <div className="w-72 space-y-5">
      {/* Kategori */}
    <div className="bg-white border rounded-md p-5">
        <h2 className="text-xl font-bold mb-4">Kategori</h2>

        <div className="border-t pt-4 space-y-3">
        <button className="block w-full text-left hover:text-orange-600"
        onClick={() => setCategory("roti")}
        >
            Roti
        </button>

        <button className="block w-full text-left hover:text-orange-600"
        onClick={() => setCategory("kue")}
        >
            Kue
        </button>

        <button className="block w-full text-left hover:text-orange-600"
        onClick={() => setCategory("donat")}
        >
            Donat
        </button>

        <button className="block w-full text-left hover:text-orange-600"
        onClick={() => setCategory("minuman")}
        >
            Minuman
        </button>
        </div>
    </div>

      {/* Harga */}
    <div className="bg-white border rounded-md p-5">
        <h2 className="text-xl font-bold mb-4">Harga</h2>

        <div className="border-t pt-4">
        <input type="range" className="w-full" />

        <div className="flex justify-between text-sm mt-2">
            <span>Rp 0</span>
            <span>Rp 100.000</span>
        </div>
        </div>
    </div>
    </div>
);
}