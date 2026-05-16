import AdminDashboard from "./dash"
import { Link, useLocation } from "react-router-dom"
import user from "../user/user"

export default function Admin() {

  const location = useLocation()

  const navLink = (path) => {
    return location.pathname === path
      ? "bg-[#242424] text-white"
      : "text-white hover:bg-[#242424] hover:text-white"
  }

  return (
    <nav
      className="
        w-full
        h-14
        bg-[#1f1f1f]
        flex
        items-center
        justify-between
        px-6
      "
    >

      {/* LEFT */}
      <div className="flex items-center gap-8">

        <h1
          className="
            text-white
            font-bold
            text-2xl
          "
        >
          TOKO WIBU
        </h1>

        {/* NAVIGATION */}
        <div className="flex items-center gap-2">

          <Link
            to="/admin"
            className={`
              px-3
              py-1
              rounded-md
              text-sm
              font-bold
              transition
              ${navLink("/admin")}
            `}
          >
            DASHBOARD
          </Link>

          <Link
            to="/admin/menu"
            className={`
              px-3
              py-1
              rounded-md
              text-sm
              font-bold
              transition
              ${navLink("/admin/menu")}
            `}
          >
            MENU MANAGEMENT
          </Link>

          <Link
            to="/admin/staff"
            className={`
              px-3
              py-1
              rounded-md
              text-sm
              font-bold
              transition
              ${navLink("/admin/staff")}
            `}
          >
            STAFF MANAGEMENT
          </Link>

          <Link
            to="/admin/reports"
            className={`
              px-3
              py-1
              rounded-md
              text-sm
              font-bold
              transition
              ${navLink("/admin/reports")}
            `}
          >
            REPORTS
          </Link>

          <Link
            to="/"
            className={`
              px-3
              py-1
              rounded-md
              text-sm
              font-bold
              transition
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
            className="
              text-white
              font-bold
              text-sm
            "
          >
            ADMIN
          </span>
        </div>

        <button
          className="
            px-3
            py-1
            rounded-md
            text-red-500
            font-bold
            text-sm
            transition
            hover:bg-white
            hover:text-black
            cursor-pointer
          "
        >
          LOGOUT
        </button>

      </div>
    </nav>
  )
}
<AdminDashboard />