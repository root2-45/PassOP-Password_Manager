// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-slate-800 text-white">
//       <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
//         <div className="logo font-bold text-white text-2xl">
//           <span className="text-green-700">/&lt;</span>

//           <span>Pass</span>
//           <span className="text-green-500">OP/&gt;</span>
//         </div>
//         {/* <ul>
//         <li className='flex gap-4'>
//            <a className='hover:font-bold'href='/'>Home</a>
//            <a className='hover:font-bold'href='#'>About</a>
//            <a className='hover:font-bold'href='#'>Contact</a>
//         </li>

//       </ul>  */}
//         <button className="text-white bg-green-700 my-5 rounded-full flex justify-between items-center ring-white ring-1">
//           <img
//             className="invert w-10 p-1"
//             src="/icons/github-logo.png"
//             alt="github logo"
//           />
//           <span className="font-bold px-2">GitHub</span>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";

const Navbar = ({ onLogout }) => {
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      onLogout();
    }
  };

  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-pink-700">/&lt;</span>
          <span>Pass</span>
          <span className="text-pink-500">OP/&gt;</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-300">
            Welcome, {localStorage.getItem("userEmail") || "User"}
          </span>

          <button
            onClick={handleLogout}
            className="text-white bg-red-600 hover:bg-red-700 my-5 rounded-full flex justify-between items-center px-4 py-2 transition-colors duration-200"
          >
            <lord-icon
              src="https://cdn.lordicon.com/whtfgdfm.json"
              trigger="hover"
              style={{ width: "20px", height: "20px" }}
            ></lord-icon>
            <span className="font-bold px-2">Logout</span>
          </button>

          <button className="text-white bg-pink-700 my-5 rounded-full flex justify-between items-center ring-white ring-1">
            <img
              className="invert w-10 p-1"
              src="/icons/github-logo.png"
              alt="github logo"
            />
            <span className="font-bold px-2">GitHub</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
