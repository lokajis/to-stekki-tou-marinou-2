import Title from "./title";
import ThreePicturses from "./setOf3Pics";
import Lesant from "./lesant";
import MiddlePart from "./middlePart";
import Reviews from "./reviews";
import ReviewsTwo from "./reviewsTwo";

function MyComponent(props) {
  return (
    <div className="flex flex-col pt-8 pb-12 bg-stone-200">
    <Title / >
     <ThreePicturses/>
     <Lesant/>
   <MiddlePart/>
     <Reviews/>

     <ReviewsTwo/>
    </div>
  );
}




export default MyComponent;