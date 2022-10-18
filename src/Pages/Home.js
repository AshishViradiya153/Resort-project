import { useRef } from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import FeaturedRooms from "../Components/FeaturedRooms";
import Hero from "../Components/Hero";
import InputBox from "../Components/InputBox";

import Services from "../Components/Services";

const Home = () => {
    const valueRef = useRef()

    const subtitle = ("deluxe rooms starting  at $299");
    const title = ("Luxurious Rooms");
    return (
        <div>
            <Hero>
                <Banner title={title} subTitle={subtitle}>
                    <Link to='/Rooms' className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            <InputBox ref={valueRef} />
            <button onClick={() => { valueRef.current.showValue() }}>Focus</button>
        </div>
    )
}

export default Home;