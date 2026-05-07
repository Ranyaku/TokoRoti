import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import product from "../data/produck";
import ProductList from "./ProductList";
import Footer from "./Footer";
import CartDrop from "./cart";
import Checkout from "./co";
import { useState } from "react";
        
export default function Menu() {

    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState("all");

    const filtered = 
    category === "all"
        ? product
        : product.filter(item => item.category === category)


function deleteItem(product) {
    const exist = cart.find(item => item.id === product.id)

    if (exist.qty === 1) {
        setCart(cart.filter(item => item.id !== product.id))
    }else {
        const update = cart.map(item => {
        if (item.id === product.id) {
            return {...item, qty: item.qty - 1}
        }
        return item
        })
        setCart(update)
    }
}

function incItem(product){
    const exist = cart.find(item => item.id === product.id)

    if (exist){
    const update = cart.map((item => {
        if (item.id === product.id) {
        return {...item, qty: item.qty + 1}
        }
        return item
    }))
    setCart(update)
    }
}

const totalHarga = cart.reduce((total, item) => {
    return total + (item.price * item.qty)
}, 0)

return (
    <>
    <div className="min-h-screen">
    <Navbar total={filtered.length} cart={cart} setCart={setCart} incItem={incItem} deleteItem={deleteItem} totalHarga={totalHarga}/>
    <Checkout incItem={incItem} deleteItem={deleteItem} total={totalHarga} cart={cart}/>
    <main className="max-w-7xl mx-auto px-1 py-6 flex gap-10">
        <Sidebar setCategory={setCategory}/>
        <ProductList filter={filtered} setCart={setCart} cart={cart} />
    </main>

    <Footer />
    </div>
    </>
);
}