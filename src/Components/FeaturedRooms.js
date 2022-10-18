import Loading from "./Loading";
import { RoomContext } from "../context";
import Room from "./Room";
import Title from './Title';
import { useContext } from "react";

const FeaturedRooms = () => {
    const { data } = useContext(RoomContext);
    let { loading, featuredRooms: rooms } = data;
    rooms = rooms.map(room => {
        return <Room key={room.key} room={room} />
    })

    return (
        <section className="featured-rooms">
            <Title title="featured rooms" />

            <div className="featured-rooms-center">
                {loading ? <Loading /> : rooms}
            </div>
        </section>
    );

}

export default FeaturedRooms;