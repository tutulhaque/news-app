import React, { Suspense } from "react";
import Categories from "../../pages/category/Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback="loading.."></Suspense>
      <Categories></Categories>
    </div>
  );
};

export default LeftAside;
