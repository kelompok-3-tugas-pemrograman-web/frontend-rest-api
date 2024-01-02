/** @format */

import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import StudentContext from "../../Context/StudentContext";

export const StudentIndex = () => {
  const { students, getStudents, deleteStudent } = useContext(StudentContext);
  useEffect(() => {
    getStudents();
  }, []);
  return (
    <div className='mt-20'>
      <div className='flex justify-end px-2'>
        <Link
          type='button'
          className=' text-white bg-[#763996] hover:bg-[#9161ab]  font-medium rounded-full text-sm px-5 py-3 mb-2 my-3  '
          to='/students/create'>
          Tambah Data
        </Link>
      </div>
      <div className='relative overflow-x-auto sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400'>
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
                  <td className='px-6 py-4 '>
                    <Link
                      to={`/students/${student.id}/edit`}
                      className='gap-1 px-4 py-2 mr-2 text-white bg-green-500 rounded-md hover:bg-green-700 bg-green'>
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteStudent(student.id)}
                      to={`/students/${student.id}/edit`}
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
