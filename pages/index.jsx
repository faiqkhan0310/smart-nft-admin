/*eslint-disable*/

import React, { useEffect } from "react";
import { useCurrentUser } from "@/hooks/index";
import LoginPage from "./login";
import router from "next/router";
import { useSelector } from "react-redux";

const IndexPage = () => {
  // const [user] = useCurrentUser();
  const state = useSelector((state) => state.admin);

  // useEffect(() => {
  //   if (state.isLogin === false) {
  //     router.push("/login");
  //   }
  // }, [state.isAuth]);

  return (
    <>
      {/* < LoginPage /> */}
      {/* <section className="pb-5 bg-light" >
        <div className="container pt-5">
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto mb-5">
              <div className="text-center">
                <h2 className="display-3 fw-bold mt-2 mb-4">
                  Bixmi-Admin portal Manage Items and Physical NFTs
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default IndexPage;
