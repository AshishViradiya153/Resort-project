import Room from './Room';
import React from "react";

const RoomList = ({ rooms }) => {
    // console.log("inside", rooms)
    if (rooms.leagth === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        );
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {/* {console.log("room", rooms)} */}
                {rooms.map(room => {
                    return (<Room key={room.key} room={room} />)
                })}
            </div>
        </section >
    );
}

export default RoomList;