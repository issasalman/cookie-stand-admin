import React, { useState } from "react";

const Form=(props)=> {
    return (
        <>
            <form className=" bg-emerald-300 mt-8 p-4 w-5/6 mx-auto items-center rounded-md"  onSubmit={props.cookiestand}>
                <label className="font-semibold pl-96 mr-2">ADD LOCATION</label>

                <div className='flex mb-3 '>
                    <input type="text" placeholder="Cookie Stand Location" className=" w-2/3 mx-10" name="location" />
                    <button className=" px-28 mx-30 py-2  bg-emerald-500 rounded-md font-semibold text-gray-900">Create Stand</button>
                </div>
                <div className='flex'>

                    <div className='flex space-x-32 '>
                       

                        <div className='flex flex-col  w-full  mx-10 '>
                            <label className=" font-semibold  pl-10" >Minimum Customers per Hour</label>
                            <input type="number" defaultValue ='0' className="  px-14 py-1" name="min" />
                        </div>

                        <div className='flex flex-col  w-full mx-10'>
                            <label className="  font-semibold  pl-10" >Maximum Customers per Hour</label>
                            <input type="number" defaultValue ='0' name="max" className=" px-14 py-1" />
                        </div>
                        <div className='flex flex-col  w-full mx-10'>
                            <label className="  font-semibold  pl-10"  >Average Cookie per Sale</label>
                            <input type="number" defaultValue ='0' className=" px-14 py-1" name="avg" />
                        </div>

                   

                    </div>

                </div>

            </form>
        </>
    )
}
export default Form;