import React from "react";
import { Link } from "react-router-dom";
import AllStudentStudentCard from "./AllStudentStudentCard";

function StudentGradesCard() {
  const mockRes = [
    {
      name: "Daniel Regna",
      grade: "25",
    },
    {
      name: "Grace Obasi",
      grade: "35",
    },
    {
      name: "Ose Prudence",
      grade: "45",
    },
    {
      name: "Johnson Dotun",
      grade: "50",
    },
  ];

  return (
    <section className="dashboard__cards allStudent">
      <div className="title__container">
        <h3 className="title__container-title">Students</h3>
        <Link to={"/admin/my_student"}>View All</Link>
        <div className="sortResult">
          Sort by:
          <select defaultValue={"grade: low to high"}>
            <option>grade: low to high</option>
            <option>grade: high</option>
            <option>grade: low </option>
          </select>
        </div>
      </div>
      <div className="allStudent__wrapper">
        {mockRes.map((stu) => (
          <AllStudentStudentCard
            key={stu.name}
            studentName={stu.name}
            studentGrade={stu.grade}
          />
        ))}
      </div>
    </section>
  );
}

export default StudentGradesCard;
