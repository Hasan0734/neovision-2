import Class from "./Pagination.module.css";

const Pagination = () => {
  return (
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
          <a className="text-primary" href="">
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
  );
};

export default Pagination;
