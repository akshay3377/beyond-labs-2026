import { Routes, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<>home Page</>} />
        <Route path="/about" element={<>About Page</>} />
      </Routes>
    </div>
  );
}
