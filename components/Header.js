import React from "react";
import Link from "next/link";
import Overview from "../pages/overview";

function Header(props) {
  return (
    <div className="flex justify-between bg-emerald-500 text-gray-900 p-4 items-center font-semibold">
      <h1 className="text-4xl">Cookie Stand Admin</h1>
     {props.flags ? <Link href="/">
        <a className="px-4 py-2 font-bold text-black bg-white rounded hover:bg-green-300">
          Home
        </a>
      </Link> :  <Link href="/overview">
        <a className="px-4 py-2 font-bold text-black bg-white rounded hover:bg-green-300">
        Overview
        </a>
      </Link> } 
     
    </div>
  );
}

export default Header;
