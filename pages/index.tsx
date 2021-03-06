import type { NextPage } from "next";
import { useState } from "react";
import CodeSetDetail from "../components/CodeSet/CodeSetDetail/CodeSetDetail";
import CodeSetList from "../components/CodeSet/CodeSetDetail/CodeSetList/CodeSetList";
import SetDetail from "../components/CodeSet/CodeSetDetail/SetDetail/SetDetail";
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
            <CodeSetList />
          </div>
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <CodeSetDetail>
              <SetDetail />
            </CodeSetDetail>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
