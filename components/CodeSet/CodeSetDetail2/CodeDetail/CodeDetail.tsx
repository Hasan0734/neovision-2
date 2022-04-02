const CodeDetail = (props: any) => {
  return (
    <div className="card__p">
      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">
          Code <span className="text-danger">*</span>
        </h5>
        <input className="border m-0 w-75 rounded-3 p-2" defaultValue={500} />
      </div>
      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">
          Code Name <span className="text-danger">*</span>
        </h5>
        <input className="border m-0 w-75 rounded-3 p-2" defaultValue={500} />
      </div>
      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">Additional code</h5>
        <input className="border m-0 w-75 rounded-3 p-2" defaultValue="20" />
      </div>
      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">Additional code name</h5>
        <input
          className="border m-0 w-75 rounded-3 p-3"
          defaultValue="additional code"
        />
      </div>
      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">Whether or not to use</h5>
        <select className="border m-0 w-75 rounded-3 p-2">
          <option defaultValue="use">use</option>
          <option value="unuse">not use</option>
        </select>
      </div>
      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">Order</h5>
        <select className="border m-0 w-75 rounded-3 p-2">
          <option defaultValue="use">use</option>
          <option value="unuse">not use</option>
        </select>
      </div>

      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">Explanation</h5>
        <textarea
          rows={4}
          className="border m-0 w-75 rounded-3 p-2 resize__none"
        >
          Recognized defaultValue of hours after work from the base date of work
          (unit: minutes)
        </textarea>
      </div>
      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">Registrant</h5>
        <input
          className="border m-0 w-75 rounded-3 p-2"
          defaultValue={"Kim registration"}
        />
      </div>

      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">Registration date</h5>
        <input
          className="border m-0 w-75 rounded-3 p-2"
          defaultValue={"2022-01-27 09:00"}
        />
      </div>
      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">Modifier</h5>
        <input
          className="border m-0 w-75 rounded-3 p-2"
          defaultValue="Kim registration"
        />
      </div>
      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">Date of Modify</h5>
        <input
          className="border m-0 w-75 rounded-3 p-2"
          defaultValue={"2022-01-27 09:00"}
        />
      </div>
    </div>
  );
};

export default CodeDetail;
