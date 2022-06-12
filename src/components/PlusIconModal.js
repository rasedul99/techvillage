import { BsPlus } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";
const PlusIconModal = ({ setShowModal }) => {
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <div className="flex items-center text-3xl gap-x-7">
            <span onClick={() => setShowModal(false)}>
              <MdArrowBackIos />
            </span>
            <span class="card-title items-center text-center">
              Add New Customer
            </span>
          </div>

          <form>
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 w-full my-3 py-1"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b-2 w-full my-3 py-1"
            />

            <input
              type="tel"
              placeholder="Phone"
              className="border-b-2 w-full my-3 py-1 "
            />
            <input
              type="text"
              placeholder="Currency"
              className="border-b-2 w-full my-3 py-1"
            />
            <input
              type="text"
              placeholder="Tax ID"
              className="border-b-2 w-full my-3 py-1"
            />
            <div className="flex items-center text-primary font-bold gap-x-3">
              <span className="text-2xl">
                <BsPlus />
              </span>
              <h3> Add More Details</h3>
            </div>
          </form>
          <div className="my-5">
            <button class="btn btn-primary w-full text-white">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlusIconModal;
