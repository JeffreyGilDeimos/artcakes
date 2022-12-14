import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminProducts from "../AdminProducts";
import AdminReviews from "../AdminReviews";
import Footer from "../Footer";
import Navigation from "../Navigation";

export default function Admin() {
  const activeUser = localStorage;
  const navigate = useNavigate();

  useEffect(() => {
    if (activeUser.email !== "admin@admin.com") {
      navigate("/");
    }
  }, [navigate, activeUser.email]);

  if (activeUser.email !== "admin@admin.com") {
    return;
  }

  return (
    <>
      <Navigation />
      <section id="admin">
        <AdminProducts />
        <AdminReviews />
      </section>
      <Footer />
    </>
  );
}
