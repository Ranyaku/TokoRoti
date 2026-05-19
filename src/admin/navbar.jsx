import AdminDashboard from "./dash"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import user from "../user/user"

export default function Admin({role, setRole}) {

  const location = useLocation()
  const navigate = useNavigate()
  const navLink = (path) => {
  return location.pathname === path
    ? "bg-white text-black"
    : "text-white hover:bg-white hover:text-black"
}

  return (
    <nav
      className="w-full h-14 bg-[#1f1f1f] flex items-center justify-between px-6"
    >

      {/* LEFT */}
      <div className="flex items-center gap-8">

        <h1
          className="text-white font-bold text-2xl"
        >
          TOKO WIBU
        </h1>

        {/* NAVIGATION */}
        <div className="flex items-center gap-2">

          <Link
            to="/admin"
            className={`px-3 py-1 rounded-md text-sm font-bold transition hover:bg-white hover:text-black
            ${navLink("/admin")}
            `}
          >
            DASHBOARD
          </Link>

          <Link
            to="/admin/edit"
            className={` px-3 py-1 rounded-md text-sm font-bold transition hover:bg-white hover:text-black ${navLink("/admin/edit")}
            `}
          >
            MENU MANAGEMENT
          </Link>

          <Link
            to="/admin/staff"
            className={`px-3 py-1 rounded-md text-sm font-bold transition hover:bg-white hover:text-black
            ${navLink("/admin/staff")}
            `}
          >
            STAFF MANAGEMENT
          </Link>

          <Link
            to="/admin/reports"
            className={` px-3 py-1 rounded-md text-sm font-bold transition hover:bg-white hover:text-black
            ${navLink("/admin/reports")}
            `}
          >
            REPORTS
          </Link>

          <Link
            to="/"
            className={` px-3 py-1 rounded-md text-sm font-bold transition  hover:bg-white hover:text-black
            ${navLink("/")}
            `}
          >
            VIEW STORE
          </Link>

        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        <div className="flex items-center gap-2">
          <span
            size={18}
            className="text-white"
          />👤

          <span
            className=" text-white font-bold text-sm
            "
          >
            ADMIN
          </span>
        </div>

        <button
        type="button"
          className="px-3 py-1 rounded-md text-red-500 font-bold text-sm transition hover:bg-white hover:text-black cursor-pointer"
          onClick={() => {
            setRole("guest")
            navigate("/")
          }}
        >
          LOGOUT
        </button>

      </div>
    </nav>
  )
}
<AdminDashboard />