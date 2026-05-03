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



































// import { useState, useEffect } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Manager from "./components/Manager";
// import Footer from "./components/Footer";
// import Login from "./components/Login";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   // Check authentication status on app start
//   useEffect(() => {
//     const checkAuth = () => {
//       const loggedIn = localStorage.getItem("isLoggedIn") === "true";
//       setIsLoggedIn(loggedIn);
//       setIsLoading(false);
//     };

//     checkAuth();
//   }, []);

//   const handleLogin = (status) => {
//     setIsLoggedIn(status);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("rememberMe");
//     setIsLoggedIn(false);
//   };

//   // Show loading spinner while checking auth
//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500">
//         <div className="text-center">
//           <div className="logo font-bold text-4xl text-white mb-4">
//             <span className="text-green-200">&lt;</span>
//             <span>Pass</span>
//             <span className="text-green-200">OP/&gt;</span>
//           </div>
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
//           <p className="text-white mt-4">Securing your vault...</p>
//         </div>
//       </div>
//     );
//   }

//   // Show login page if not authenticated
//   if (!isLoggedIn) {
//     return <Login onLogin={handleLogin} />;
//   }

//   // Show main app if authenticated - THIS IS YOUR ORIGINAL CODE
//   return (
//     <>
//       <Navbar onLogout={handleLogout} />
//       <div className="bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//         <Manager />
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;                       















// import { useState, useEffect } from "react";
// import Login from "./components/Login";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   // Always show login for testing
//   return <Login onLogin={handleLogin} />;
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