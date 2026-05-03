// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = ({ onLogin }) => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   // Demo credentials
//   const DEMO_EMAIL = "demo@passop.com";
//   const DEMO_PASSWORD = "demo123";

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Validate credentials
//     if (form.email === DEMO_EMAIL && form.password === DEMO_PASSWORD) {
//       // Store login state
//       localStorage.setItem("isLoggedIn", "true");
//       localStorage.setItem("userEmail", form.email);
//       localStorage.setItem("rememberMe", rememberMe.toString());
      
//       toast.success("Login successful! Redirecting...", {
//         position: "top-right",
//         autoClose: 2000,
//       });
      
//       // Notify parent component
//       setTimeout(() => {
//         onLogin(true);
//       }, 1500);
//     } else {
//       toast.error("Invalid credentials! Try: demo@passop.com / demo123", {
//         position: "top-right",
//         autoClose: 4000,
//       });
//     }
//   };

//   const fillDemoCredentials = () => {
//     setForm({ email: DEMO_EMAIL, password: DEMO_PASSWORD });
//   };

//   return (
//     <>
//       <ToastContainer />
      
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//           <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
//         </div>

//         <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-green-100">
//           {/* Header */}
//           <div className="text-center">
//             <div className="logo font-bold text-4xl mb-4">
//               <span className="text-green-500">&lt;</span>
//               <span>Pass</span>
//               <span className="text-green-500">OP/&gt;</span>
//             </div>
//             <h2 className="mt-2 text-3xl font-bold text-gray-900">
//               Welcome back
//             </h2>
//             <p className="mt-2 text-sm text-gray-600">
//               Your digital vault, secured
//             </p>
//           </div>

//           {/* Login Form */}
//           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="email" className="sr-only">
//                   Email address
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                   placeholder="Enter your email"
//                   value={form.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="relative">
//                 <label htmlFor="password" className="sr-only">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="current-password"
//                   required
//                   className="relative block w-full px-4 py-3 pr-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
//                   placeholder="Master Password"
//                   value={form.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <img
//                       src="/icons/eye.png"
//                       alt="Hide password"
//                       className="h-5 w-5 text-gray-400"
//                     />
//                   ) : (
//                     <img
//                       src="/icons/hidden.png"
//                       alt="Show password"
//                       className="h-5 w-5 text-gray-400"
//                     />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                 />
//                 <label
//                   htmlFor="remember-me"
//                   className="ml-2 block text-sm text-gray-900"
//                 >
//                   Remember this device
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <a
//                   href="#"
//                   className="font-medium text-green-600 hover:text-green-500"
//                 >
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             <div className="space-y-3">
//               <button
//                 type="submit"
//                 className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-2xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-105"
//               >
//                 <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                   <lord-icon
//                     src="https://cdn.lordicon.com/ljvjsnvh.json"
//                     trigger="hover"
//                     style={{ width: "20px", height: "20px" }}
//                   ></lord-icon>
//                 </span>
//                 Unlock Vault
//               </button>

//               <button
//                 type="button"
//                 onClick={fillDemoCredentials}
//                 className="w-full flex justify-center py-2 px-4 border border-green-300 text-sm font-medium rounded-2xl text-green-600 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
//               >
//                 Fill Demo Credentials
//               </button>
//             </div>
//           </form>

//           {/* Security Indicators */}
//           <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
//             <div className="flex items-center text-sm text-green-700 mb-2">
//               <lord-icon
//                 src="https://cdn.lordicon.com/egiwmiit.json"
//                 trigger="hover"
//                 style={{ width: "20px", height: "20px" }}
//               ></lord-icon>
//               <span className="ml-2 font-medium">End-to-End Encrypted</span>
//             </div>
//             <div className="flex items-center text-sm text-green-700">
//               <lord-icon
//                 src="https://cdn.lordicon.com/egiwmiit.json"
//                 trigger="hover"
//                 style={{ width: "20px", height: "20px" }}
//               ></lord-icon>
//               <span className="ml-2 font-medium">Zero-Knowledge Architecture</span>
//             </div>
//           </div>

//           <div className="text-center text-xs text-gray-500 mt-4">
//             <p>Demo Credentials: demo@passop.com / demo123</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
































import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ✅ CHANGED: Now accepts ANY email and password
    if (form.email && form.password) {
      // Store login state
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", form.email);
      localStorage.setItem("rememberMe", rememberMe.toString());
      
      toast.success("Login successful! Redirecting...", {
        position: "top-right",
        autoClose: 2000,
      });
      
      // Notify parent component
      setTimeout(() => {
        onLogin(true);
      }, 1500);
    } else {
      toast.error("Please enter both email and password", {
        position: "top-right",
        autoClose: 4000,
      });
    }
  };

  const fillDemoCredentials = () => {
    setForm({ email: "demo@passop.com", password: "demo123" });
  };

  return (
    <>
      <ToastContainer />
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-pink-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-pink-100">
          {/* Header */}
          <div className="text-center">
            <div className="logo font-bold text-4xl mb-4">
              <span className="text-pink-500">&lt;</span>
              <span>Pass</span>
              <span className="text-pink-500">OP/&gt;</span>
            </div>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Your digital vault, secured
            </p>
          </div>

          {/* Login Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="relative block w-full px-4 py-3 pr-12 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Master Password"
                  value={form.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <img
                      src="/icons/eye.png"
                      alt="Hide password"
                      className="h-5 w-5 text-gray-400"
                    />
                  ) : (
                    <img
                      src="/icons/hidden.png"
                      alt="Show password"
                      className="h-5 w-5 text-gray-400"
                    />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember this device
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-pink-600 hover:text-pink-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-2xl text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-200 transform hover:scale-105"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <lord-icon
                    src="https://cdn.lordicon.com/ljvjsnvh.json"
                    trigger="hover"
                    style={{ width: "20px", height: "20px" }}
                  ></lord-icon>
                </span>
                Unlock Vault
              </button>

              <button
                type="button"
                onClick={fillDemoCredentials}
                className="w-full flex justify-center py-2 px-4 border border-pink-300 text-sm font-medium rounded-2xl text-pink-600 bg-white hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-200"
              >
                Fill Demo Credentials
              </button>
            </div>
          </form>

          {/* Security Indicators */}
          <div className="mt-6 p-4 bg-pink-50 rounded-xl border border-pink-200">
            <div className="flex items-center text-sm text-pink-700 mb-2">
              <lord-icon
                src="https://cdn.lordicon.com/egiwmiit.json"
                trigger="hover"
                style={{ width: "20px", height: "20px" }}
              ></lord-icon>
              <span className="ml-2 font-medium">End-to-End Encrypted</span>
            </div>
            <div className="flex items-center text-sm text-pink-700">
              <lord-icon
                src="https://cdn.lordicon.com/egiwmiit.json"
                trigger="hover"
                style={{ width: "20px", height: "20px" }}
              ></lord-icon>
              <span className="ml-2 font-medium">Zero-Knowledge Architecture</span>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 mt-4">
            <p>Enter any email and password to login</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;