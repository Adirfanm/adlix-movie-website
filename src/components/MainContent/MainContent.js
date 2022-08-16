import Hero from "../Hero/Hero"
import Popular from "./Section/Popular";
import Theaters from "./Section/Theaters";
import Genre from "./Section/Genre";
import './MainContent.css'



const Maincontent = () => {

    return (
        <>
            <Hero />
            <Popular />
            <Theaters />
            <Genre />
        </>
    )
}

export default Maincontent;