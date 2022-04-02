import Class from "./RoleTable.module.css";

const tableData = [
  {
    id: 1,
    order: "R00010",
    role_name: "Relaunch the device",
  },
  {
    id: 2,
    order: "R00020",
    role_name: "Device remote support",
  },
];

const RoleTable = () => {
  return (
    <div className={`${Class.table__area} table-responsive rounded-3 border`}>
      <table className="table mb-0">
        <tbody>
          <tr className="table__bg fw-bold">
            <td className="text-center">
              Order <i className="fa-solid fa-caret-down"></i>
            </td>
            <td className="text-center">
              Role name <i className="fa-solid fa-caret-down"></i>
            </td>
          </tr>
          {tableData.map((item, i) => (
            <tr
              key={i}
              className={`${tableData.length === i + 1 ? "border-white" : ""}`}
            >
              <td className="text-center">{item.order}</td>

              <td className={`text-center`}>{item.role_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleTable;
