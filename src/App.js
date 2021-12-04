import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Layout from "./layout/Layout"
import Login from "./components/Login"
import Bodegas from "./components/Bodegas"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Bodegas />} />
            </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
