import React from "react";

function SelectedStudent({ data }) {
  const { name, level, age, sex, dob, img } = data;
  return (
    <div className="selectedStudent">
      <div className="selectedStudent__head">
        <div style={{backgroundImage:`url(${img})`}} className="selectedStudent__head-img"></div>
        <div className="selectedStudent__head-info">
          <h3>{name}</h3>
          <p>{level}</p>
        </div>
      </div>
      <div className="selectedStudent__body">
        <div className="selectedStudent__body-card">
          Age<span>{age}</span>
        </div>
        <div className="selectedStudent__body-card">
          Gender<span>{sex}</span>
        </div>
        <div className="selectedStudent__body-card">
          Date of Birth<span>{dob}</span>
        </div>
      </div>
    </div>
  );
}

export default SelectedStudent;
