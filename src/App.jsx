import { Routes, Route, Link } from "react-router-dom";

import Mainform from "./page";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Mainform />} />
        <Route path="/about" element={<>About Page</>} />
      </Routes>
    </div>
  );
}
