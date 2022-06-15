import { AiOutlineSetting } from "react-icons/ai";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbLayoutDashboard } from "react-icons/tb";

const Navbar = ({ setShowNavbar }) => {
  return (
    <div className="flex w-full h-full absolute">
      <div class="w-1/5  bg-white">
        <div className="p-5 bg-gray-100">
          <h1 className="text-center text-4xl font-bold py-5">
            go<span className="text-[#85D808]">B</span>illing
          </h1>
          <h3 className="text-sm font-normal">Location:</h3>
          <h3 className="text-2xl font-normal ">Los Angeles,California</h3>
        </div>
        <ul class="relative">
          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-[#5C6AC4] hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <h3 className="text-xl px-2">
                <TbLayoutDashboard />
              </h3>

              <span className="text-xl px-2">DashBoard</span>
            </a>
          </li>
          <li class="relative">
            <a
              class="flex items-center  text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-[#5C6AC4] hover:bg-gray-100  transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <h3 className="text-xl px-2">
                <HiOutlineLocationMarker />
              </h3>
              <span className="text-xl px-2">Location</span>
            </a>
          </li>
          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-[#5C6AC4] hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <h3 className="text-xl px-2">
                <FaFileInvoiceDollar />
              </h3>

              <span className="text-xl px-2">POS Invoices</span>
            </a>
          </li>
          <li class="relative ">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-[#5C6AC4] hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <h3 className="text-xl px-2">
                <AiOutlineSetting />
              </h3>
              <span className="text-xl px-2">Setting</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-4/5 bg-[#BCBFC2] bg-opacity-50">
        <h3
          className="text-3xl cursor-pointer  text-white px-2 "
          onClick={() => setShowNavbar(false)}
        >
          X
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
