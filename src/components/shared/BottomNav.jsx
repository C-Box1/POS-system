import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";

const BottomNav = () => {
  return (
	<div className="fixed bottom-0 left-0 right-0 h-16 bg-[#262626] p-2 flex justify-around">

		<button className="text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]"><FaHome className='inline mr-2 size={20}'/><p>Home</p></button>

		<button className="text-[#f5f5f5] w-[200px]"><MdOutlineReorder className='inline mr-2 size={20}'/><p>Orders</p></button>

		<button className="text-[#f5f5f5] w-[200px]"><MdTableBar className='inline mr-2 size={20}'/><p>Tables</p></button>
		
		<button className="text-[#f5f5f5] w-[200px]"><CiCircleMore className='inline mr-2 size={20}'/><p>More</p></button>

	</div>
	);
};

export default BottomNav;