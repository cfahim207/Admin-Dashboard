import { Route, Routes } from "react-router-dom"
import OverviewPage from "./pages/OverviewPage"
import ProductsPage from "./pages/ProductsPage"
import Sidebar from "./components/Sidebar"
import UsersPage from "./pages/UsersPage"
import SalesPage from "./pages/SalesPage"
import OrderPage from "./pages/OrderPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import SettingsPage from "./pages/SettingsPage"




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

        <Route path="/orders" element={<OrderPage></OrderPage>}>

        </Route>

        <Route path="/analytics" element={<AnalyticsPage></AnalyticsPage>}>

        </Route>

        <Route path="/settings" element={<SettingsPage></SettingsPage>}>

        </Route>
        

      </Routes>

    </div>
  )
}

export default App
