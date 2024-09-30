import DefaultLayout from "@/components/layout/DefaultLayout";
import LayoutChart from "@/components/ui/chart/LayoutChart";
import React from "react";

const Chart = () => {
  return (
    <div>
      <DefaultLayout
        title="Financial Chart"
        description="Keep track your financial plan"
      >
        <LayoutChart />
      </DefaultLayout>
    </div>
  );
};

export default Chart;
