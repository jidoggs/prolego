import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectedStudent from "../../common/component/cards/SelectedStudent";
import FilterIcon from "../../common/component/customIcons/FilterIcon";
import SearchIcon from "../../common/component/customIcons/SearchIcon";
import Table from "../../common/component/CustomTable";
import { fakeStudent } from "../../fakeData";

function MyStudent() {
  const navigate = useNavigate();
  //eslint-disable-next-line
  const [allStudent, setAllStudent] = useState(fakeStudent);
  const [searchinput, setSearchinput] = useState("");

  const [selectedStudent, setSelectedStudent] = useState({});

  const selectThisStudent = (data, id) => {
    navigate(`${id}`);
    // setSelectedStudent(data);
  };
  const unselectThisStudent = () => {
    setSelectedStudent({});
  };

  const isSelected = useMemo(
    () => Object.keys(selectedStudent).length > 0,
    [Object.keys(selectedStudent).length] //eslint-disable-line
  );

  return (
    <div
      className={`adminShell__body--content myStudent${
        isSelected ? "_selected" : ""
      }`}
    >
      <div className="table__controls" style={{ gridColumn: "2/-2" }}>
        <h2>Database</h2>

        <form action="">
          <label>
            <input
              type="text"
              value={searchinput}
              onChange={(e) => setSearchinput(e.target.value)}
              placeholder="Search"
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </label>
        </form>

        <div className="filterbox">
          <span>FILTER</span>
          <FilterIcon />
        </div>

        <select name="" id="">
          <option value="">All</option>
          <option value="">Predict</option>
          <option value="">Graduate</option>
          <option value="">Dropout</option>
        </select>
      </div>
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
