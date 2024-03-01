import Buttons from "./buttons";
import Lesant from "./lesant";
import ThreePicturses from "./setOf3Pics";

function MiddlePart () {
    return(   <div className="flex flex-col px-10 mt-1.5 w-full max-md:px-5 max-md:max-w-full">
       <img
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bcab3ad0d245a7ddecc0eaad72066d84ccfa19f3102a227ee25cce90426b2330?apiKey=02d92fbd5fb14097898c1e0a25d70d27&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcab3ad0d245a7ddecc0eaad72066d84ccfa19f3102a227ee25cce90426b2330?apiKey=02d92fbd5fb14097898c1e0a25d70d27&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcab3ad0d245a7ddecc0eaad72066d84ccfa19f3102a227ee25cce90426b2330?apiKey=02d92fbd5fb14097898c1e0a25d70d27&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcab3ad0d245a7ddecc0eaad72066d84ccfa19f3102a227ee25cce90426b2330?apiKey=02d92fbd5fb14097898c1e0a25d70d27&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcab3ad0d245a7ddecc0eaad72066d84ccfa19f3102a227ee25cce90426b2330?apiKey=02d92fbd5fb14097898c1e0a25d70d27&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcab3ad0d245a7ddecc0eaad72066d84ccfa19f3102a227ee25cce90426b2330?apiKey=02d92fbd5fb14097898c1e0a25d70d27&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcab3ad0d245a7ddecc0eaad72066d84ccfa19f3102a227ee25cce90426b2330?apiKey=02d92fbd5fb14097898c1e0a25d70d27&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcab3ad0d245a7ddecc0eaad72066d84ccfa19f3102a227ee25cce90426b2330?apiKey=02d92fbd5fb14097898c1e0a25d70d27&"
      className="justify-center  mt-24  w-full aspect-[1.56] max-md:mt-10 max-md:max-w-full"
    />
          <Lesant/>

    <div className="mr-2.5 ml-3 text-lg font-light text-lime-900 max-md:max-w-full">
      A tavern surrounded by the Mediterranean which was designed, built
      and operates with its own distinct philosophy.
      <br />
      <br />
      With a special naturistic aesthetic equal to the most famous and
      recognised taverns of the island. The careful
      decoration, lighting and music are all the result of many years of
      experience and research. Nothing just happened at "To stekki tou Marinou".
    </div>
   
    <ThreePicturses/>
   <Buttons/>
  </div>);
}

export default MiddlePart ;