import React, { useState } from "react";

const Form=(props)=> {
    return (
        <>
            <form className=" bg-emerald-300 mt-8 p-4 w-2/3 mx-auto items-center rounded-md"  onSubmit={props.cookiestand}>
                <h2 className="font-bold text-xl text-center pb-4">Create Cookie Stand</h2>
                <div className='flex mb-3'>
                    <label className="font-semibold mr-2">Location</label>
                    <input type="text" className="w-full flex-auto m-1" name="location" />
                </div>
                <div className='flex'>

                    <div className='flex w-full space-x-3'>
                        <div className='flex flex-col pr-4 '>
                            <label className="  font-semibold"  >Average Cookie per Sale</label>
                            <input type="number" className="" name="avg" />
                        </div>

                        <div className='flex flex-col pr-4'>
                            <label className=" font-semibold" >Minimum Customers per Hour</label>
                            <input type="number" className="" name="min" />
                        </div>

                        <div className='flex flex-col pr-4 '>
                            <label className="  font-semibold" >Maximum Customers per Hour</label>
                            <input type="number" name="max" />
                        </div>


                        <button className=" px-28 mx-30 py-2  bg-emerald-500  font-semibold text-gray-900">Create</button>

                    </div>

                </div>

            </form>
        </>
    )
}
export default Form;