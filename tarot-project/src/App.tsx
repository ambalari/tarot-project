import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Главная страница</h1>;
}

function About() {
  return <h1>О проекте</h1>;
}

export default function App() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Главная</Link> |{" "}
        <Link to="/about">О проекте</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
