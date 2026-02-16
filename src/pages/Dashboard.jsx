import { useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import StudentModal from "../components/StudentModal";
import useLocalStorage from "../hooks/useLocalStorage";
import "../styles/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
  const [students, setStudents] = useLocalStorage("students", []);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const addStudent = (student) => {
    const newStudent = { ...student, id: Date.now() };
    setStudents((prev) => [...prev, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="container">
      <h1>Student Dashboard</h1>

      <StudentForm setStudent={addStudent} />

      <StudentList
        students={students}
        onDelete={deleteStudent}
        onSelect={setSelectedStudent}
      />

      {selectedStudent && (
        <StudentModal
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default Dashboard;
