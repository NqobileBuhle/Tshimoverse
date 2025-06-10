

export default function BeneficiariesPage() {
  return (
    <div className="flex h-screen bg-gray-400 text-yellow-200">
      {/* Sidebar */}
      <aside className="w-1/5 bg-yellow-200 text-black p-6 space-y-6">
        <h1 className="text-2xl font-bold">Tshimoverse</h1>
        <nav className="space-y-3 text-lg">
          {/* <div className="hover:underline cursor-pointer">DASHBOARD</div> */}
          <div className="font-bold underline">BENEFICIARIES</div> {/* Highlighted */}
          {/* <div className="hover:underline cursor-pointer">INVITATIONS</div>
          <div className="hover:underline cursor-pointer">REPORTS</div>
          <div className="hover:underline cursor-pointer">ADMIN USERS</div> */}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10 space-y-10">
        <h2 className="text-3xl font-extrabold underline">BENEFICIARIES</h2>

        {/* Form Card for Adding Beneficiary */}
        <div className="border border-yellow-200 p-6 rounded-lg space-y-6">
          <h3 className="text-xl font-bold">Add New Beneficiary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <label htmlFor="beneficiaryName" className="block text-lg mb-2">Name</label>
              <input
                type="text"
                id="beneficiaryName"
                placeholder="e.g., John Doe"
                className="bg-gray border border-yellow-200 text-black rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Email Input */}
            <div>
              <label htmlFor="beneficiaryEmail" className="block text-lg mb-2">Email</label>
              <input
                type="email"
                id="beneficiaryEmail"
                placeholder="e.g., john.doe@example.com"
                className="bg-gray border border-yellow-200 text-black rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Program Selection */}
            <div>
              <label htmlFor="beneficiaryProgram" className="block text-lg mb-2">Program</label>
              <select
                id="beneficiaryProgram"
                className="bg-yellow-200 text-black rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              >
                <option>Select Program</option>
                <option value="software">Software Development</option>
                <option value="animation">Animation</option>
                <option value="gaming">Gaming</option>
              </select>
            </div>
            {/* Status (e.g., Active/Inactive) */}
            <div>
              <label htmlFor="beneficiaryStatus" className="block text-lg mb-2">Status</label>
              <select
                id="beneficiaryStatus"
                className="bg-yellow-200 text-black rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          {/* Add Beneficiary Button */}
          <button className="w-full bg-yellow-200 text-black font-semibold py-3 rounded hover:bg-yellow-300 transition duration-300 ease-in-out">
            ADD BENEFICIARY
          </button>
        </div>

        {/* Beneficiaries Table */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">ALL BENEFICIARIES</h3>
          <table className="w-full border border-yellow-200">
            <thead>
              <tr className="bg-yellow-200 text-black">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Program</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Beneficiary Row */}
              <tr className="border-t border-yellow-400">
                <td className="p-3">Thandeka Zulu</td>
                <td className="p-3">thandeka.zulu@example.com</td>
                <td className="p-3">Software Development</td>
                <td className="p-3">Active</td>
                <td className="p-3 flex space-x-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
              <tr className="border-t border-yellow-400">
                <td className="p-3">Sipho Dlamini</td>
                <td className="p-3">sipho.d@example.com</td>
                <td className="p-3">Animation</td>
                <td className="p-3">Completed</td>
                <td className="p-3 flex space-x-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
              {/* Add more beneficiary rows here as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}