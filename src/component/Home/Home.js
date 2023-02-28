import { Navbar } from "../../Navbar/Navbar";
import { Footer } from "../../Footer/Footer";
import { Firstsection } from "./Firstsection/Firstsection";
import { Thought } from "./Thought/Thought";
import { Review } from "./Reviewslider/Review";
import { Courseshow } from "./Courseshow/Courseshow";
import { Toolsection } from "./Toolsection/Toolsection";
import { Xyz } from "./Xyz";
export function Home(){
    return(
        <>
        <Navbar/>
        <Firstsection/>
        <Thought/>
        <Review/>
        <Courseshow/>
        <Toolsection/>
        <Xyz/>
        <Footer/>
        </>
    )
}