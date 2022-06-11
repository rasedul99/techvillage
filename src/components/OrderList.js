import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import "../style/orderList.css";
const OrderList = () => {
  return (
    <ul>
      <li>
        <span className="inline-block text-2xl mx-2">
          <FiEdit />
        </span>
        <div className="border inline-block  py-3">
          <span className="mx-5"> Pure White & Black Sleeve</span>
          <span className="mx-3">$91.00</span>
          <span className="inline-block mx-2">
            <HiPlusCircle />
          </span>
          <span>1</span>
          <span className="inline-block mx-2">
            <HiMinusCircle />
          </span>
        </div>
        <span className="inline-block text-2xl mx-2">
          <AiOutlineDelete />
        </span>
      </li>
    </ul>
  );
};

export default OrderList;
