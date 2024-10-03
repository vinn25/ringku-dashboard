"use client";

import ButtonDefault from "@/components/Button/ButtonDefault";
import Pagination from "@/components/Pagination";
import TransactionTable from "@/components/ui/transaction/TransactionTable";
import React from "react";

const LayoutTransaction = () => {
  return (
    <div className="container min-h-screen max-h-full">
      <div className="min-h-[60px] w-full max-w-full">
        <TransactionTable />
        <div>
          <ButtonDefault
            size="sm"
            text="Download the Excel File"
            variant="violet"
          />
        </div>
      </div>
      <div className="fixed bottom-0 z-999 py-[14px] bg-neutral-20">
        <Pagination />
      </div>
    </div>
  );
};

export default LayoutTransaction;
