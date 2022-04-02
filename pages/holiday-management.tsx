import type { NextPage } from "next";
import { useState } from "react";
import Holiday from "../components/Holiday/Holiday";
import Layout from "../components/Layout/Layout";
const Home: NextPage = () => {
  const [cardDetail, setCardDetail] = useState({ status: true, title: true });
  const [tabActive, setTabActive] = useState({
    list: true,
    cardType: false,
    view: false,
  });
  const [value, onChange] = useState(new Date());
  return (
    <Layout
      tabActive={tabActive}
      navData={{ filter: false, title: "Holiday Management" }}
    >
      <div className="all__pages">
        <div className="row">
          <div className="col-12">
            <Holiday />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
