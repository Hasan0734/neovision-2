import Card from "../../../Card/Card";
import Pagination from "../../Pagination/Pagination";
import RoleTable from "../RoleTable2/RoleTable2";

const RoleList2 = (props: any) => {
  return (
    <Card>
      {/* <TableFilter /> */}
      <RoleTable />
      <p className="text-end">Searched: 2</p>
      <Pagination />
    </Card>
  );
};

export default RoleList2;
