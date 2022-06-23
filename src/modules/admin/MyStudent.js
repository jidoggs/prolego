import React, { useMemo, useState } from "react";
import SelectedStudent from "../../common/component/cards/SelectedStudent";
import Table from "../../common/component/CustomTable";
import { fakeStudent } from "../../fakeData";

function MyStudent() {
  //eslint-disable-next-line
  const [allStudent, setAllStudent] = useState(fakeStudent);

  const [selectedStudent, setSelectedStudent] = useState({});

  const selectThisStudent = (data) => {
    setSelectedStudent(data);
  };
  const unselectThisStudent = () => {
    setSelectedStudent({});
  };

  const isSelected = useMemo(
    () => Object.keys(selectedStudent).length > 0,
    [Object.keys(selectedStudent).length] //eslint-disable-line
  );

  return (
    <div className={`adminShell__body--content myStudent${isSelected ? "_selected" : ""}`}>
      <div className="myStudentTable">
      <Table
        headers={fakeStudent.columns}
        data={allStudent.data}
        clearClick={unselectThisStudent}
        rowClick={selectThisStudent}
      />

      </div>
      {isSelected && <SelectedStudent data={selectedStudent} />}
    </div>
  );
}

export default MyStudent;
