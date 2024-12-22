import { Route, Routes } from "react-router-dom"
import OverviewPage from "./pages/OverviewPage"
import ProductsPage from "./pages/ProductsPage"
import Sidebar from "./components/Sidebar"
import UsersPage from "./pages/UsersPage"
import SalesPage from "./pages/SalesPage"




function App() {


  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 t0-gray-900 opacity-80">

        </div>
        <div className="absolute inset-0 backdrop-blur-sm">

        </div>

      </div>
      <Sidebar></Sidebar>
        

      <Routes>

        <Route path="/" element={<OverviewPage></OverviewPage>}>

        </Route>
        <Route path="/products" element={<ProductsPage></ProductsPage>}>

        </Route>
        <Route path="/users" element={<UsersPage></UsersPage>}>

        </Route>
        <Route path="/sales" element={<SalesPage></SalesPage>}>

        </Route>
        

      </Routes>

    </div>
  )
}

export default App
