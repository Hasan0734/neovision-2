import type { NextPage } from "next";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import RoleDetail from "../components/Role/RoleManage/RoleDetail/RoleDetail";
import RoleDetails from "../components/Role/RoleManage/RoleDetails";
import RoleList from "../components/Role/RoleManage/RoleList/RoleList";

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
      navData={{ filter: false, title: "Role Management" }}
    >
      <div className="all__pages">
        <div className="row">
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <RoleList />
          </div>
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <RoleDetails>
              <RoleDetail />
            </RoleDetails>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
