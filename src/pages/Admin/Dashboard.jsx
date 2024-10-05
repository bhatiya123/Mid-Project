import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [totalRequests, setTotalRequests] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRequiredBlood, setTotalRequiredBlood] = useState(0);
  const [requestCounts, setRequestCounts] = useState({
    pending: 0,
    approved: 0,
    rejected: 0,
  });
  const [statusCounts, setStatusCounts] = useState({
    pending: 0,
    approve: 0,
    reject: 0,
  });

  useEffect(() => {
    const fetchStatusCounts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/admin/blood/request-counts", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`, // Adjust the token storage as needed
          },
        });
        if (response.data.success) {
          setStatusCounts(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching donate blood status counts:", error);
      }
    };

    fetchStatusCounts();
  }, []);

  useEffect(() => {
    const fetchRequestCounts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/admin/requestblood/request-counts", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        });
        if (response.data.success) {
          setRequestCounts(response.data.counts);
        }
      } catch (error) {
        console.error("Error fetching request counts:", error);
      }
    };

    fetchRequestCounts();
  }, []);

  useEffect(() => {
    const requiredrequestCount = localStorage.getItem("totalRequiredBloodCount");
    setTotalRequiredBlood(requiredrequestCount || 0);
  }, []);

  useEffect(() => {
    const requestCount = localStorage.getItem("totalRequestCount");
    setTotalRequests(requestCount || 0);
  }, []);

  useEffect(() => {
    const userCount = localStorage.getItem("totalUserCount");
    setTotalUsers(userCount || 0);
  }, []);

  return (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
      <div>
        <h2>Total Requests: {totalRequests}</h2>
        <p>Pending Requests: {statusCounts.pending}</p>
      <p>Approved Requests: {statusCounts.approve}</p>
      <p>Rejected Requests: {statusCounts.reject}</p>
      </div>
      <div>
        <h2>Total Users: {totalUsers}</h2>
      </div>
      <div>
        <h2>Total Blood Requests: {totalRequiredBlood}</h2>
        <p>Pending Requests: {requestCounts.pending}</p>
        <p>Approved Requests: {requestCounts.approved}</p>
        <p>Rejected Requests: {requestCounts.rejected}</p>
      </div>
    </div>
  );
};

export default Dashboard;
