import {   FaRegUser, FaRegFileAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { PiScroll } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { MdOutlineHomeRepairService } from "react-icons/md";
export default function NavBar() {
  return (
    <nav className="w-full bg-white  flex items-center justify-evenly px-6 py-2">
      {/* Menu Items */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 bg-secondary-bg rounded-md px-3 py-2 cursor-pointer">
          <GoHomeFill className="w-6 h-6  text-secondary" />
          <span className="font-semibold text-sm">Dashboard</span>
        </div>

        <div className="flex items-center space-x-5  text-text cursor-pointer ">
          <MdOutlineHomeRepairService className="w-6 h-6" />
          <span className="text-sm">Listings</span>
        </div>

        <div className="flex items-center space-x-5 text-text cursor-pointer ">
          <FaRegUser className="w-6 h-6" />
          <span className="text-sm">Users</span>
        </div>

        <div className="flex items-center space-x-5 text-text cursor-pointer ">
          <FaRegFileAlt className="w-6 h-6" />
          <span className="text-sm">Request</span>
        </div>

        <div className="flex items-center space-x-5 text-text cursor-pointer ">
          <PiScroll className="w-6 h-6" />
          <span className="text-sm">Applications</span>
        </div>
      {/* </div> */}

      {/* Search Bar */}
      <div className="flex items-center pr-3 bg-secondary-bg px-2 py-1 rounded-xl w-80 h-11 ">
        <CiSearch className="text-gray-400 w-6 h-6 mr-2" />
        <input
          type="text"
          placeholder="Search listings, users here..."
          className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
        />
      </div>
      </div>
    </nav>
  );
}
