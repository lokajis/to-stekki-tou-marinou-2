import title from "../files/pictures/greenTitle.png"
import { Link } from "react-router-dom";
import Title from "./title";


function ContactTitle () {
    return(
        <div className="self-center max-w-full aspect-[4.76] w-[258px]">
            <Link to="/">
                  <img src={title} alt="" />
        </Link>
        </div>
    );
}

export default ContactTitle ;