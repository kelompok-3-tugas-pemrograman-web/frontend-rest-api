/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const StudentIndex = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const getStudents = async () => {
      const apiStudents = await axios.get(
        "http://localhost:8000/api/v1/students"
      );
      setStudents(apiStudents.data.data);
    };
    getStudents();
  }, []);
  return (
    <div className='mt-20'>
      <div className='relative overflow-x-auto sm:rounded-lg'>
        <div className='flex none '>
          <div className='pb-4 w-6/12 items-center '>
            <label htmlFor='table-search' className='sr-only'>
              Search
            </label>
            <div className='relative mt-1'>
              <div className='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-white dark:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>
              <input
                type='text'
                id='table-search'
                className='block pt-8 py-auto  text-md text-white align-baseline  rounded-lg w-full  bg-[#763996]'
                placeholder='Search for items'
              />
            </div>
          </div>
          <div className='w-6/12 px-2 flex justify-end items-center'>
            <Link
              type='button'
              className='focus:outline-none text-white bg-[#763996] hover:bg-[#9161ab]  font-medium rounded-full text-sm px-5 py-3 mb-2 my-3  '
              to='/students/create'>
              Tambah Data
            </Link>
          </div>
        </div>

        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                NPM
              </th>
              <th scope='col' className='px-6 py-3'>
                Nama
              </th>
              <th scope='col' className='px-6 py-3'>
                Kelas
              </th>
              <th scope='col' className='px-6 py-3'>
                Jurusan
              </th>
              <th scope='col' className='px-6 py-3'>
                Nomor HP
              </th>
              <th scope='col' className='px-6 py-3'>
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr
                  key={student.id}
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <td className='px-6 py-4'>{student.npm}</td>
                  <td className='px-6 py-4'>{student.nama}</td>
                  <td className='px-6 py-4'>{student.kelas}</td>
                  <td className='px-6 py-4'>{student.jurusan}</td>
                  <td className='px-6 py-4'>{student.nohp}</td>
                  <td className='px-6 py-4'>edit/delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
