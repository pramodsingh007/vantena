/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function WorkCard({image,text,step}) {
  return (
    <div >
        <div className=" flex justify-center">
            <div className=" relative w-[10rem] p-8 bg-slate-100 rounded-full"><img src={image} alt="work-img" />
            <div className=" text-white bg-primary px-2 text-sm py-1 rounded-full absolute top-0 right-[-10px]" >Step {step}</div>
            </div>
        </div>
        <h1 className=" font-semibold text-xl text-center">{text}</h1>
        
    </div>
  )
}

export default WorkCard