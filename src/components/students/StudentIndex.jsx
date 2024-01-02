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
      <div className='flex justify-end'>
        <Link
          type='button'
          className=' text-white bg-[#763996] hover:bg-[#9161ab]  font-medium rounded-2xl text-sm px-5 py-3 mb-2 my-3  '
          to='/students/create'>
          Tambah Data
        </Link>
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
            {students.map((student) => {
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
