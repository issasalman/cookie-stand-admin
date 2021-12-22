import React from "react";
import hours from "../data";

export default function ReportTable({ cookiesData, sumOfSums, deleteHandler }) {
  return (
    <>
      <table className="mt-8">
        <thead className="w-2/3 border-emerald-500 text-center ">
          <tr className="bg-emerald-500 border border-black text-center">
            <th className="px-20 border border-black ">Location</th>
            {hours.map((hour) => (
              <th className="px-2 border border-black">{hour}</th>
            ))}
            <th className="px-6 border border-black text-center">Totals</th>
          </tr>
        </thead>
        <tbody>
          {cookiesData.map((item) => (
            <tr
              key={item.id}
              className="odd:bg-emerald-500 even:bg-emerald-300"
            >
              <td className="px-2 border border-black ">
                {item.location}{" "}
                <button
                  onClick={() => {
                    deleteHandler(item.id);
                  }}
                  className=" mr-2  text-red-400 float-right"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                </button>
              </td>
              {item.hourly_sales.map((sale) => (
                <td className="px-2 border border-black text-center">{sale}</td>
              ))}

              <td className="px-2 border border-black text-center text-center">
                {item.hourly_sales.reduce((sum, val) => sum + val, 0)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="text-center bg-emerald-500">
          <tr className=" border-b border-black">
            <th className="border border-black">Totals</th>
            {sumOfSums.map((sum) => (
              <th className="px-2 border border-black">{sum}</th>
            ))}
          </tr>
        </tfoot>
      </table>
    </>
  );
}
