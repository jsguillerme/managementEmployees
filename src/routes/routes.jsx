import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/Home/index.jsx";
import Login from "../views/Login/index.jsx"


export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={ <Navigate to={'/login'} />}
        />
        <Route
          path="/login"
          element={ <Login />}
        />
        <Route
          path="/home"
          element={ <Home /> }
        />
      </Routes>
    </Router>
  )
}
