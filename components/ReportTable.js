import React from 'react'
import  hours  from '../data'


export default function ReportTable({ cookiesData,sumOfSums }) {

    return (
        <>
            <table className="mt-8">
                <thead className="w-2/3 border-emerald-500 text-center ">
                    <tr className="bg-emerald-500 border border-black text-center">
                        <th  className="px-20 border border-black "  >Location</th>
                        {hours.map(hour => <th className="px-2 border border-black">{hour}</th>)}
                        <th className="px-6 border border-black text-center">Totals</th>
                    </tr>
                </thead>
                <tbody>
                    {cookiesData.map(item =>
                        <tr key={item.id} className="odd:bg-emerald-500 even:bg-emerald-300">
                            <td className="px-2 border border-black ">{item.location}</td>
                            {item.hourly_sales.map(sale => <td className="px-2 border border-black text-center">{sale}</td>)}

                            <td className="px-2 border border-black text-center text-center">{item.hourly_sales.reduce( (sum, val)=> sum + val , 0)}</td>
                        </tr>
                    )}
                </tbody>
                <tfoot className="text-center bg-emerald-500">
                <tr className=" border-b border-black">
                        <th className="border border-black" >Totals</th>
                        {sumOfSums.map(sum => <th className="px-2 border border-black">{sum}</th>)}
                    </tr>

                </tfoot>
            </table>

        </>
    )
}