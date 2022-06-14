import React from "react";
import ArrowRightIcon from "../customIcons/ArrowRightIcon";

function AllStudentStudentCard({ img, studentName, studentGrade, onClick }) {
  return (
    <div className="student__card">
      <div
        style={{ backgroundImage: `url(${img})` }}
        role="img"
        aria-roledescription="student mug shot"
        className="student__card--img"
      ></div>
      <p className="student__card--title">{studentName}</p>
      <p className="student__card--grade">{studentGrade}%</p>
      <button onClick={onClick} className="student__card--btn">
        <ArrowRightIcon />
      </button>
    </div>
  );
}

export default AllStudentStudentCard;
