const RoleDetail2 = () => {
  return (
    <div className="card__p">
      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">
          Division <span className="text-danger">*</span>
        </h5>
        <select className="border m-0 w-75 rounded-3 p-2">
          <option value="manager">manager</option>
          <option value="manager">Group</option>
        </select>
      </div>
      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">
          Manager <span className="text-danger">*</span>
        </h5>
        <select className="border m-0 w-75 rounded-3 p-2">
          <option value="manager">Home Gil-dong</option>
          <option value="manager">Content Management Team</option>
        </select>
      </div>
      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">Other Attributes</h5>
        <input
          className="border m-0 w-75 rounded-3 p-2"
          defaultValue={"other attributes"}
        />
      </div>
      <div className="d-flex align-items-center mb-3">
        <h5 className="w-25 fs-6">Other Attributes 1</h5>
        <input
          className="border m-0 w-75 rounded-3 p-2"
          defaultValue={"other attributes 1"}
        />
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
          defaultValue="Kim Soo-jung"
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

export default RoleDetail2;
