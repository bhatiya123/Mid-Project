import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Campaign from "./pages/Campaign";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import FrontEndLayout from "./pages/FrontEndLayout";
import Registration from "./pages/Registration";

// admin pages
import AdminLayout from "./pages/Admin/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import AdminLogin from "./pages/Admin/AdminLogin";
import Users from "./pages/Admin/Users";
import Request from "./pages/Admin/AdminRequest";
import DoanteRequestList from "./pages/DonateRequestList";
import RequiredRequestList from "./pages/RequiredRequestList";
import AdminRequiredRequest from "./pages/Admin/AdminRequiredRequest";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontEndLayout />}>
            <Route index element={<Main />} />
            <Route path="/AboutUs" element={<About />}></Route>
            <Route path="/Campaign" element={<Campaign />}></Route>
            <Route
              path="/Donate-request"
              element={<DoanteRequestList />}
            ></Route>
            <Route
              path="/Required-request"
              element={<RequiredRequestList />}
            ></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Registration" element={<Registration />}>
              {" "}
            </Route>
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="donate-requests" element={<Request />} />
            <Route
              path="required-requests"
              element={<AdminRequiredRequest />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
