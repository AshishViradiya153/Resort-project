import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import RoomContainer from "../Components/RoomContainer";

const Rooms = () => {
    return (
        <div>
            <Hero hero="roomsHero">
                <Banner title="our Rooms">
                    <Link to='/' className="btn-primary">
                        back home
                    </Link>
                </Banner>
            </Hero>
            <RoomContainer></RoomContainer>
        </div>
    );
};

export default Rooms;


