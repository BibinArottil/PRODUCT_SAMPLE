import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Admin from "./routes/NewAdmin";
import User from "./routes/User"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/admin/*" element={<Admin />}/>
        <Route exact path="/*" element={<User />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
