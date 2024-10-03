import DefaultLayout from "@/components/layout/DefaultLayout";
import LayoutCard from "@/components/ui/card/LayoutCard";
import React from "react";

const Card = () => {
  return (
    <div>
      <DefaultLayout
        title="My Card"
        description="Keep track your financial plan"
      >
        <LayoutCard />
      </DefaultLayout>
    </div>
  );
};

export default Card;
