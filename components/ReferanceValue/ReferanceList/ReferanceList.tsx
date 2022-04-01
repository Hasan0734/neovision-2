import Card from "../../Card/Card";
import ReferanceTable from "../ReferanceTable/ReferanceTable";
import Class from "./ReferanceList.module.css";

const ReferanceList = (props: any) => {
  return (
    <Card>
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

      <ReferanceTable />

      <p className="text-end">Searched: 2</p>
      <div className="d-flex justify-content-center">
        <ul className={`${Class.pagination} list-unstyled d-flex gap-3`}>
          <li>
            <a className="" href="">
              <i className="fa-solid fa-angles-left"></i>
            </a>
          </li>
          <li>
            <a className="" href="">
              <i className="fa-solid fa-angle-left"></i>
            </a>
          </li>
          <li>
            <a className="" href="">
              1
            </a>
          </li>
          <li>
            <a className="" href="">
              2
            </a>
          </li>
          <li>
            <a className="" href="">
              3
            </a>
          </li>
          <li>
            <a className="" href="">
              4
            </a>
          </li>
          <li>
            <a className="" href="">
              5
            </a>
          </li>
          <li>
            <a className="" href="">
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
          <li>
            <a className="" href="">
              <i className="fa-solid fa-angles-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default ReferanceList;
