/* eslint-disable react/prop-types */
function AboutCard({image,title,text}) {
  return (
    <div className="p-4 space-y-2">
        <div className=" flex justify-center">
            <img className=" w-[10rem]" src={image} alt="about-image" />
        </div>
        <h1 className=" text-2xl font-semibold text-center">{title}</h1>
        <p className=" text-content text-center">{text}</p>
    </div>
  )
}

export default AboutCard