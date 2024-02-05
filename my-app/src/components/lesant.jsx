import lesant from "../files/pictures/taste-of-cyprus.png"
import decor from "../files/pictures/decore.png"
function Lesant () {
    return( <div  style={{backgroundImage: `url(${decor})`}} className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex grow gap-5 justify-between pr-5 py-10 text-5xl font-bold text-lime-900 tracking-[2px] max-md:flex-wrap max-md:max-w-full max-md:text-4xl">
          
          <div className="grow my-auto max-md:max-w-full max-md:text-4xl max-sm:pr-3 max-sm:pl-3.5">
<img className="pl-20" src={lesant} alt="" />
          </div>
      </div>
         
  </div>);
}

export default Lesant ;