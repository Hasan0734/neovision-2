import Card from "../../../Card/Card";
import Pagination from "../../Pagination/Pagination";
import TableFilter from "../../TableFilter/TableFilter";
import CodeSetTable2 from "../CodeSetTable2/CodeSetTable2";

const CodeSetList2 = (props: any) => {
  return (
    <Card>
      <TableFilter />
      {/* <CodeSetTable /> */}
      <CodeSetTable2 />
      <p className="text-end">Searched: 2</p>
      <Pagination />
    </Card>
  );
};

export default CodeSetList2;
