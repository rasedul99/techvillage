import { AiOutlineSetting } from "react-icons/ai";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbLayoutDashboard } from "react-icons/tb";
const Navbar = () => {
  return (
    <div className="flex">
      <div class="w-80 h-full shadow-md bg-white  absolute">
        <div className="p-5 bg-gray-100">
          <h1 className="text-center text-4xl font-bold py-5">
            go<span className="text-[#85D808]">B</span>illing
          </h1>
          <h3>Location:</h3>
          <h3 className="text-2xl font-semibold">Los Angeles,California</h3>
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
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-[#5C6AC4] hover:bg-gray-100 transition duration-300 ease-in-out"
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
      {/* <div className="bg-[#BCBFC2] h-full absolute">
        hello djfhdfhbkjvhnfnlfdhfnkdjfbdhgdfhgbdhfgdhdfhbg
      </div> */}
    </div>
  );
};

export default Navbar;
