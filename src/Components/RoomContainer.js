import React, { useContext } from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";
import { RoomContext } from "../context";


const RoomContainer = () => {
    const { data } = useContext(RoomContext)

    const { loading, sortedRooms, rooms } = data;

    if (loading) {
        return (<Loading />)
    }
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
}

export default RoomContainer;