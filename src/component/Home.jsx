import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import Footer from "./Footer";
import { useState } from "react";

export default function Home() {
    const [category, setCategory] = useState("all");
return (
    <>
    <div className="min-h-screen">
    <Navbar />

    <main className="max-w-7xl mx-auto px-1 py-6 flex gap-10">
        <Sidebar setCategory={setCategory}/>
        <ProductList category={category}/>
    </main>

    <Footer />
    </div>
    </>
);
}