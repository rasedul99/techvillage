import { AiOutlineDelete } from "react-icons/ai";
import { BsPersonCircle, BsPlusCircle } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import "./DashBoard.css";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between  py-5 rounded-sm bg-secondary text-blue-600/75">
        <h3 className="text-2xl mx-3">
          <BsPersonCircle />
        </h3>
        <span className="text-xl mx-3 flex-1 ">Rasedul Islam</span>
        <h3 className="text-2xl mx-3 ">
          <BsPlusCircle />
        </h3>
      </div>
      <div className="my-3">
        <ul>
          <li>
            <span className="inline text-2xl">
              <FiEdit />
            </span>
            <div className="border inline-block py-3">
              <span> Pure White & Black Sleeve</span>
              <span>$91.00</span>
              <span className="inline">
                <HiPlusCircle />
              </span>
              <span>1</span>
              <span className="inline">
                <HiMinusCircle />
              </span>
            </div>
            <span className="inline text-2xl">
              <AiOutlineDelete />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
