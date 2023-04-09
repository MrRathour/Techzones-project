import "./toolsection.scss";
import { Reviewcard } from "../../../Card/Reviewcard";


export function Toolsection() {

    const data = [{
        img: 'images/gradient-tool.png',
        name: "Gradient Generator",
        place: "Make your project crazy with fantastic and owsm gradients",
        arrow: "images/right-arrow.png"
    }, {
        img: "./images/waiting.png",
        name: "CSS Loader Generator",
        place: "Lets add some crazyness into your project with css loader",
        arrow: "images/right-arrow.png"
    }, {
        img: "./images/blob.svg",
        name: "SVG Blob Generator",
        place: "Make your own Shape for your projects",
        arrow: "images/right-arrow.png"
    }, {
        img: "./images/box.png",
        name: "CSS Box Shadow Generator",
        place: "93 shadows examples for your projects",
        arrow: "images/right-arrow.png"
    }];

    const slides = document.querySelectorAll('.card');

    slides.forEach((element, index) => {
        element.style.left = `${index * 0}%`
    })
    return (
        <div className="tool">
            <div className="heading">
                <h2>Ui Building Tools</h2>
                <p>Start making projects with free ui tools</p>

                <div className="flex-container">
                    <Reviewcard data={data} />
                </div>

            </div>
            <a className="explore-btn" href="/">Explore More <i class="fa-solid fa-caret-right"></i></a>
        </div>
    )
}