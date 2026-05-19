import Navbar from "../component/Navbar"
import Sidebar from "../component/Sidebar"
import ProductList from "../component/ProductList"
import Footer from "../component/Footer"

export default function Menu({ cart, setCart, deleteItem, incItem, totalHarga, total, filtered, setCategory, role, setRole }) {
  return (
    <>
      <div className="min-h-screen">
        <Navbar cart={cart} setCart={setCart} incItem={incItem} deleteItem={deleteItem} totalHarga={totalHarga} role={role} setRole={setRole} />
        <main className="max-w-7xl mx-auto px-1 py-6 flex gap-10">
          <Sidebar setCategory={setCategory} />
          <ProductList filter={filtered} setCart={setCart} cart={cart} total={filtered.length} />
        </main>

        <Footer />
      </div>
    </>
  )
}
