import { BsPersonCircle, BsPlusCircle } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import IconWithText from "../../components/IconWithText";
import OrderList from "../../components/OrderList";
const Dashboard = ({ setShowModal, setShowNavbar }) => {
  return (
    <div className="px-2">
      <div className="flex justify-between my-3">
        <button class="text-2xl" onClick={() => setShowNavbar(true)}>
          <GiHamburgerMenu />
        </button>
        <IconWithText
          icon={<FiEdit />}
          title="Note"
          bgColor="bg-[#E7E9F6]"
          textColor="text-[#5C6AC4]"
        />
        <IconWithText
          icon={<FiEdit />}
          title="Shipping"
          bgColor="bg-[#E7E9F6]"
          textColor="text-[#5C6AC4]"
        />
        <IconWithText
          icon={<FiEdit />}
          title="Hold Orders"
          bgColor="bg-[#E7E9F6]"
          textColor="text-[#5C6AC4]"
        />
        <IconWithText
          icon={<FiEdit />}
          title="New Item"
          bgColor="bg-[#E7E9F6]"
          textColor="text-[#5C6AC4]"
        />
      </div>
      <div
        className="flex justify-between  py-3 rounded-sm bg-secondary text-blue-600/75"
        onClick={() => setShowModal(true)}
      >
        <h3 className="text-2xl mx-3">
          <BsPersonCircle />
        </h3>
        <span className="text-xl mx-3 flex-1 ">Rasedul Islam</span>
        <button className="text-2xl mx-3">
          <BsPlusCircle />
        </button>
      </div>
      <div className="my-3">
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
      </div>
      <div className="flex justify-end">
        <div className="w-2/5">
          <div className="flex justify-between border-t-2 py-1">
            <h3>Sub Total</h3>
            <h3>$5025</h3>
          </div>
          <div className="flex justify-between border-t-2 py-1">
            <h3>Tax</h3>
            <h3>$25</h3>
          </div>
          <div className="flex justify-between border-y-2 py-1">
            {" "}
            <h3>Shipping</h3>
            <h3>$5.50</h3>
          </div>
          <div className="flex justify-between text-blue-600/75  py-1">
            {" "}
            <h3>Discount on Cart</h3>
            <h3>$10.00</h3>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-2  py-3 rounded-sm bg-secondary text-blue-600/75">
        <h3 className="text-sm  basis-7/12 ">Products Count (13)</h3>
        <div className="basis-5/12 flex justify-between items-center">
          <span className="text-xl  ml-3">Total</span>
          <span>$5005.50</span>
        </div>
      </div>

      <div className="flex justify-between my-2">
        <IconWithText
          icon={<GiCancel />}
          title="Cancel"
          bgColor="bg-[#FADEDD]"
          textColor="text-[#EF9D9A]"
        />
        <IconWithText
          icon={<GiCancel />}
          title="Hold"
          bgColor="bg-[#DEE1F3]"
          textColor="text-[#5C6AC4]"
        />
        <IconWithText
          icon={<GiCancel />}
          title="Discount"
          bgColor="bg-[#DEE1F3]"
          textColor="text-[#5C6AC4]"
        />
        <IconWithText
          icon={<GiCancel />}
          title="Pay Now"
          bgColor="bg-[#DEE1F3]"
          textColor="text-[#5C6AC4]"
        />
      </div>
    </div>
  );
};

export default Dashboard;
