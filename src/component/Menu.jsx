import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import product from "../data/produck";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { useState } from "react";
        
export default function Menu() {
    const [category, setCategory] = useState("all");

    const filtered = 
    category === "all"
        ? product
        : product.filter(item => item.category === category)

return (
    <>
    <div className="min-h-screen">
    <Navbar total={filtered.length}/>

    <main className="max-w-7xl mx-auto px-1 py-6 flex gap-10">
        <Sidebar setCategory={setCategory}/>
        <ProductList filter={filtered}/>
    </main>

    <Footer />
    </div>
    </>
);
}