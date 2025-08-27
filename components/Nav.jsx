import { FaRegUser, FaRegFileAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { PiScroll } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { MdOutlineHomeRepairService } from "react-icons/md";

export default function NavBar() {
  return (
    <nav className="w-full bg-white flex items-center px-19 py-2">
      <div className="flex w-full gap-6">
        {/* Dashboard */}
        <div className="flex items-center justify-center flex-1  space-x-2 bg-secondary-bg rounded-md px-3 py-2 cursor-pointer">
          <GoHomeFill className="w-6 h-6 text-secondary" />
          <span className="font-semibold text-sm">Dashboard</span>
        </div>

        {/* Listings */}
        <div className="flex items-center justify-center flex-1  space-x-2 text-text cursor-pointer">
          <MdOutlineHomeRepairService className="w-6 h-6" />
          <span className="text-sm">Listings</span>
        </div>

        {/* Users */}
        <div className="flex items-center justify-center flex-1  space-x-2 text-text cursor-pointer">
          <FaRegUser className="w-6 h-6" />
          <span className="text-sm">Users</span>
        </div>

        {/* Request */}
        <div className="flex items-center justify-center flex-1  space-x-2 text-text cursor-pointer">
          <FaRegFileAlt className="w-6 h-6" />
          <span className="text-sm">Request</span>
        </div>

        {/* Applications */}
        <div className="flex items-center justify-center flex-1  space-x-2 text-text cursor-pointer">
          <PiScroll className="w-6 h-6" />
          <span className="text-sm">Applications</span>
        </div>

        {/* Search Bar → takes 2x space */}
        <div className="flex items-center flex-[2] bg-secondary-bg px-3 py-1 rounded-xl h-11">
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
