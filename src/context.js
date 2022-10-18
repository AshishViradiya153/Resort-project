import items from './data';
import React, { useEffect, useState } from "react";


const RoomContext = React.createContext();

const RoomProvider = (props) => {

    const defaultData = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false

    };

    const [data, setData] = useState(defaultData);

    useEffect(() => {
        let rooms = formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        setData({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            size: maxSize
        });

    }, [])


    const formatData = (items) => {
        let tempItems = items.map((items) => {
            const key = items.sys.id;
            let id = items.sys.id;
            let images = items.fields.images.map(image =>
                image.fields.file.url);
            let room = { ...items.fields, images, id, key };
            return room;
        });
        return tempItems;
    };

    const getRoom = (slug) => {
        let tempRooms = [...data.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    };
    const handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log("event", event.target)
        console.log("name and value", name, value);
        setData((prevState) => {
            // console.log('From set State', value, name);
            // filterRooms()
            return ({ ...prevState, [name]: value }
                // console.log("name  321", value)
            )
        })
    };
    // 
    // const filterRooms = () => {
    //     let {
    //         rooms,
    //         type,
    //         capacity,
    //         price,
    //         minSize,
    //         maxSize,
    //         breakfast,
    //         pets
    //     } = data;
    //     // console.log("aall", tempRooms)
    //     let tempRooms = [...rooms];

    //     capacity = parseInt(capacity)
    //     price = parseInt(price);
    //     // console.log("aall", tempRooms)
    //     if (type !== 'all') {
    //         tempRooms = tempRooms.filter(room => room.type === type);
    //     }
    //     // console.log("aall", tempRooms)

    //     if (capacity !== 1) {
    //         tempRooms = tempRooms.filter(room => room.capacity >= capacity)
    //     }

    //     tempRooms = tempRooms.filter(room => room.price <= price);
    //     //filter by size
    //     tempRooms = tempRooms.filter(
    //         room => room.size >= minSize && room.size <= maxSize
    //     );
    //     //filter by breakfast
    //     if (breakfast) {
    //         tempRooms = tempRooms.filter(room => room.breakfast === true);
    //     }
    //     //filter by pets
    //     if (pets) {
    //         tempRooms = tempRooms.filter(room => room.pets === true);
    //     }

    //     setData((prevState) => {
    //         return (
    //             {
    //                 ...prevState,
    //                 sortedRooms: tempRooms
    //             })
    //     });
    // console.log("after the ", tempRooms)
    // }

    return (
        <RoomContext.Provider value={{ data, getRoom, handleChange }} >
            {props.children}
        </RoomContext.Provider >
    );
}


export { RoomContext, RoomProvider };