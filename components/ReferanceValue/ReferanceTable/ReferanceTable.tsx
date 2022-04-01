import Class from "./ReferanceTable.module.css";

const tableData = [
  {
    id: 1,
    cord: "T01",
    name: "Schedule Classification",
    whether: "use",
  },
  {
    id: 2,
    cord: "T02",
    name: "Schedule Mapping Classification",
    whether: "not use",
  },
];

const ReferanceTable = () => {
  return (
    <div className={`${Class.table__area} table-responsive rounded-3 border`}>
      <table className="table  mb-0">
        <tbody>
          <tr className="table__bg">
            <td className="text-center">
              Cord set Code <i className="fa-solid fa-caret-down"></i>
            </td>
            <td className="text-center">
              Code set name <i className="fa-solid fa-caret-down"></i>
            </td>

            <td className="text-center">
              Whether or not to use <i className="fa-solid fa-caret-down"></i>
            </td>
          </tr>
          {tableData.map((item, i) => (
            <tr key={i}>
              <td className="text-center">{item.cord}</td>
              <td className="text-center">{item.name}</td>
              <td className="text-center">{item.whether}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReferanceTable;
