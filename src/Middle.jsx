import React, {useEffect} from "react";
import './middle.css';
import { FiDivideCircle } from "react-icons/fi";
import img1 from "./assets/tajMahal.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosInformationCircle } from "react-icons/io";
import img2 from "./assets/jaisalmer.jpeg";
import img3 from "./assets/karelaBackwaters.jpeg";
import img4 from "./assets/laddakh.jpeg";
import img5 from "./assets/goa.jpeg";
import img6 from "./assets/Varanasi.jpeg";
import img7 from "./assets/manali.jpeg";
import img8 from "./assets/hampi.jpeg";
import img9 from "./assets/andaman&nik.jpeg";
import img10 from "./assets/rishikesh.jpeg";

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: "Taj Mahal",
        location: "Agra, Uttar Pradesh",
        fees: "INR 3000 - 5000",
        description: "A UNESCO World Heritage Site, the Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna."
     },
    {
        id: 2,
        imgSrc: img2,
        destTitle: "Jaisalmer",
        location: "Jaisalmer, Rajasthan",
        fees: "INR 7000 - 10000",
        description: "Known as the Golden City, Jaisalmer is famous for its yellow sandstone architecture and the Jaisalmer Fort."
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: "Kerala Backwaters",
        location: "Kerala",
        fees: "INR 10000 - 15000",
        description: "A network of interconnected canals, rivers, lakes, and inlets, the Kerala Backwaters are renowned for their houseboat cruises."
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: "Ladakh",
        location: "Leh, Ladakh",
        fees: "INR 15000 - 20000",
        description: "Known for its breathtaking landscapes, Buddhist monasteries, and adventure tourism, Ladakh is a high-altitude desert."
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: "Goa",
        location: "Goa",
        fees: "INR 8000 - 12000",
        description: "Famous for its beaches, vibrant nightlife, and Portuguese heritage, Goa is a popular tourist destination."
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: "Varanasi",
        location: "Varanasi, Uttar Pradesh",
        fees: "INR 4000 - 6000",
        description: "One of the world's oldest living cities, Varanasi is a spiritual center known for its ghats along the River Ganges."
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: "Manali",
        location: "Manali, Himachal Pradesh",
        fees: "INR 5000 - 8000",
        description: "A high-altitude Himalayan resort town, Manali is famous for its scenic beauty, adventure activities, and the Rohtang Pass."
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: "Hampi",
        location: "Hampi, Karnataka",
        fees: "INR 6000 - 9000",
        description: "A UNESCO World Heritage Site, Hampi is known for its ancient temples, ruins, and historical significance."
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: "Andaman and Nicobar Islands",
        location: "Andaman and Nicobar Islands",
        fees: "INR 20000 - 25000",
        description: "An archipelago in the Bay of Bengal, the Andaman and Nicobar Islands are known for their beaches, coral reefs, and tropical rainforests."
    },
    {
        id: 10,
        imgSrc: img10,
        destTitle: "Rishikesh",
        location: "Rishikesh, Uttarakhand",
        fees: "INR 3000 - 5000",
        description: "A city in the Himalayan foothills, Rishikesh is known as the Yoga Capital of the World and a gateway to the Char Dham pilgrimage."
    }
];



const Main = () => {


     useEffect(()=>{
        Aos.init({duration:2000})
     },[])


    return (
        <section className="main container section">
            <div data-aos="fade-right" className="secTitle">
                <h3 className="title">Most Visited Places</h3>
            </div>
            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, location, fees, description }) => {
                        return (
                            <div key={id} 
                            data-aos="fade-up"
                            className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>Budget from Delhi</span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        Details <IoIosInformationCircle className="icon" />
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default Main;
