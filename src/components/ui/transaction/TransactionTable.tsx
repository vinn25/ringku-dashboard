import React from "react";

const headerTable = ["Transactions ID", "Name", "Date", "Status", "Amount"];

const dataTable = [
  {
    tr_id: "962296152",
    name: "Sherman Blankenship",
    date: "08 Jan, 2022",
    status: "Pending",
    amount: "$217.90",
  },
  {
    tr_id: "829892537",
    name: "Claudio Barrera",
    date: "06 Jan, 2022",
    status: "Completed",
    amount: "$329.90",
  },
  {
    tr_id: "197401837",
    name: "Rodger Fritz",
    date: "24 Dec, 2021",
    status: "Completed",
    amount: "$237.90",
  },
];

const TransactionTable = () => {
  return (
    <div className="rounded-lg mb-8">
      <table className="h-fit w-full border-collapse">
        <thead className="bg-neutral-20 border-b-2 border-neutral-40">
          <tr className="grid grid-cols-5 px-8">
            {headerTable.map((data) => (
              <th key={data} className="flex items-start p-4 pl-0">
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataTable.map((data) => (
            <tr
              key={data.tr_id}
              className="cursor-pointer grid grid-cols-5 px-8 hover:bg-neutral-30"
            >
              <td className="px-4 py-5 pl-0">{data.tr_id}</td>
              <td className="px-4 py-5 pl-0">{data.name}</td>
              <td className="px-4 py-5 pl-0">{data.date}</td>
              <td className="px-4 py-5 pl-0">{data.status}</td>
              <td className="px-4 py-5 pl-0">{data.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
