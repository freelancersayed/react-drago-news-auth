import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrekingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-error">Letest</button>
            <Marquee className="text-3xl" pauseOnHover={true} speed={80}>
               <Link className="mx-6" to='/'> oma fagune tor amer bone grhane pagol kore</Link>
               <Link className="mx-6" to='/'> oma fagune tor amer bone grhane pagol kore</Link>
               <Link className="mx-6" to='/'> oma fagune tor amer bone grhane pagol kore</Link>
            </Marquee>
        </div>
    );
};

export default BrekingNews;