import Card from "../../../Card/Card";
import Pagination from "../../Pagination/Pagination";
import RoleTable from "../RoleTable/RoleTable";

const RoleList = (props: any) => {
  return (
    <Card>
      {/* <TableFilter /> */}
      <RoleTable />
      <p className="text-end">Searched: 2</p>
      <Pagination />
    </Card>
  );
};

export default RoleList;
