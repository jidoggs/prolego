import React from "react";

function AllStudentStudentCard({
  studentSex,
  studentName,
  studentAge,
  studentStatus,
}) {
  return (
    <div className="student__card">
      <p className="student__card--title">{studentName}</p>
      <p className="student__card--sex">{studentSex}</p>
      <p className="student__card--age">{studentAge}</p>
      <p className="student__card--status">{studentStatus}</p>
    </div>
  );
}

export default AllStudentStudentCard;
