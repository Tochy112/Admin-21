import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Dashboard/ProductPage/Product";
import Dashboard from "./Component/SideNav/Dashboard";
import ProtectedRoutes from "./Component/ProtectedRoutes";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<Login />}/>
=======
          <Route path="/Login" element={<Login />} />
          <Route path="/Product" element={<Product />} />
>>>>>>> c05a607a72322bec61b513a86866cd3b5642ac7b

          <Route element={<ProtectedRoutes />}>
            <Route path="/*" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
