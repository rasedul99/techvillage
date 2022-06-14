const IconWithText = ({ icon, title, bgColor, textColor }) => {
  return (
    <div>
      <div
        className={`flex items-center ${bgColor} ${textColor}  p-2 rounded text-2xl`}
      >
        <div className="px-1 ">{icon}</div>
        <div className="px-1">{title}</div>
      </div>
    </div>
  );
};

export default IconWithText;
