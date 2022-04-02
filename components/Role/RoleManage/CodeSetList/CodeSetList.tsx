import Card from "../../../Card/Card";
import Pagination from "../../Pagination/Pagination";
import TableFilter from "../../TableFilter/TableFilter";
import CodeSetTable from "../RoleTable/RoleTable";

const CodeSetList = (props: any) => {
  return (
    <Card>
      <TableFilter />
      <CodeSetTable />
      <p className="text-end">Searched: 2</p>
      <Pagination />
    </Card>
  );
};

export default CodeSetList;
