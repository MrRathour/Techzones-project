import "./toolsection.scss";
import { Reviewcard } from '../Reviewslider/Reviewcard';


export function Toolsection() {

    const data = [{
        img: '../images/html-5.png',
        name: "HTML5",
    }, {
        img: "./images/css.png",
        name: "CSS3",
    }, {
        img: "./images/java-script.png",
        name: "Java Script",
    }, {
        img: "./images/files.png",
        name: "PHP",
    }]

    return (
        <div className="tool">
            <div className="heading">
                <h2>Ui Building Tools</h2>
                <p>Start making projects with free ui tools</p>

                <div className="flex-container">
                    <Reviewcard data={data} />
                </div>
                <a className="explore-btn" href="/">Explore More <i class="fa-solid fa-caret-right"></i></a>
            </div>
        </div>
    )
}