/* eslint-disable react/prop-types */
function SolutionCard({images,title}) {
  return (
    <div className="flex justify-center">
       <div>
       <div className=" w-[10rem]"><img src={images} alt="services-image" /></div>
         <h1 className=" font-semibold text-md">{title}</h1>
       </div>
    </div>
  )
}

export default SolutionCard