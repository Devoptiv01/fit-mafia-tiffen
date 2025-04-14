const FaqCard = ({img, title, imgTitle}:{img:string, title:string, imgTitle:string}) => {
    return (
      <div className="flex items-center border border-gray-200 w-full lg:max-w-[260px] rounded-md min-h-[220px] bg-white gap-6">
        <div className="w-full flex flex-col gap-6 items-center">
          <img src={img} alt={imgTitle} className="w-16 h-16"/>
          <h4 className="text-[#4b4d4c] text-[20px] font-bold font-arial">{title}</h4>
        </div>
      </div>
    );
  };
  
  export default FaqCard;