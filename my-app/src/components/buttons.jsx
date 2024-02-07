import pdfMenu from "../files/Stekki-tou-Marinou-MENU.pdf"
import { Link } from "react-router-dom";

function openLocationLink (){
    window.open("https://www.google.com/maps/place/%CE%A4%CE%BF+%CE%A3%CF%84%CE%B5%CE%BA%CE%BA%CE%B9+%CE%A4%CE%BF%CF%85+%CE%9C%CE%B1%CF%81%CE%B9%CE%BD%CE%BF%CF%85/@34.9509064,33.2948848,15z/data=!4m2!3m1!1s0x0:0xa57e077595835e01?sa=X&ved=2ahUKEwj4mJjC_5OEAxV21QIHHShHCY0Q_BJ6BAg2EAA");
}

function Buttons () {
    return( <div className="mt-28  max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
    <div className="flex flex-col md:flex-row gap-5 max-md:flex-col ">
        <div onClick={openLocationLink} className="hover:bg-lime-950 hover:text-gray-200 cursor-pointer	 text-center grow justify-center items-center px-10 pt-24 pb-12 w-full text-2xl font-light text-lime-900 uppercase whitespace-nowrap bg-stone-100 max-md:px-5 max-md:pt-10 max-md:mt-10">
          Location
        </div>
        <a className="hover:bg-lime-950 hover:text-gray-200 cursor-pointer	 text-center	 grow justify-center items-center px-10 pt-24 pb-12 w-full text-2xl font-light text-lime-900 uppercase whitespace-nowrap bg-stone-100 max-md:px-5 max-md:pt-10 max-md:mt-10" href={pdfMenu} target="_blank"
                    rel="noreferrer">
         <div>Menu</div>
             </a>  
        <Link className="hover:bg-lime-950 hover:text-gray-200 cursor-pointer	 text-center	 grow justify-center items-center px-10 pt-24 pb-12 w-full text-2xl font-light text-lime-900 uppercase whitespace-nowrap bg-stone-100 max-md:px-5 max-md:pt-10 max-md:mt-10" to="/contactPage">
          Contact
      </Link>
    </div>
  </div>);
}

export default Buttons ;