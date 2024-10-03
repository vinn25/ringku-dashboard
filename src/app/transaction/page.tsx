import DefaultLayout from "@/components/layout/DefaultLayout";
import LayoutTransaction from "@/components/ui/transaction/LayoutTransaction";
import React from "react";

const Transaction = () => {
  return (
    <div>
      <DefaultLayout title="Recent Transaction" search>
        <LayoutTransaction />
      </DefaultLayout>
    </div>
  );
};

export default Transaction;
