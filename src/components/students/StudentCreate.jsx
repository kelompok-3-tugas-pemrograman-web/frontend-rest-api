/** @format */

import React from "react";
import { Link } from "react-router-dom";

export const StudentCreate = () => {
  return (
    <div className='mt-12'>
      <form className='max-w-md p-4 mx-auto bg-white rounded-xl shadow-md '>
        <h1 className='font-semibold text-xl flex justify-center py-4'>
          Tambah Data Mahasiswa
        </h1>
        <div className='space-y-6'>
          <div className='mb-4'>
            <label htmlFor='npm' className='block mb-2 text-sm font-medium'>
              NPM
            </label>
            <input
              type='text'
              className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md'
            />
            <label htmlFor='nama' className='block mb-2 text-sm font-medium'>
              Nama
            </label>
            <input
              type='text'
              className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md'
            />
            <label htmlFor='kelas' className='block mb-2 text-sm font-medium'>
              Kelas
            </label>
            <input
              type='text'
              className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md'
            />
            <label htmlFor='jurusan' className='block mb-2 text-sm font-medium'>
              Jurusan
            </label>
            <input
              type='text'
              className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md'
            />
            <label htmlFor='nohp' className='block mb-2 text-sm font-medium'>
              Nomor Telepon
            </label>
            <input
              type='text'
              className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md'
            />
          </div>
          <div className='flex flex-row justify-between'>
            <div className='my-4 '>
              <Link
                type='button'
                className='px-4 py-2 text-[#763996] '
                to='/students'>
                Batal
              </Link>
            </div>
            <div className='my-4  '>
              <button className='px-4 py-2 text-white bg-[#763996] rounded-md hover:bg-[#9161ab] '>
                Tambah
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
