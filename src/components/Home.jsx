/** @format */

import React from "react";
import ilustration from "../ilustration.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className='flex items-center h-screen '>
      <div className='w-6/12 px-2 '>
        <h1 className='text-xl font-bold text-[#763996]'>
          Sistem Informasi Mahasiswa: Akses Cepat, Informasi Lengkap
        </h1>
        <p className='text-left py-3 text-[#763996] font-semibold'>
          Selamat datang di Portal Mahasiswa kami, tempat terbaik untuk
          menemukan informasi lengkap tentang komunitas mahasiswa kami. Temukan
          data diri mahasiswa, jelajahi prestasi, dan ikuti perjalanan akademis
          mereka dengan mudah. Dengan fitur pencarian yang efisien, portal ini
          memberikan transparansi dan aksesibilitas, menciptakan ruang di mana
          keberagaman dihargai.
        </p>
        <Link
          type='button'
          className='focus:outline-none text-white bg-[#763996] hover:bg-[#9161ab]  font-medium rounded-full text-sm px-5 py-3 mb-2 my-3'
          to='/students'>
          Daftar Mahasiswa
        </Link>
      </div>
      <div className='w-6/12 px-2'>
        <img src={ilustration} alt='ilustration' className='w-[621px]' />
      </div>
    </div>
  );
};
