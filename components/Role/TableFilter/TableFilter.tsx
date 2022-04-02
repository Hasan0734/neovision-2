import Class from "./TableFilter.module.css";
const TableFilter = () => {
  return (
    <form
      className=" d-flex justify-content-between align-items-center mb-4"
      style={{ fontSize: "13px" }}
    >
      <div className="d-flex gap-1 align-items-center">
        <label>Whether</label>
        <select className="rounded-pill p-1 border">
          <option value="all">all</option>
          <option value="month">month</option>
        </select>
      </div>
      <div className="d-flex gap-1 align-items-center">
        <label>Code name</label>
        <input
          className="rounded-pill p-1 border"
          type="text"
          placeholder="Enter"
        />
      </div>
      <div className="d-flex gap-1 align-items-center">
        <label>Cord code </label>
        <input
          className="rounded-pill border p-1"
          type="text"
          placeholder="Please enter the code"
        />
      </div>
      <button className={Class.reset__btn}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <button className={Class.reset__btn} type="reset">
        <i className="fa-solid fa-rotate-right"></i>
      </button>
    </form>
  );
};

export default TableFilter;
