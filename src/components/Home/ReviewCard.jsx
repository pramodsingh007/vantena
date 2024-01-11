import { Quote } from "lucide-react"

function ReviewCard() {
  return (
    <div className=" max-w-[50rem] space-y-5">
        <p className=" text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam suscipit eveniet modi earum corporis, molestiae nisi qui neque repellat tempora velit omnis nostrum veniam. Esse culpa laborum neque voluptates quibusdam.</p>
        <div className="flex justify-center"><Quote width={40} height={40} className=" text-primary fill-primary"/></div>
        <h1 className=" text-center font-semibold text-lg">Pramod</h1>
    </div>
  )
}

export default ReviewCard