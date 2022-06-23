import React from "react";
import CustomButton from "../CustomButton/CustomButton";

function CourseAttendanceCard() {
  return (
    <div className="courseAttendanceCard__selected">
      <div className="courseAttendanceCard__wrap">
        <div className="courseAttendanceCard__imageWrapper">
          <img src="https://i.pravatar.cc/150?img=28" alt="lecturer1" />
          {/* <img src="https://i.pravatar.cc/150?img=28" alt="lecturer2" /> */}
        </div>
        <div className="courseAttendanceCard__info">
          <h3 className="courseAttendanceCard__info--title">CIT412</h3>
          <p className="courseAttendanceCard__info--body">201 Students</p>
        </div>
      </div>
      <div className="courseAttendanceCard__stats">
        <div className="courseAttendanceCard__stats--cards">
          <p className="percentage">89%</p>
          <p>Monthly</p>
        </div>
        <div className="courseAttendanceCard__stats--cards">
          <p className="percentage">91%</p>
          <p>Weekly</p>
        </div>
      </div>
      <CustomButton
        actionName="Course Details"
        type="button"
        variant="OUTLINE"
      />
    </div>
  );
}

export default CourseAttendanceCard;
