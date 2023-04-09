import './courseshow.scss';
import { Reviewcard } from '../../../Card/Reviewcard';

export function Courseshow() {
    const data = [{
        img: '../images/html-5.png',
        name: "HTML5",
        place: "HTML stands for HyperText Markup Language. It is used to design web pages using a markup language. H..."
    }, {
        img: "./images/css.png",
        name: "CSS3",
        place: "CSS is a language used for styling and formatting web pages, controlling layout, appearance, and presentation."
    }, {
        img: "./images/java-script.png",
        name: "Java Script",
        place: "JavaScript creates interactive web pages and adds behavior to web applications."
    }, {
        img: "./images/files.png",
        name: "PHP",
        place: "PHP is a server-side language used for building dynamic web pages and interacting with databases."
    }, {
        img: "./images/bootstrap.png",
        name: "Bootstrap",
        place: "Bootstrap is a front-end framework for creating responsive websites with pre-built CSS and JavaScript components."
    }, {
        img: "./images/git.png",
        name: "Git and Github",
        place: "Git is for version control, while GitHub is a web-based hosting service for Git repositories."
    },]

    const slides = document.querySelectorAll('.card');

    slides.forEach((element, index) => {
        element.style.left = `${index * 0}%`
    })

    return (
            <div className="showcase">
                <div className="heading">
                    <h2>Start Your Learning</h2>
                    <p>Lets start your journey with free our free courses</p>

                    <div className="flex-container">
                        <Reviewcard data={data} />
                    </div>
                    <a className="explore-btn" href="/">Explore More <i class="fa-solid fa-caret-right"></i></a>
                </div>
            </div>
    )
}