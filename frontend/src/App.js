import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { CreateNews } from "./Components/CreateNews/CreateNews";
import "./App.css";
import { GlobalContext } from "./Components/Context/GlobalContext";

function App() {
  return (
    <div className="App">
      <GlobalContext>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-news" element={<CreateNews />} />
          </Routes>
        </Router>
      </GlobalContext>
    </div>
  );
}
export default App;
