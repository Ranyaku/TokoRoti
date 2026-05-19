export default function Staff() {
  const activeStaff = [
    {
      name: "John",
      role: "Cashier",
    },
    {
      name: "Sarah",
      role: "Baker",
    },
    {
      name: "Mike",
      role: "Manager",
    },
  ]

  return (
    <div
      className="
    bg-[#242424]
    rounded-2xl
    p-5
    text-white
  "
    >
      <h2 className="text-lg font-bold mb-4">ACTIVE STAFF</h2>

      <div className="space-y-3">
        {activeStaff.map((staff, index) => (
          <div
            key={index}
            className="
          flex
          items-center
          justify-between
          bg-[#1a1a1a]
          rounded-xl
          px-4
          py-3
        "
          >
            <div className="flex items-center gap-3">
              <div
                className="
              w-10
              h-10
              rounded-full
              bg-white
              text-black
              flex
              items-center
              justify-center
              font-bold
            "
              >
                {staff.name.charAt(0)}
              </div>

              <div>
                <p className="font-semibold">{staff.name}</p>

                <p className="text-sm text-gray-400">{staff.role}</p>
              </div>
            </div>

            <span
              className="
            bg-green-500
            text-white
            text-xs
            px-3
            py-1
            rounded-md
          "
            >
              ACTIVE
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
