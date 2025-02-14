import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Nav from "./components/Nav/Nav";
import User from "./pages/User/User";
import Form from "./pages/Form/Form";
import UncontrolledForm from "./pages/UncontrolledForm/UncontrolledForm";
import Albums from "./pages/Albums/Albums";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About /> } />
        <Route path="/user/:id" element={<User /> } />
        <Route path="/form" element={<Form />} />
        <Route path="/uncontrolled" element={<UncontrolledForm />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
