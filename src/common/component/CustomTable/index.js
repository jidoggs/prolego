import React from "react";

function Table({ headers, data, rowClick, clearClick }) {


  return (
    <table className="table__display">
      <thead>
        <tr onClick={clearClick}>
          {headers?.map((itm) => {
            return <th key={itm.title}>{itm.title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, idx) => {
          return (
            <tr onClick={() => rowClick(row)} key={idx}>
              {headers?.map((col, id) => (
                <td key={id}>
                  {col.key === "name" ? (
                    <>
                      <div
                        style={{ backgroundImage: `url(${row?.img})` }}
                        className="avatar"
                      ></div>{" "}
                      <span>{row[col.key]}</span>{" "}
                    </>
                  ) : (
                    row[col.key]
                  )}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
