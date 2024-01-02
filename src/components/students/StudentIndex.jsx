/** @format */

import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import StudentContext from "../../Context/StudentContext";

export const StudentIndex = () => {
  const { students, getStudents, deleteStudent } = useContext(StudentContext);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getStudents();
    setRecords([...students].sort((a, b) => b.id - a.id));
  }, [getStudents, students]);

  const Filter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setRecords(
      students.filter(
        (student) =>
          String(student.npm).includes(searchTerm) ||
          String(student.npm) === searchTerm ||
          student.nama.toLowerCase().includes(searchTerm)
      )
    );
  };

  return (
    <div className='mt-20'>
      <div className='flex justify-between '>
        <form className='flex items-center flex-grow'>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-white sr-only '>
            Search
          </label>
          <div className='relative flex '>
            <div className='absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3'>
              <svg
                className='w-4 h-4 text-white '
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
              id='default-search'
              className='block w-[500px] p-4 text-sm text-white border border-[#9161ab] rounded-lg ps-10 bg-[#763996]'
              placeholder='Cari mahasiswa...'
              onChange={Filter}
              required
            />
          </div>
        </form>

        <div className='flex items-center'>
          <Link
            type='button'
            className=' text-white bg-[#763996] hover:bg-[#9161ab]  font-medium rounded-2xl text-sm px-5 py-3 mb-2 my-3  '
            to='/students/create'>
            Tambah Data
          </Link>
        </div>
      </div>
      <div className='relative overflow-x-auto md:rounded-2xl '>
        <table className='w-full text-sm text-center text-white rtl:text-right 0'>
          <thead className='text-xs text-white uppercase bg-[#763996] '>
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
          <tbody className='text-center'>
            {records.map((student) => {
              return (
                <tr
                  key={student.id}
                  className='bg-[#3b1d4b] border-b  hover:bg-[#bb9ccb]'>
                  <td className='px-6 py-4'>{student.npm}</td>
                  <td className='px-6 py-4'>{student.nama}</td>
                  <td className='px-6 py-4'>{student.kelas}</td>
                  <td className='px-6 py-4'>{student.jurusan}</td>
                  <td className='px-6 py-4'>{student.nohp}</td>
                  <td className='px-6 py-4 '>
                    <Link
                      to={`/students/${student.id}/edit`}
                      className='gap-1 px-4 py-2 mr-2 text-white bg-green-500 rounded-md hover:bg-green-700 bg-green'>
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteStudent(student.id)}
                      className='px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-700 bg-green'>
                      Hapus
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
