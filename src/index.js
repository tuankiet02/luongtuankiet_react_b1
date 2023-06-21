import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./BaiThucHanhComponent/Header";
import Footer from "./BaiThucHanhComponent/Footer";
import Banner from "./BaiThucHanhComponent/Banner";
import Items from "./BaiThucHanhComponent/Items";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <div className="row">
      <div className="col-12">
        <Banner />
      </div>
      <div>
        <Items />
      </div>
    </div>
    <Footer />
  </>
);
