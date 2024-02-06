import contactPage from "../files/pictures/ContactPage.png"
import Title from "../components/title";
import info from "../files/pictures/ContactInfo.png";
import decor from "../files/pictures/decore.png"
import { Link } from "react-router-dom";
import ContactTitle from "../components/contactTitle";
function ContuctPage() {

    return (
        <div className="h-screen flex flex-col pt-3 pb-12 bg-stone-200  ">
            <ContactTitle/>
            <div style={{ backgroundImage: `url(${decor})` }}
                className="flex gap-0 justify-between items-start px-5 mt-24 w-full text-5xl font-bold text-lime-900 whitespace-nowrap tracking-[2px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full max-md:text-4xl max-sm:pb-6">

                <div className="grow flex  justify-center  my-7 mt-10 bg-blend-darken max-md:text-4xl ">
                    <img className="	" src={contactPage} alt="" />
                </div>
            </div>

            
            <div className=" flex  justify-center py-10 pt-20 px-10">
                <img src={info} alt="" />
            </div>

        </div>
    );
}

export default ContuctPage; 