import React from "react";

const ModalItems = () => {
  return (
    <div className="p-3">
      <form className="">
        <div className="d-flex mb-3">
          <label className="w-25" htmlFor="title">
            Title <span className="text-danger">*</span>
          </label>
          <input
            className="border m-0 w-75 rounded-3 p-2"
            id="title"
            type="text"
            placeholder="Please Enter a title"
          />
        </div>
        <div className="d-flex mb-3">
          <label className="w-25" htmlFor="title">
            Start Date <span className="text-danger">*</span>
          </label>
          <div className="d-flex w-75 align-items-center">
            <input
              className="border m-0 w-100  rounded-3 p-2"
              id="title"
              type="date"
              placeholder="Please Enter a title"
            />{" "}
            ~
            <input className="border m-0 w-100  rounded-3 p-2" type="date" />
          </div>
        </div>
        <div className="d-flex mb-3">
          <label className="w-25" htmlFor="title">
            Classfication of holidays <span className="text-danger">*</span>
          </label>
          <select className="border m-0 w-75  rounded-3 p-2">
            <option value="selection!">Selection!</option>
            <option value="selection!">Selection!</option>
            <option value="selection!">Selection!</option>
          </select>
        </div>

        <div className="d-flex align-items-center mb-3">
          <label className="w-25 fs-6">Explanation</label>
          <textarea
            rows={6}
            className="border m-0 w-75 rounded-3 p-2 resize__none"
            placeholder="Please enter your content"
          ></textarea>
        </div>
        <div className="d-flex justify-content-end gap-3">
          <button className="btn border px-3 py-1 rounded-pill">Cancel</button>
          <button
            type="submit"
            className="btn btn-primary px-3 py-1 rounded-pill"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalItems;
