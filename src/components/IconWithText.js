const IconWithText = ({ icon, title }) => {
  return (
    <div>
      <div className="flex items-center bg-secondary text-blue-600/75 p-3 rounded text-2xl">
        <div className="px-1 ">{icon}</div>
        <div className="px-1">{title}</div>
      </div>
    </div>
  );
};

export default IconWithText;
