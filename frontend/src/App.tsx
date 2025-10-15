import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const auth = useAuth();

  return (
    <div style={{ 
      height: "100vh", 
      width: "100vw", 
      backgroundColor: "#05101c",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/chat" 
          element={auth?.isLoggedIn ? <Chat /> : <Login />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;