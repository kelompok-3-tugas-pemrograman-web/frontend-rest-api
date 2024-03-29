/** @format */

import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { StudentProvider } from "./Context/StudentContext";
import { useState } from "react";
import { StudentIndex } from "./components/students/StudentIndex";
import { StudentCreate } from "./components/students/StudentCreate";
import { StudentEdit } from "./components/students/StudentEdit";
import logo from "./logo-gunadarma.png";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <StudentProvider>
      <div className='w-full pt-4 bg-no-repeat bg-fixed bg-cover md:h-full  bg-[url("/src/beranda.png")]'>
        <div className='flex flex-col min-h-screen mx-auto max-w-7xl '>
          <nav className='flex-none bg-none '>
            <div className='flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto '>
              <a
                href='https://gunadarma.ac.id/'
                className='flex items-center space-x-3 rtl:space-x-reverse'>
                <img src={logo} className='h-14' alt='Gunadarma Logo' />
                <span className='self-center text-2xl font-bold whitespace-nowrap text-[#763996] md:dark:hover:text-[#9161ab] '>
                  Universitas Gunadarma
                </span>
              </a>
              <button
                type='button'
                className='inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#763996] focus:outline-none focus:ring-2 focus:ring-[#763996] dark:text-white dark:hover:bg-[#9161ab] dark:focus:ring-[#9161ab] '
                aria-controls='navbar-default'
                aria-expanded={isMenuOpen ? "true" : "false"}
                onClick={handleToggleMenu}>
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='w-5 h-5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 17 14'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 1h15M1 7h15M1 13h15'
                  />
                </svg>
              </button>
              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } w-full md:block md:w-auto`}
                id='navbar-default'>
                <ul className='flex flex-col p-4 mt-4 font-medium border rounded-lg md:p-0 bg-none md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 '>
                  <li>
                    <Link
                      className='text-2xl block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-[#763996] md:dark:hover:text-[#9161ab]  md:dark:hover:bg-transparent'
                      aria-current='page'
                      to='/'>
                      Beranda
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='text-2xl block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-[#763996] md:dark:hover:text-[#9161ab] md:dark:hover:bg-transparent'
                      to='/students'>
                      Daftar Mahasiswa
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className='items-center grow'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/students' element={<StudentIndex />} />
              <Route path='/students/create' element={<StudentCreate />} />
              <Route path='/students/:id/edit' element={<StudentEdit />} />
            </Routes>
          </div>

          <footer className='flex-none py-5 mx-auto'>
            <span className='text-sm  sm:text-center text-[#763996] md:dark:hover:text-[#9161ab '>
              © 2024{" "}
              <a href='https://gunadarma.ac.id/' className='hover:underline'>
                Kelompok 3
              </a>
              . All Rights Reserved.
            </span>
          </footer>
        </div>
      </div>
    </StudentProvider>
  );
}

export default App;
