import Class from "./RoleTable2.module.css";

const tableData = [
  {
    id: 1,
    division: "manager",
    manager: "Home Gil-dong",
  },
  {
    id: 1,
    division: "Group",
    manager: "Content Management Team",
  },
];

const RoleTable2 = () => {
  return (
    <div className={`${Class.table__area} table-responsive rounded-3 border`}>
      <table className="table mb-0">
        <tbody>
          <tr className="table__bg fw-bold">
            <td className="text-center">
              NO <i className="fa-solid fa-caret-down"></i>
            </td>
            <td className="text-center">
              Division <i className="fa-solid fa-caret-down"></i>
            </td>
            <td className="text-center">
              Manager <i className="fa-solid fa-caret-down"></i>
            </td>
          </tr>
          {tableData.map((item, i) => (
            <tr
              key={i}
              className={`${tableData.length === i + 1 ? "border-white" : ""}`}
            >
              <td className="text-center">{item.id}</td>
              <td className="text-center">{item.division}</td>

              <td className={`text-center`}>{item.manager}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleTable2;
