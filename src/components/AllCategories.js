import Categories from "./Categories";

const AllCategories = () => {
  return (
    <div class="w-[45%]  right-0 h-full shadow-md bg-white  absolute">
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
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
