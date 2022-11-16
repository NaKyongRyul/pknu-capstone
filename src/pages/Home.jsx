import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <nav>
      <Link to="/login">Loginn</Link>
      <hr />
      <Link to="/register">Register</Link>
      <hr />
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}
