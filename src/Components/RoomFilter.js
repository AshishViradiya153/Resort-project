import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";


const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};
const RoomFilter = ({ rooms }) => {
    const context = useContext(RoomContext);

    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets

    } = context;



    console.log(context)
    // console.log("price", type)

    let types = getUnique(rooms, 'type');

    types = ["all", ...types];
    // (console.log("typesss", types))

    types = types.map((item, index) => (
        <option value={item} key={index}>
            {item}
        </option>
    ));
    console.log("here room", rooms)

    let people = getUnique(rooms, 'capacity')

    people = people.map((item, index) => {
        return (
            <option key={index} value={item}>{item}</option>)
    })
    // (console.log("after typesss", types))

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select
                        name="type"
                        id="type"
                        onChange={handleChange}
                        className="form-control"
                        value={type}
                    >
                        {types}

                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        onChange={handleChange}
                        className="form-control"
                    >
                        {people}

                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">room size </label>
                    <div className="size-inputs">
                        <input
                            type="number"
                            id="size"
                            name="minSize"
                            value={minSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                        <input
                            type="number"
                            id="size"
                            name="maxSize"
                            value={maxSize}
                            onChange={handleChange}
                            className="size-input"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="breakfast"
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input
                            type="checkbox"
                            name="pets"
                            checked={pets}
                            onChange={handleChange}
                        />
                        <label htmlFor="breakfast">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default RoomFilter;