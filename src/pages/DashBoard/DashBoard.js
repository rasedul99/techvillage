import { BsPersonCircle, BsPlusCircle } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import OrderList from "../../components/OrderList";
const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between m-5">
        <div className="flex  bg-primary p-3 rounded">
          <div className="mx-2">
            <FiEdit />
          </div>
          <div>Note</div>
        </div>
        <div className="flex  bg-primary p-3">
          <span className="mx-2">
            <FiEdit />
          </span>
          <span>Note</span>
        </div>
        <div className="flex  bg-primary p-3">
          <span className="mx-2">
            <FiEdit />
          </span>
          <span>Note</span>
        </div>
        <div className="flex  bg-primary p-3">
          <span className="mx-2">
            <FiEdit />
          </span>
          <span>Note</span>
        </div>
      </div>
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
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
      </div>
    </div>
  );
};

export default Dashboard;
