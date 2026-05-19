import { useState } from "react"
import { Pencil, Trash2, Plus, Package } from "lucide-react"
import { Navigate, useNavigate } from "react-router-dom"
import Admin from "./navbar"

export default function Editmenu() {

    const [activeTab, setActiveTab] = useState("product")
    const [product, setProduct] = useState(null)
    const navigate = useNavigate()
    const [products, setProducts] = useState([
    {
      id: 1,
      name: "Croissant",
      price: 20000,
      stock: 12,
      category: "Pastry",
      description:""
    },
    {
      id: 2,
      name: "Chocolate Bread",
      price: 15000,
      stock: 5,
      category: "Sweet Bread",
      description:""
    },
    {
      id: 3,
      name: "Cheese Bun",
      price: 18000,
      stock: 2,
      category: "Bread",
      description:""
    }
])

function saveData() {
  const updated = products.map(item => {
    if (item.id === product.id){
      return product
    }
    
    return item
  })
  setProducts(updated)
}

function deleted(id) {
  const deleteItem = products.filter(item => item.id !== id)

  setProducts(deleteItem)
}

return (
    <div className="min-h-screen bg-[#ececec] text-[#242424]">
        <Admin />


      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* TAB */}
        <div className="flex items-center justify-between mb-8">

  {/* TAB */}
  <div className="flex gap-4">


    <button
      onClick={() => setActiveTab("product")}
      className={`px-5 py-2 rounded-xl font-bold transition cursor-pointer ${
        activeTab === "product"
          ? "bg-[#242424] text-white"
          : "bg-white text-[#242424]"
      }`}
    >
      Product Data
    </button>

    <button
      onClick={() => setActiveTab("stock")}
      className={`px-5 py-2 rounded-xl font-bold transition cursor-pointer ${
        activeTab === "stock"
          ? "bg-[#242424] text-white"
          : "bg-white text-[#242424]"
      }`}
    >
      Stock Management
    </button>

  </div>

  {/* ADD PRODUCT */}
  <button className="flex items-center gap-2 bg-[#242424] text-white px-5 py-2 rounded-xl font-bold hover:opacity-90 transition cursor-pointer">
    <Plus size={18} />
    Add Product
  </button>

</div>

        {/* PRODUCT TAB */}
        {activeTab === "product" && (

          <div className="grid grid-cols-3 gap-6">

            {products.map((item) => (

              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md">

                {/* IMAGE */}
                <div className="h-48 bg-[#242424] flex items-center justify-center">

                  <Package size={50} className="text-white" />

                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <h1 className="text-xl font-bold">
                    {item.name}
                  </h1>

                  <p className="mt-2 text-gray-600">
                    {item.category}
                  </p>

                  <p className="mt-2 font-bold">
                    Rp {item.price.toLocaleString()}
                  </p>

                  <p className="mt-1">
                    Stock : {item.stock}
                  </p>

                  {/* ACTION */}
                  <div className="flex gap-3 mt-5">

                    <button className="flex-1 h-10 rounded-xl bg-[#242424] text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition cursor-pointer"
                      onClick={() => {
                        setProduct(item)
                        console.log(item)
                      }}
                      >
                      <Pencil size={18} 
                      />
                      Edit
                    </button>

                    <button className="w-12 rounded-xl border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition flex items-center justify-center cursor-pointer">
                      <Trash2 size={18} />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

        {/* STOCK TAB */}
        {activeTab === "stock" && (

          <div className="flex flex-col gap-5">

            {products.map((item) => (

              <div key={item.id} className="bg-white rounded-2xl p-5 flex items-center justify-between shadow-md">

                <div>

                  <h1 className="text-lg font-bold">
                    {item.name}
                  </h1>

                  <p className="text-gray-500">
                    Current Stock : {item.stock}
                  </p>

                </div>

                {/* STOCK ACTION */}
                <div className="flex items-center gap-4">

                  <button className="w-10 h-10 rounded-xl bg-[#242424] text-white text-xl font-bold cursor-pointer">
                    -
                  </button>

                  <span className="text-xl font-bold">
                    {item.stock}
                  </span>

                  <button className="w-10 h-10 rounded-xl bg-[#242424] text-white text-xl font-bold cursor-pointer">
                    +
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

{/* Edit Data Menu*/}
{product && (

  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="w-[500px] bg-white rounded-2xl p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">

        <h1 className="text-2xl font-bold text-[#242424]">
          Edit Product
        </h1>

        <button
          onClick={() => setProduct(null)}
          className="text-2xl font-bold text-gray-500 hover:text-black cursor-pointer"
        >
          ×
        </button>

      </div>

      {/* FORM */}
      <div className="flex flex-col gap-5">

        {/* PRODUCT NAME */}
        <div className="flex flex-col gap-2">

          <label className="font-bold">
            Product Name
          </label>

          <input
            type="text"
            value={product.name}
            className="w-full h-11 border border-gray-300 rounded-xl px-4 outline-none focus:border-[#242424]"
            onChange={(e) => 
              setProduct({
              ...product,
              name: e.target.value})}
          />

        </div>

        {/* PRICE */}
        <div className="flex flex-col gap-2">

          <label className="font-bold">
            Price
          </label>

          <input
            type="number"
            value={product.price}
            className="w-full h-11 border border-gray-300 rounded-xl px-4 outline-none focus:border-[#242424]"
            onChange={(e) => 
              setProduct({
              ...product,
              price: e.target.value})}
          />

        </div>

        {/* CATEGORY */}
        <div className="flex flex-col gap-2">

          <label className="font-bold">
            Category
          </label>

          <input
            type="text"
            value={product.category}
            className="w-full h-11 border border-gray-300 rounded-xl px-4 outline-none focus:border-[#242424]"
            onChange={(e) => 
              setProduct({
              ...product,
              category: e.target.value})}
          />

        </div>

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-2">

          <label className="font-bold">
            Description
          </label>

          <textarea
            value={product.description}
            className="w-full h-32 border border-gray-300 rounded-xl p-4 outline-none focus:border-[#242424] resize-none"
            onChange={(e) => 
              setProduct({
              ...product,
              description: e.target.value})}
          />

        </div>

        {/* BUTTON */}
        <div className="flex gap-3 mt-4">

          <button
            onClick={() => {
              setProduct(null)
              deleted(item.id)
            }}
            className="flex-1 h-11 rounded-xl border border-gray-300 font-bold hover:bg-gray-100 transition cursor-pointer"
          >
            Cancel
          </button>

          <button className="flex-1 h-11 rounded-xl bg-[#242424] text-white font-bold hover:opacity-90 transition cursor-pointer"
          onClick={() => {
            saveData()
            setProduct(null)
          }}
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>

  </div>

)}
    </div>

    
  )
}