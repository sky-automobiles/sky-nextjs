"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";

const Home = () => {
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      window.location.href = "/admin/login";
    } else window.location.href = "/admin/arena";
  }, []);
  return <div>Loading...</div>;
};

export default Home;
