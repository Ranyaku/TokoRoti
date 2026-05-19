import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import Checkout from "./Pages/co";
import { use, useState } from "react";
import product from "./data/produck";
import Deskripsi from "./Pages/deskripsi";
import Login from "./Pages/login";
import user from "./user/user";
import Admin from "./admin/navbar";
import Kasir from "./kasir/dashboard";
import AdminDashboard from "./admin/dash";
import Editmenu from "./admin/menuEdit";
import Payment from "./Pages/payment";
import Receipt from "./Pages/receipt";

export default function App() {
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState("all");
    const [role, setRole] = useState("guest")
    const [receipt, setReceipt] = useState([])

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

    {/* Guest Route */}
    <Route path="/" element={<Menu cart={cart} setCart={setCart} deleteItem={deleteItem} incItem={incItem} totalHarga={totalHarga} filtered={filtered} setCategory={setCategory} role={role} setRole={setRole} />} />
    <Route path="/deskripsi" element={<Deskripsi setCart={setCart} cart={cart} totalHarga={totalHarga} total={filtered} incItem={incItem} deleteItem={deleteItem} />} />
    <Route path="/product/:id" element={<Deskripsi cart={cart} setCart={setCart} incItem={incItem} deleteItem={deleteItem} totalHarga={totalHarga}/>}/>
    <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} totalHarga={totalHarga} deleteItem={deleteItem} incItem={incItem} filtered={filtered}/>} />
    <Route path="/login" element={<Login role={role}  setRole={setRole} cart={cart} setCart={setCart} incItem={incItem} deleteItem={deleteItem} totalHarga={totalHarga}/> } />
    <Route path="/payment" element={<Payment cart={cart} totalHarga={totalHarga} receipt={receipt} setReceipt={setReceipt} setCart={setCart} />} />
    <Route path="/receipt" element={<Receipt receipt={receipt} setReceipt={setReceipt} />} />

    {/* admin Route */}
    <Route path="/admin" element={<AdminDashboard deleteItem={deleteItem} incItem={incItem} role={role} setRole={setRole} />} />
    <Route path="/admin/edit" element={<Editmenu setRole={setRole}/>} />

    {/* kasir Route */}
    <Route path="/kasir" element={<Kasir deleteItem={deleteItem} incItem={incItem}/>} />

  </Routes>
  </BrowserRouter>
  )
}