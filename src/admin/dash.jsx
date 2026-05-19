import BestSeller from "./best"
import Admin from "./navbar"
import Sales from "./sales"
import Staff from "./staff"
import Stock from "./stock"

export default function AdminDashboard({ role, setRole }) {
  return (
    <div className="min-h-screen bg-[#ececec]">
      <Admin role={role} setRole={setRole} />

      <div
        className="
          max-w-6xl
          mx-auto
          py-10
          px-4
        "
      >
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-6 items-start">
            <Sales />
            <Stock />
            <BestSeller />
          </div>

          <Staff />
        </div>
      </div>
    </div>
  )
}
