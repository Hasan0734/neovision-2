import type { NextPage } from "next";
import { useState } from "react";
import CodeDetail from "../components/CodeSet/CodeSetDetail2/CodeDetail/CodeDetail";
import CodeSetDetail2 from "../components/CodeSet/CodeSetDetail2/CodeSetDetail2";
import CodeSetList2 from "../components/CodeSet/CodeSetDetail2/CodeSetList2/CodeSetList2";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  const [cardDetail, setCardDetail] = useState({ status: true, title: true });
  const [tabActive, setTabActive] = useState({
    list: true,
    cardType: false,
    view: false,
  });
  return (
    <Layout
      tabActive={tabActive}
      navData={{ filter: false, title: "Code Management" }}
    >
      <div className="all__pages">
        <div className="row">
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <CodeSetList2 />
          </div>
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            {/* <CodeSetDetail>
              <SetDetail />
            </CodeSetDetail> */}
            <CodeSetDetail2>
              <CodeDetail />
            </CodeSetDetail2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
