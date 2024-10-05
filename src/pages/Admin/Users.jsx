import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Trash } from "lucide-react";

const Users = () => {
  const [userlist, setUserlist] = useState([]);

  const getAllUsers = () => {
    const getToken = localStorage.getItem("adminToken");

    axios
      .get("http://localhost:8000/api/admin/users", {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((res) => {
        setUserlist(res.data.data);
        localStorage.setItem("totalUserCount", res.data.data.length);
      })
      .catch((err) => {
        console.log("errr", err);
      });
  };

  const deleteUser = (userId) => {
    const getToken = localStorage.getItem("adminToken");

    axios
      .get(`http://localhost:8000/api/admin/users/delete/${userId}`, {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((res) => {
        if (res.data.success) {
          toast.success("User deleted successfully!"); 
          getAllUsers(); 
        } else {
          toast.error("Something went wrong!"); 
        }
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
        toast.error("Failed to delete user!"); 
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h2 className="text-center">Users</h2>
      <div>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Registed Date</th>
            <th>Actions</th>
          </tr>
          {userlist.length === 0 ? (
            <>Users not found!</>
          ) : (
            userlist.map((item, index) => {
              return (
                <tr>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.createdAt.split("T")[0]}</td>
                  <td>
                      <Trash
                        style={{ cursor: "pointer", color: "black" }}
                        onClick={() => deleteUser(item._id)} 
                      />
                    </td>
                </tr>
              );
            })
          )}
        </table>
      </div>
    </div>
  );
};

export default Users;
