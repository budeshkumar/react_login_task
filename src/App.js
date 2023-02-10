import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import LoginSuccess from "./components/LoginSuccess";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/LoginSuccess" element={<LoginSuccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
