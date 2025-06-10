export default function InvitationsPage() {
    return (
      <div className="flex h-screen bg-gray-400 text-yellow-200">
        {/* Sidebar */}
        <aside className="w-1/5 bg-yellow-200 text-black p-6 space-y-6">
          <h1 className="text-2xl font-bold">Tshimoverse</h1>
          <nav className="space-y-3 text-lg">
            <div className="hover:underline cursor-pointer">DASHBOARD</div>
            <div className="hover:underline cursor-pointer">BENEFICIARIES</div>
            <div className="font-bold underline">INVITATIONS</div>
            <div className="hover:underline cursor-pointer">REPORTS</div>
            <div className="hover:underline cursor-pointer">ADMIN USERS</div>
          </nav>
        </aside>
  
        {/* Main content */}
        <main className="flex-1 p-10 space-y-10">
          <h2 className="text-3xl font-extrabold underline">INVITATIONS</h2>
  
          {/* Form Card */}
          <div className="border border-yellow-200 p-6 rounded-lg space-y-6">
            {/* Program selection and bulk import */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <label className="text-lg">PROGRAM</label>
                <select className="bg-yellow-200 text-black rounded px-3 py-1">
                  <option>Select Program</option>
                  <option value="program1">Software Development</option>
                  <option value="program2">Animation</option>
                  <option value="program2">Gaming</option>
                </select>
              </div>
  
              <button className="bg-yellow-200 text-black px-4 py-2 rounded flex items-center gap-2 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0 0l-3-3m3 3l3-3m0-6v1m0 4v1" /></svg>
                BULK IMPORT
              </button>
            </div>
  
            {/* Email input */}
            <div className="flex items-center space-x-4">
              <label className="text-lg">Email:</label>
              <input type="email" placeholder="Enter email" className="bg-gray border border-yellow-200 text-black rounded px-3 py-2 w-full" />
              <button className="bg-yellow-200 text-black px-3 py-2 rounded text-xl font-bold">+</button>
            </div>
  
            {/* Invite button */}
            <button className="w-full bg-yellow-200 text-black font-semibold py-3 rounded">INVITE</button>
          </div>
  
          {/* Pending Invites Table */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">PENDING INVITES (Last 30 days)</h3>
            <table className="w-full border border-yellow-200">
              <thead>
                <tr className="bg-yellow-200 text-black">
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Expiry Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-yellow-400">
                  <td className="p-3">mos@dej.com</td>
                  <td className="p-3">Expires May 30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    );
  }
  