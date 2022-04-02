import CardTwo from "../../CardTwo/CardTwo";

const CodeSetDetail = (props: any) => {
  const children: any = props.children;
  return (
    <CardTwo>
      <div className="card__p">
        <div className="d-flex justify-content-between">
          <h3>Codeset Details</h3>
          <div className="d-flex gap-3">
            <button className="btn btn-outline-primary rounded-pill px-4">
              New Registration
            </button>
            <button className="btn btn-primary rounded-pill py-1 px-4">
              Correction
            </button>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </CardTwo>
  );
};

export default CodeSetDetail;
