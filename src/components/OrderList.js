import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import "../style/orderList.css";
const OrderList = () => {
  return (
    <ul>
      <li className="flex items-center font-bold ">
        <span className="text-2xl mx-1">
          <FiEdit />
        </span>
        <div className=" flex w-full items-center justify-between border p-2 text-gray-500">
          <span> Pure White & Black Sleeve</span>
          <span>$91.00</span>
          <div className="flex">
            <span className="text-2xl mx-2">
              <HiMinusCircle />
            </span>

            <span>1</span>
            <span className="text-2xl mx-2">
              <HiPlusCircle />
            </span>
          </div>

          <span>$91.00</span>
        </div>
        <span className=" text-2xl mx-1 text-red-400">
          <AiOutlineDelete />
        </span>
      </li>
    </ul>
  );
};

export default OrderList;
