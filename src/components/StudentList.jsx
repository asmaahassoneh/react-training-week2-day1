function StudentList({ students, onDelete, onSelect }) {
  if (students.length === 0) {
    return <p className="empty-message">No students registered yet.</p>;
  }

  return (
    <div className="list">
      {students.map((student) => (
        <div key={student.id} className="card">
          <h3>{student.name}</h3>
          <p>{student.major}</p>

          <div className="buttons">
            <button onClick={() => onSelect(student)}>View</button>
            <button onClick={() => onDelete(student.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
