import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";

const Error = () => {
    return (
        <Hero >
            <Banner title='404' subTitle="page not found">
                <Link to='/' className="btn-primary">
                    back Home
                </Link>
            </Banner>
        </Hero >
    );
}

export default Error;