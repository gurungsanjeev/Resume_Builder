
// import { Link } from 'react-router-dom'

// const NavBar = () => {
//   return (
//     <nav className="bg-indigo-500 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center ">
//         {/* Logo / Brand */}
//         <div className="text-2xl font-bold text-white">
//           <Link to="/home">Resume Builder</Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="space-x-4">
//           <Link
//             to="/login"
//             className="text-white hover:to-blue-100 font-medium transition"
//           >
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-medium transition "
//           >
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default NavBar






// import React from 'react';
// const primaryHex = "#137fec";
// const bgLightHex = "#f6f7f8";
// const bgDarkHex = "#101922";

// const LogoIcon = () => (
//     <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path d="M22.92 11.23a1 1 0 0 0-.92-.73H13V2a1 1 0 0 0-2 0v8.5H2a1 1 0 0 0-.92.73 1 1 0 0 0 .23.99l10 10.77a1 1 0 0 0 1.38 0l10-10.77a1 1 0 0 0 .23-.99Z"></path>
//     </svg>
// );

// const NavBar = ({ primaryHex }) => {
//     const iconStyle = {
//         fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
//     };
//     return (
// <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-4">
//                              <div className="flex items-center gap-4 text-slate-900 dark:text-slate-50">
//                                 <div className={`size-6 text-[${primaryHex}]`}>
//                                     <LogoIcon />
//                                 </div>
//                                 <h2 className="text-slate-900 dark:text-slate-50 text-xl font-bold leading-tight tracking-[-0.015em]">CV Maker</h2>
//                             </div>
//                             <div className="hidden md:flex flex-1 justify-end gap-8">
//                                 <div className="flex items-center gap-9">
//                                     <a className={`text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[${primaryHex}] dark:hover:text-[${primaryHex}]`} href="#">Features</a>
//                                     <a className={`text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[${primaryHex}] dark:hover:text-[${primaryHex}]`} href="#">Templates</a>
//                                     <a className={`text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[${primaryHex}] dark:hover:text-[${primaryHex}]`} href="#">Pricing</a>
//                                 </div>
//                                 <div className="flex gap-2">
//                                     <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
//                                         <span className="truncate">Login</span>
//                                     </button>
//                                     <button className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[${primaryHex}] text-white text-sm font-bold leading-normal tracking-[0.015em]`}>
//                                         <span className="truncate">Sign Up</span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </header>
//     );
// };

// // export default NavBar;
// import React from 'react';

// // --- Configuration Constants (Hex Values) ---
// // Define hex values based on the original Tailwind config to use with arbitrary values
// const primaryHex = "#137fec";
// const bgLightHex = "#f6f7f8";
// const bgDarkHex = "#101922";

// // --- Reusable Components/Icons ---

// const LogoIcon = () => (
//     <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path d="M22.92 11.23a1 1 0 0 0-.92-.73H13V2a1 1 0 0 0-2 0v8.5H2a1 1 0 0 0-.92.73 1 1 0 0 0 .23.99l10 10.77a1 1 0 0 0 1.38 0l10-10.77a1 1 0 0 0 .23-.99Z"></path>
//     </svg>
// );

// const NavBar = () => {
    
//     // Inline style for Material Symbols if not configured in global CSS
//     const iconStyle = {
//         fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
//     };

//     return (
//         <div className={`relative flex h-auto min-h-screen w-full flex-col bg-[${bgLightHex}] dark:bg-[${bgDarkHex}] group/design-root overflow-x-hidden font-display`}>
//             <div className="layout-container flex h-full grow flex-col">
//                 <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
//                     <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
                        
//                         {/* TopNavBar */}
//                         <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-4">
//                              <div className="flex items-center gap-4 text-slate-900 dark:text-slate-50">
//                                 <div className={`size-6 text-[${primaryHex}]`}>
//                                     <LogoIcon />
//                                 </div>
//                                 <h2 className="text-slate-900 dark:text-slate-50 text-xl font-bold leading-tight tracking-[-0.015em]">CV Maker</h2>
//                             </div>
//                             <div className="hidden md:flex flex-1 justify-end gap-8">
//                                 <div className="flex items-center gap-9">
//                                     <a className={`text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[${primaryHex}] dark:hover:text-[${primaryHex}]`} href="#">Features</a>
//                                     <a className={`text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[${primaryHex}] dark:hover:text-[${primaryHex}]`} href="#">Templates</a>
//                                     <a className={`text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[${primaryHex}] dark:hover:text-[${primaryHex}]`} href="#">Pricing</a>
//                                 </div>
//                                 <div className="flex gap-2">
//                                     <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
//                                         <span className="truncate">Login</span>
//                                     </button>
//                                     <button className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[${primaryHex}] text-white text-sm font-bold leading-normal tracking-[0.015em]`}>
//                                         <span className="truncate">Sign Up</span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </header>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NavBar;
import React from 'react';

// --- Configuration Constants (Hex Values) ---
const primaryHex = "#137fec";

// --- Reusable Components/Icons ---
const LogoIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.92 11.23a1 1 0 0 0-.92-.73H13V2a1 1 0 0 0-2 0v8.5H2a1 1 0 0 0-.92.73 1 1 0 0 0 .23.99l10 10.77a1 1 0 0 0 1.38 0l10-10.77a1 1 0 0 0 .23-.99Z"></path>
    </svg>
);

const NavBar = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-4">
            {/* Logo and Title Section */}
            <div className="flex items-center gap-4 text-slate-900 dark:text-slate-50">
                <div className={`size-6 text-[${primaryHex}]`}>
                    <LogoIcon />
                </div>
                <h2 className="text-slate-900 dark:text-slate-50 text-xl font-bold leading-tight tracking-[-0.015em]">CV Maker</h2>
            </div>
            
            {/* Navigation and Actions Section (Hidden on small screens) */}
            <div className="hidden md:flex flex-1 justify-end gap-8">
                {/* Navigation Links */}
                <div className="flex items-center gap-9">
                    <a className={`text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[${primaryHex}] dark:hover:text-[${primaryHex}]`} href="#">Features</a>
                    <a className={`text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[${primaryHex}] dark:hover:text-[${primaryHex}]`} href="#">Templates</a>
                    <a className={`text-slate-800 dark:text-slate-300 text-sm font-medium leading-normal hover:text-[${primaryHex}] dark:hover:text-[${primaryHex}]`} href="#">Pricing</a>
                </div>
                
                {/* Buttons */}
                <div className="flex gap-2">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Login</span>
                    </button>
                    <button className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[${primaryHex}] text-white text-sm font-bold leading-normal tracking-[0.015em]`}>
                        <span className="truncate">Sign Up</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default NavBar;