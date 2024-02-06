import Title from "../components/title";
import ThreePicturses from "../components/setOf3Pics";
import Lesant from "../components/lesant";
import MiddlePart from "../components/middlePart";
import Reviews from "../components/reviews";
import ReviewsTwo from "../components/reviewsTwo";

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