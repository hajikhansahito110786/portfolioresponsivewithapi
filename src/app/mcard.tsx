
import Image from "next/image"
import img from "./butterfly1.jpg"
export default function Mcard1() {
  return (
    <div className="h-[90vh] bg-green-400 flex flex-col items-center justify-center ">

<div className="card bg-base-100 w-80 shadow-xl p-5 flex flex-col justify-center items-center" >
  <figure>
    <Image
      src={img}
      alt="Shoes" 
      width={200}
      height={200}
      className="rounded-md mx-auto"
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
     mcard1
    </div>
  );
}
