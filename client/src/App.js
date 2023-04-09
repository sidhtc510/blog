import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import  "./style.css"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/post/:id" Component={Single} />
          <Route path="/write" Component={Write} />
        </Routes>
        <Footer />
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
