const SetDetail = () => {
  return (
    <div className="card__p">
      <div className="d-flex mb-3">
        <h5 className="w-25">Cord Set code</h5>
        <input
          className="border m-0 w-75 rounded-3 p-2"
          readOnly
          type="text"
          value="T01"
        />
      </div>
      <div className="d-flex mb-3">
        <h5 className="w-25">Code Set name</h5>
        <input
          className="border m-0 w-75 rounded-3 p-2"
          readOnly
          type="text"
          value="500"
        />
      </div>
      <div className="d-flex mb-3">
        <h5 className="w-25">Whether</h5>

        <select className="border m-0 w-75 rounded-3 p-2">
          <option selected value="use">
            use
          </option>
          <option value="unuse">unuse</option>
        </select>
      </div>
      <div className="d-flex mb-3">
        <h5 className="w-25">Registrant</h5>
        <input
          className="border m-0 w-75 rounded-3 p-2"
          readOnly
          type="text"
          value="Kim registraion"
        />
      </div>
      <div className="d-flex mb-3">
        <h5 className="w-25">Registration Date</h5>
        <input
          className="border m-0 w-75 rounded-3 p-2"
          readOnly
          type="text"
          value="2022-01-27 09:00"
        />
      </div>
      <div className="d-flex mb-3">
        <h5 className="w-25">Modifier</h5>
        <input
          className="border m-0 w-75 rounded-3 p-2"
          readOnly
          type="text"
          value="Kim Soo-jung"
        />
      </div>
      <div className="d-flex mb-3">
        <h5 className="w-25">Date fo Modify</h5>
        <input
          className="border m-0 w-75 rounded-3 p-2"
          readOnly
          type="text"
          value="2022-01-27 09:00"
        />
      </div>
    </div>
  );
};

export default SetDetail;
