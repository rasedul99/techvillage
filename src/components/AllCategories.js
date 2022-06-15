import Categories from "./Categories";

const AllCategories = ({ setShowCategories }) => {
  return (
    <div className="flex h-screen absolute">
      <div className="w-[55%] bg-[#BCBFC2] bg-opacity-50">
        <h3
          className="text-3xl cursor-pointer text-right text-white px-2 "
          onClick={() => setShowCategories(false)}
        >
          X
        </h3>
      </div>
      <div className="w-[45%] bg-white">
        <div className="my-7">
          <h3 className="text-center text-3xl font-medium">Categories</h3>
        </div>
        <div className="px-4">
          <div className="flex gap-4 mt-3 flex-wrap ">
            <Categories text=" All Categories" />
            <Categories text=" Electronics" />
            <Categories text=" Home $ LifeStyle" />
            <Categories text="  Men Fashion" />
            <Categories text="  Toys" />
            <Categories text="  All Categories" />
            <Categories text="  Women Fashion" />
            <Categories text="  Toys" />
            <Categories text="  Electronics" />

            <Categories text="  Women Fashion" />
            <Categories text="  Home $ LifeStyle" />
            <Categories text="  Women Fashion" />
            <Categories text="  Toys" />
            <Categories text="  Women Fashion" />
            <Categories text="  Women Fashion" />
            <Categories text="  Women Fashion" />
            <Categories text="  Women Fashion" />
            <Categories text="  Women Fashion" />
            <Categories text="  Women Fashion" />
            <Categories text="  Women Fashion" />
            <Categories text="  Women Fashion" />
            <Categories text="  Women Fashion" />
            <Categories text="  Women Fashion" />
            <Categories text="  Women Fashion" />
            <Categories text="  Women Fashion" />
            <Categories text="  Women Fashion" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
