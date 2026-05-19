import { useState } from "react"
import user from "../user/user"
import Footer from "../component/Footer"
import { Navigate, useNavigate } from "react-router-dom"

export default function Login({ cart, setCart, filtered, incItem, deleteItem, totalHarga, setRole, role }) {
  const [login, setLogin] = useState(true)
  const [error, setError] = useState(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function checkLog(user) {
    const exist = user.find((item) => item.username === username && item.password === password)

    if (exist) {
      setRole(exist.role)

      if (exist.role === "Admin") {
        navigate("/admin")
      }

      if (exist.role === "Kasir") {
        navigate("/kasir")
      }
      console.log("LOGIN BERHASIL")
      console.log(exist.role)
      setError(null)
    } else {
      setError("Username Atau Password Salah!!!")
    }
  }

  function handleLogin(x) {
    x.preventDefault()
    checkLog(user)
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#ececec]">
        <div className="w-[420px] bg-[#f5f5f5] rounded-2xl border border-gray-300 shadow-md px-8 py-10">
          <h1 className="text-center text-2xl font-bold text-gray-700 mb-8">Login/Sign In</h1>

          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Email/No telepon</label>

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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Password</label>

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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <span className="text-red-500">{error}</span>}

            <button
              type="submit"
              className="mt-4 h-11 rounded-xl bg-gray-600 hover:bg-gray-700 transition text-white font-bold cursor-pointer
        "
            >
              login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
