import { useState } from "react";

function StudentMarks(props) {
  const [marks, setMarks] = useState(50);

  const increaseMarks = () => {
    if (marks < 100) {
      setMarks(marks + 5);
    }
  };

  const decreaseMarks = () => {
    if (marks > 0) {
      setMarks(marks - 5);
    }
  };

  return (
    <div className="marks-card">
      <h2>Student Marks</h2>

      <p>
        <strong>Name:</strong> {props.name}
      </p>

      <p>
        <strong>Subject:</strong> {props.subject}
      </p>

      <p>
        <strong>Marks:</strong> {marks}
      </p>

      <button onClick={increaseMarks}>Increase Marks</button>

      <button onClick={decreaseMarks}>Decrease Marks</button>
    </div>
  );
}

export default StudentMarks;