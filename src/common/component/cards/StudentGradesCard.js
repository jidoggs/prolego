import React from "react";
import { Link } from "react-router-dom";
import AllStudentStudentCard from "./AllStudentStudentCard";

function StudentGradesCard() {
  const mockRes = [
    {
      name: "Daniel Regna",
      age: "25",
      sex: "M",
      status: "Graduate",
    },
    {
      name: "Grace Obasi",
      age: "35",
      sex: "M",
      status: "Graduate",
    },
    {
      name: "Ose Prudence",
      age: "45",
      sex: "M",
      status: "Graduate",
    },
    {
      name: "Johnson Dotun",
      age: "50",
      sex: "M",
      status: "Graduate",
    },
    {
      name: "Johnson Dotun",
      age: "50",
      sex: "M",
      status: "Graduate",
    },
    {
      name: "Johnson Dotun",
      age: "50",
      sex: "M",
      status: "Graduate",
    },
    {
      name: "Johnson Dotun",
      age: "50",
      sex: "M",
      status: "Graduate",
    },
  ];

  return (
    <section className="dashboard__cards allStudent">
      <div className="title__container">
        <h3 className="title__container-title">Students</h3>
        <div className="sortResult">
          Sort by:
          <select defaultValue={"Graduate"}>
            <option>Graduate</option>
            <option>grade: high</option>
            <option>grade: low </option>
          </select>
        </div>
      </div>
      <div className="allStudent__wrapper">
        {mockRes.map((stu, id) => (
          <AllStudentStudentCard
            key={id}
            studentName={stu.name}
            studentAge={stu.age}
            studentSex={stu.sex}
            studentStatus={stu.status}
          />
        ))}
      </div>
    </section>
  );
}

export default StudentGradesCard;
