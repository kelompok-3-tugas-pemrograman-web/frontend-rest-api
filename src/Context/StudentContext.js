/** @format */

import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

const StudentContext = createContext();

const initialForm = {
  npm: "",
  nama: "",
  kelas: "",
  jurusan: "",
  nohp: "",
};

export const StudentProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(initialForm);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const getStudents = async () => {
    const apiStudents = await axios.get("students");
    setStudents(apiStudents.data.data);
  };

  const getStudent = async (id) => {
    const response = await axios.get("students/" + id);
    const apiStudent = response.data.data;
    setStudent(apiStudent);
    setFormValues({
      npm: apiStudent.npm,
      nama: apiStudent.nama,
      kelas: apiStudent.kelas,
      jurusan: apiStudent.jurusan,
      nohp: apiStudent.nohp,
    });
  };

  const storeStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.post("students", formValues);
      setFormValues(initialForm);
      navigate("/students");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const updateStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.put("students/" + student.id, formValues);
      setFormValues(initialForm);
      navigate("/students");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deleteStudent = async (id) => {
    if (!window.confirm("Apakah Anda yakin untuk menghapusnya?")) {
      return;
    }
    await axios.delete("students/" + id);
    getStudents();
  };

  return (
    <StudentContext.Provider
      value={{
        student,
        students,
        getStudent,
        getStudents,
        onChange,
        formValues,
        storeStudent,
        setErrors,
        errors,
        updateStudent,
        deleteStudent,
      }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContext;
