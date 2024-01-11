/* eslint-disable react/prop-types */
function WhySectionCard({image,title,text}) {
  return (
    <div className=" space-y-1 group">
      <div className=" flex justify-center">
        <div className="w-[10rem] group-hover:-translate-y-4 duration-700 p-8 rounded-full bg-slate-50">
          <img className="  " src={image} alt="team" />
        </div>
      </div>
      <h1 className=" text-title text-center text-2xl font-semibold">{title}</h1>
      <p className=" text-content text-center text-md">
        {text}
      </p>
    </div>
  );
}

export default WhySectionCard;
