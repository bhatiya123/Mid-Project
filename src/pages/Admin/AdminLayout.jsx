import React from "react";
import "./css/dashboard.css";
import { Link, Outlet } from "react-router-dom";
import { LayoutDashboard, Users, Heart, ClipboardList,LogOut } from 'lucide-react';

const AdminLayout = () => {
  return (
    <div>
      <div>
        {/* Sidebar */}
        <nav className="sidebar d-none d-md-block">
          <Link to="/admin/dashboard"> <LayoutDashboard size={24} /> Dashboard</Link>
          <Link to="/admin/users"> <Users size={24} /> Users</Link>
          <Link to="/admin/donate-requests"> <Heart size={24} /> Donate Requests</Link>
          <Link to="/admin/required-requests"><ClipboardList size={24} />  
           Required Requests</Link>
        </nav>

        {/* Main Content */}
        <div className="content">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light adminnav">
            <div className="container-fluid">
              <button
                className="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  {/* <li className="nav-item">
                    <a className="nav-link adminbtn" href="#profile">
                      Profile
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link adminbtn" to={"/admin/login"}>
                    <LogOut size={24} /> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Dashboard Content */}
          <div className="container mt-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
