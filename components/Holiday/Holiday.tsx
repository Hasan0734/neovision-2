import { useState } from "react";
import Calendar from "react-calendar";
import Card from "../Card/Card";
import Modals from "../Modal/Modal";
import ModalItems from "../ModalItems/ModalItems";
const Holiday = () => {
  const [typeActive, setTypeActive] = useState({ monthly: true, list: false });
  const [value, onChange] = useState(new Date());
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <Card>
      {typeActive.list && (
        <Modals isOpens={typeActive.list} setIsOpen={setTypeActive}>
          <ModalItems />
        </Modals>
      )}
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3 align-items-center">
          <h4>2022.03</h4>
          <ul className="border list-unstyled d-flex mb-0">
            <button className="p-2 border-end px-3 text-muted btn text-black btn-outline-light">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="p-2 border-end px-3 text-muted btn text-black btn-outline-light">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
            <button className="p-2 btn text-black btn-outline-light">
              Today
            </button>
          </ul>
        </div>
        <div className=" border d-flex align-items-center mb-0">
          <button
            onClick={() => setTypeActive({ monthly: true, list: false })}
            className={`${
              typeActive.monthly ? "text-white bg-primary" : "text-black"
            } p-2 border-end btn rounded-0 btn-outline-light`}
          >
            Monthly
          </button>
          <button
            onClick={() => setTypeActive({ monthly: false, list: true })}
            className={`${
              typeActive.list ? "text-white bg-primary" : "text-black"
            } p-2 px-4 border-end btn rounded-0 btn-outline-light`}
          >
            List
          </button>
        </div>
      </div>

      <div className="calender mt-4">
        <Calendar
          prevLabel={"Hello"}
          showNavigation={false}
          className={["w-100 border rounded-3"]}
          onChange={onChange}
          value={value}
        />
      </div>
    </Card>
  );
};

export default Holiday;
