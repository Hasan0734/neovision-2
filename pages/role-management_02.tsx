import type { NextPage } from "next";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import RoleDetail2 from "../components/Role/RoleManage2/RoleDetail2/RoleDetail2";
import RoleDetails2 from "../components/Role/RoleManage2/RoleDetails2";
import RoleList2 from "../components/Role/RoleManage2/RoleList2/RoleList2";

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
            <RoleList2 />
          </div>
          <div className="col-lg-6 col-12 mb-3 mb-lg-0">
            <RoleDetails2>
              <RoleDetail2 />
            </RoleDetails2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
