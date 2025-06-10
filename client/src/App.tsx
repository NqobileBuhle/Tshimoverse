import AdminUserUpload from "./components/admin.tsx";
import InvitationsPage from "./components/invitations.tsx";
import BeneficiariesPage from "./components/beneficiary.tsx";

const App = () => {
  return (
    <div>
      <AdminUserUpload/>
      <InvitationsPage/>
      <BeneficiariesPage/>
    </div>
  )
}

export default App
