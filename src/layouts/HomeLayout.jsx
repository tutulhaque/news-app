import React from "react";
import { Outlet } from "react-router";
import Header from "../components/common/Header";
import LatestNews from "../components/latestNews/LatestNews";
import Navbar from "../components/common/navbar/Navbar";
import LeftAside from "../components/Home/leftAside/LeftAside";
import RightAside from "../components/Home/rightAside/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
          <Navbar className="w-11/12 mx-auto my-3"></Navbar>
        </section>
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 mt-10 gap-2">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
