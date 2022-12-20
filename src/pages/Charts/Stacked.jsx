import React from "react";
import { Header, Stacked as StackChart } from "../../components";
const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl;">
      <Header category="Chart" title="Stacked" />
      <StackChart  />
    </div>
  );
};

export default Stacked;
