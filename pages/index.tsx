import type { NextPage } from "next";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import ReferanceDetails from "../components/ReferanceValue/ReferanceDetails/ReferanceDetails";
import ReferanceList from "../components/ReferanceValue/ReferanceList/ReferanceList";

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
            <ReferanceList />
          </div>
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            {/* <EventDetail/> */}
            <ReferanceDetails />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
