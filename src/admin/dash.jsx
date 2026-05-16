import Admin from "./dashboard"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#ececec]">

      <Admin />

      <div
        className="
          max-w-6xl
          mx-auto
          py-10
          px-4
        "
      >

        {/* TOP CARDS */}
        <div
          className="
            grid
            grid-cols-3
            gap-6
          "
        >

          <div
            className="
              h-40
              bg-[#242424]
              rounded-2xl
              p-5
              text-white
              font-bold
            "
          >
            PENJUALAN HARIAN
          </div>

          <div
            className="
              h-40
              bg-[#242424]
              rounded-2xl
              p-5
              text-white
              font-bold
            "
          >
            STOCK
          </div>

          <div
            className="
              h-40
              bg-[#242424]
              rounded-2xl
              p-5
              text-white
              font-bold
            "
          >
            BEST SELLER
          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-8
            h-[350px]
            bg-[#242424]
            rounded-2xl
            p-5
            text-white
            font-bold
          "
        >
          ACTIVE STAFF
        </div>

      </div>
    </div>
  )
}