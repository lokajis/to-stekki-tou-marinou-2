import reviews from "../files/pictures/Reviews.png"
import decor from "../files/pictures/decore.png"


function Reviews () {
     
     
    return( <div   style={{backgroundImage: `url(${decor})`}}
    className="flex gap-0 justify-between items-start px-5 mt-24 w-full text-5xl font-bold text-lime-900 whitespace-nowrap tracking-[2px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full max-md:text-4xl max-sm:pb-6">
    
    <div className="grow justify-center items-start py-8 mt-10 bg-blend-darken max-md:text-4xl max-sm:pl-8">
<img className="ml-10	" src={reviews} alt="" />    </div>
  </div>);
}

export default Reviews;