// import { useState } from "react";

// import "./App.css";
// import Navbar from "./components/Navbar";
// import Manager from "./components/Manager";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//         <Manager />
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 to-blue-500">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">Loading...</div>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  // Test with your actual components
  return (
    <>
      <Navbar onLogout={handleLogout} />
      <div className="min-h-screen bg-pink-50">
        <Manager />
      </div>
      <Footer />
    </>
  );
}

export default App;
