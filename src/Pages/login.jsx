import { useState } from "react"
import Footer from "../component/Footer";

export default function Login({cart, setCart, filtered, incItem, deleteItem, totalHarga}) {
    const [login, setLogin] = useState(true)

    return (
        <>
        <div className="min-h-screen flex items-center justify-center bg-[#ececec]">
  <div className="w-[420px] bg-[#f5f5f5] rounded-2xl border border-gray-300 shadow-md px-8 py-10">
    
    <h1 className="text-center text-2xl font-bold text-gray-700 mb-8">
      Login/Sign In
    </h1>

    <form className="flex flex-col gap-5">
      
      {/* EMAIL */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">
          Email/No telepon
        </label>

        <input
          type="text"
          placeholder="email"
          className="
            w-full
            h-11
            px-4
            rounded-xl
            border
            border-gray-300
            outline-none
            focus:border-blue-500
            bg-white
          "
        />
      </div>

      {/* PASSWORD */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">
          Password
        </label>

        <input
          type="password"
          placeholder="password"
          className="
            w-full
            h-11
            px-4
            rounded-xl
            border
            border-gray-300
            outline-none
            focus:border-blue-500
            bg-white
          "
        />
      </div>

      {/* CONFIRM PASSWORD */}
      {!login && (

        <div className="flex flex-col gap-2">
        <label className="font-semibold text-gray-700">
          Konfirmasi Password
        </label>

        <input
          type="password"
          placeholder="konfirmasi password"
          className="
            w-full
            h-11
            px-4
            rounded-xl
            border
            border-gray-300
            outline-none
            focus:border-blue-500
            bg-white
            "
            />
      </div>
          )}

          
          <button
          className="cursor-pointer"
          type="button"
          onClick={() => setLogin(!login)}
          >
            <span>{login ? "Belum Punya Akun?" : "Sudah Punya Akun?"}</span>
          </button>
      {/* BUTTON */}
      <button
        className="
          mt-4
          h-11
          rounded-xl
          bg-gray-600
          hover:bg-gray-700
          transition
          text-white
          font-bold
          cursor-pointer
        "
      >
        {login ? "Login" : "Sign Up"}
      </button>

    </form>
  </div>
</div>
<Footer />
        </>
    )
}