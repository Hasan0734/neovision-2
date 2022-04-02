import Class from "./CodeSetTable2.module.css";

const tableData = [
  {
    id: 1,
    order: 1,
    code: 10,
    code_name: "basic",
    whether: "use",
  },
  {
    id: 1,
    order: 1,
    code: 10,
    code_name: "basic",
    whether: "not use",
  },
];

const CodeSetTable2 = () => {
  return (
    <div className={`${Class.table__area} table-responsive rounded-3 border`}>
      <table className="table mb-0">
        <tbody>
          <tr className="table__bg fw-bold">
            <td className="text-center">
              Order <i className="fa-solid fa-caret-down"></i>
            </td>
            <td className="text-center">
              Code <i className="fa-solid fa-caret-down"></i>
            </td>

            <td className="text-center">
              Code Name <i className="fa-solid fa-caret-down"></i>
            </td>
            <td className="text-center">
              Whether <i className="fa-solid fa-caret-down"></i>
            </td>
          </tr>
          {tableData.map((item, i) => (
            <tr
              key={i}
              className={`${tableData.length === i + 1 ? "border-white" : ""}`}
            >
              <td className="text-center">{item.order}</td>
              <td className="text-center">{item.code}</td>
              <td className="text-center">{item.code_name}</td>
              <td
                className={`${
                  tableData.length === i + 1 ? "text-danger" : ""
                } text-center`}
              >
                {item.whether}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CodeSetTable2;
