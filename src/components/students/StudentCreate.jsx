/** @format */

import { useContext } from "react";
import { Link } from "react-router-dom";
import StudentContext from "../../Context/StudentContext";

export const StudentCreate = () => {
  const { formValues, onChange, storeStudent, errors } =
    useContext(StudentContext);
  return (
    <div className='mt-12'>
      <form
        onSubmit={storeStudent}
        className='max-w-md p-4 mx-auto bg-white shadow-md rounded-xl '>
        <h1 className='flex justify-center py-4 text-xl font-semibold'>
          Tambah Data Mahasiswa
        </h1>
        <div className='space-y-6'>
          <div className='mb-4'>
            <label htmlFor='npm' className='block mb-2 text-sm font-medium'>
              NPM
            </label>
            <input
              name='npm'
              value={formValues["npm"]}
              onChange={onChange}
              className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md'
            />
            {errors.npm && (
              <span className='text-sm text-red-400'>{errors.npm[0]}</span>
            )}
          </div>
          <div className='mb-4'>
            <label htmlFor='nama' className='block mb-2 text-sm font-medium'>
              Nama
            </label>
            <input
              name='nama'
              value={formValues["nama"]}
              onChange={onChange}
              className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md'
            />
            {errors.nama && (
              <span className='text-sm text-red-400'>{errors.nama[0]}</span>
            )}
          </div>
          <div className='mb-4'>
            <label htmlFor='kelas' className='block mb-2 text-sm font-medium'>
              Kelas
            </label>
            <input
              name='kelas'
              value={formValues["kelas"]}
              onChange={onChange}
              className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md'
            />
            {errors.kelas && (
              <span className='text-sm text-red-400'>{errors.kelas[0]}</span>
            )}
          </div>
          <div className='mb-4'>
            <label htmlFor='jurusan' className='block mb-2 text-sm font-medium'>
              Jurusan
            </label>
            <input
              name='jurusan'
              value={formValues["jurusan"]}
              onChange={onChange}
              className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md'
            />
            {errors.jurusan && (
              <span className='text-sm text-red-400'>{errors.jurusan[0]}</span>
            )}
          </div>
          <div className='mb-4'>
            <label htmlFor='nohp' className='block mb-2 text-sm font-medium'>
              Nomor Telepon
            </label>
            <input
              name='nohp'
              value={formValues["nohp"]}
              onChange={onChange}
              className='block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-md'
            />
            {errors.nohp && (
              <span className='text-sm text-red-400'>{errors.nohp[0]}</span>
            )}
          </div>

          <div className='flex flex-row justify-between'>
            <div className='my-4 '>
              <Link
                role='button'
                className='px-4 py-2 text-[#763996] '
                to='/students'>
                Batal
              </Link>
            </div>
            <div className='my-4 '>
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
