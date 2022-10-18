import Title from "./Title";
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from 'react-icons/fa';

const services = [
    {
        icon: <FaCocktail />,
        title: 'free coctails',
        info: 'It is possible to stand around with a cocktail in one’s hand and talk with everyone, which means with no one.'
    },
    {
        icon: <FaHiking />,
        title: 'Endless hiking',
        info: "Hiking is not escapism; it’s realism. The people who choose to spend time outdoors are not running away from anything; we are returning to where we belong."
    },
    {
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info: "I don't think I've drunk enough beer to understand that."
    },
    {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: "It is possible to stand around with a cocktail in one’s hand and talk with everyone, which means with no one."
    }
]

const Services = () => {
    return (
        <section className="services">
            <Title title="Services" />
            <div className="services-center">
                {services.map((item, index) => {
                    return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}

export default Services;