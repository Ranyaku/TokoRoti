import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import Checkout from "./Pages/co";
import { useState } from "react";
import product from "./data/produck";
import Deskripsi from "./Pages/deskripsi";


export default function App() {
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
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Menu cart={cart} setCart={setCart} deleteItem={deleteItem} incItem={incItem} totalHarga={totalHarga} filtered={filtered} setCategory={setCategory} />} />
    <Route path="/deskripsi" element={<Deskripsi setCart={setCart} cart={cart} totalHarga={totalHarga} total={filtered} incItem={incItem} deleteItem={deleteItem} />} />
    <Route path="/product/:id" element={<Deskripsi cart={cart} setCart={setCart} incItem={incItem} deleteItem={deleteItem} totalHarga={totalHarga}/>}/>
    <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} totalHarga={totalHarga} deleteItem={deleteItem} incItem={incItem} filtered={filtered}/>} />
  </Routes>
  </BrowserRouter>
  )
}