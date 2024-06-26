import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./Context/GlobalContext";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { CreateNews } from "./Components/CreateNews/CreateNews";
import "./App.css";

import { Performance } from "./Components/Performance/Performance";
import { ManageNewsFeed } from "./Components/ManageNews/ManageNewsFeed";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <GlobalContext>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-news" element={<CreateNews />} />
            <Route path="/manage-news-feed" element={<ManageNewsFeed />} />
            <Route path="/performance-report" element={<Performance />} />
          </Routes>
        </Router>
      </GlobalContext>
    </div>
  );
}
export default App;
